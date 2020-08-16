"use strict";

/* global videogame */

const Color = videogame.Color;
const Command = videogame.Command;
const TextSprite = videogame.TextSprite;
const Videogame = videogame.Videogame;

const ControllableSprite = videogame.plugin.controllable.ControllableSprite;
const Starfield = videogame.plugin.starfield.Starfield;

let scene = Videogame.scene()
	.setColor(Color.Navy);

const starfield = new Starfield()
	.setSpeedX(-1)
	.setSpeedY(1);

const score = new TextSprite()
	.setWidth(16)
	.setHeight(16)
	.setRight(scene.right)
	.setTop(scene.top);

const player = new ControllableSprite()
	.setWidth(32)
	.setHeight(32)
	.setColor(Color.Yellow)
	.setSolid();

player.update = () => {
	if (player.controller.didPerform([Command.LEFT, Command.RIGHT, Command.LEFT, Command.RIGHT, Command.B, Command.A])) {
		player.center = loot.center;
	}

	if (player.controller.keyDown(Command.A)) {
		player.step = 4;
	} else {
		player.step = 2;
	}
};

const loot = Videogame.sprite()
	.setWidth(16)
	.setHeight(16)
	.setCenter(scene.center)
	.setColor(Color.Green)
	.setSolid();

loot.onCollision = () => {
	++score.text;
	loot.x = Videogame.random(scene.width);
	loot.y = Videogame.random(scene.height);
};

scene.add(starfield);
scene.add(score);
scene.add(player);
scene.add(loot);
score.text = 0;
Videogame.setName("My Game");
Videogame.init(scene);
