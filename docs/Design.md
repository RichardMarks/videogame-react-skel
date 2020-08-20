# Demonstration Game Design

The `index.js` JavaScript file contains the entire skeleton code which is based upon the [original skeleton code](https://github.com/diogoeichert/videogame-skel) provided by [Diogo Eichert](https://github.com/diogoeichert).

> **Notice: API links marked with `%source%` were undocumented at the time of this writing and link to the source code of the implementation on Github. The source may have changed by the time this document is read. Use the links to give a clue where to look in the source.**

#### Game Objective

+ Move the **player** to the **loot** position to gain a **score** point.

#### Game Objects

The `player` game object (`game.state.player`) is a `ControllableSprite` with a size of `32x32` pixels, colored solid `yellow` that has collisions enabled.

#### Videogame API used
+ [Rect setWidth](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1245) `%source%`
+ [Rect.setHeight](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1250) `%source%`
+ [Sprite.setColor](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#setcolorcolor)
+ [Sprite.setSolid](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#setsolid)
+ [Color enum](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#color)

#### Videogame Plugins used
+ [controllable.ControllableSprite](https://github.com/diogoeichert/videogame-plugin/blob/master/src/controllable.js)

```js
const player = new ControllableSprite()
  // specify the dimensions of the sprite
  .setWidth(32)
  .setHeight(32)
  // specify the color of the sprite
  .setColor(Color.Yellow)
  // specify that the sprite should be added to the collision detection system
  .setSolid()
```

The `loot` game object (`game.state.loot`) is a `Sprite` with a size of `16x16` pixels, colored solid `green` that has collisions enabled.

#### Videogame API used
+ [Videogame.sprite](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1049) `%source%` -> [Sprite](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#sprite)
+ [Rect setWidth](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1245) `%source%`
+ [Rect.setHeight](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1250) `%source%`
+ [Rect.setCenter](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1315) `%source%`
+ [get Rect.center](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1241) `%source%`
+ [Sprite.setColor](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#setcolorcolor)
+ [Sprite.setSolid](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#setsolid)
+ [Color enum](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#color)

#### Videogame Plugins used

+ None

```js
const loot = Videogame.sprite()
  // specify the dimensions of the sprite
  .setWidth(16)
  .setHeight(16)
  // set the starting position in the middle of the scene
  .setCenter(scene.center)
  // specify the color of the sprite
  .setColor(Color.Green)
  // specify that the sprite should be added to the collision detection system
  .setSolid()
```

The `score` game object (`game.state.score`) is a `TextSprite` with a size of `16x16` pixels, positioned in the top right corner of the scene.

#### Videogame API used
+ [TextSprite](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#textsprite)
+ [Rect setWidth](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1245) `%source%`
+ [Rect.setHeight](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1250) `%source%`
+ [Rect.setRight](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1270) `%source%`
+ [Rect.setTop](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1279) `%source%`
+ [get Rect.right](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1221) `%source%`
+ [get Rect.top](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1225) `%source%`

#### Videogame Plugins used

+ None

```js
const score = new TextSprite()
  // specify the dimensions of the sprite
  .setWidth(16)
  .setHeight(16)
  // set the position to the top right corner of the scene
  .setRight(scene.right)
  .setTop(scene.top)
```


The `starfield` game object (`game.state.starfield`) is a `Starfield` sprite that fills the scene with stars that move in parallax.

#### Videogame API used

+ [Sprite.setSpeedX](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1522) `%source%`
+ [Sprite.setSpeedY](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1527) `%source%`

#### Videogame Plugins used

+ [starfield.Starfield](https://github.com/diogoeichert/videogame-plugin/blob/master/src/starfield.js)

```js
const starfield = new Starfield()
  // specify the sprite motion vector towards the bottom left
  .setSpeedX(-1)
  .setSpeedY(1)
```


The `scene` game object (`game.state.scene`) is the base `Scene` sprite object which serves as the parent of all other game objects.

#### Videogame API used

+ [Videogame.scene](https://github.com/diogoeichert/videogame/blob/master/src/videogame.js#L1045) `%source%` -> [Scene](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#scene)
+ [Sprite.setColor](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#setcolorcolor)
+ [Color enum](https://github.com/diogoeichert/videogame/blob/master/docs/api.md#color)

#### Videogame Plugins used

+ None

```js
const scene = Videogame.scene()
  // specify the color of the sprite
  .setColor(Color.Navy)
```
