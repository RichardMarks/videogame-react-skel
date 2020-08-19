# Advanced Videogame Skeleton Architecture

## File Structure

These are the only files and folders that are important to a game project.

```
public
└── index.html
src
├── api
│   ├── vg-plugins.js
│   └── vg.js
├── index.js
└── style
    └── index.css
```

> *The rest of the files in this skeleton project may be safely ignored during development and exist purely for the setup of the dev environment or for documentation purposes.*

## Code Structure

The JavaScript files in this project under the `api` directory are **optional** and provide access to the entire [Videogame API](http://diogoeichert.github.io/videogame/) and all available [plugins](https://github.com/diogoeichert/videogame-plugin) in an [import module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) format.

> *If these optional files are not used, it is recommended to look at them to see the manner in which the Videogame API is being used in the project.*

### Skeleton Code

The `index.js` JavaScript file contains the entire skeleton code which is based upon the original skeleton code provided by [Diogo Eichert](https://github.com/diogoeichert).

> *Fundamental structural changes were made to the original skeleton to support easy debugging processes and logical formatting of the project.*

+ **Game code has been restructured**
+ **The game is now started after ther DOM finishes loading**
+ **All game objects are available through `game.state`**
+ **All game logic is implemented as methods on the `game` object**
+ **Optional `window.$debug` is setup for debugging in the browser console**

The `SkeletonGame` object serves as a *pseudo-class* that provides a single `create` factory method which creates the game instance.

The pattern being used is summarized below:
```js
const PseudoClassName = {
  create (creationParams) {
    // define the instance, methods and state
    const instance = {
      creationParams
    }

    return instance
  }
}

const instance = PseudoClassName.create('foo')
```

The `boot` function is called when the [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) event fires.

+ **Creates the instance of `SkeletonGame`**
+ **Setup the `window.$debug` debugging code**
+ **Calls the `start` method of the game instance**

### Debugging

Through the `window.$debug` property in the browser, the developer is able to inspect the current state of the game, and manipulate the game objects at runtime.

An example would be to move the player to the starting position:

```js
> window.$debug.game.state.player.setPosition(0, 0)
```

or to view the loot coordinates in a table:

```js
> table([window.$debug.game.state.loot], ['x', 'y'])
```

**Hint: That code may be added as a method on the game or on the `$debug` object itself for even more utility**

```js
// in the boot() function in index.js
window.$debug.showPosition = target => {
  window.console.table([target], ['x', 'y'])
}
```

This method may now be called at runtime:

```js
> window.$debug.showPosition(window.$debug.game.state.loot)
```

To reduce the typing necessary, the utility method can be rewritten to take the name of the target:

```js
// in the boot() function in index.js
window.$debug.showPosition = targetOrName => {
  if (typeof targetOrName === 'string') {
    // use the name to lookup the target
    const target = game.state[targetOrName]
    // give an error if the target cannot be found
    if (target === undefined) {
      throw new Error('Unable to find target: ' + targetOrName)
    }
    window.console.table([target], ['x', 'y'])
  } else {
    window.console.table([targetOrName], ['x', 'y'])
  }
}
```

This method may now be called at runtime much easier:

```js
> window.$debug.showPosition('loot')
```

**Enjoy your easy runtime debugging**
