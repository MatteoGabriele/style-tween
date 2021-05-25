# style-tween
Probably the smallest tween library you can find.

### Installation

```js
npm install style-tween

// OR

yarn add style-tween
```

### Usage
The StyleTween class accepts the HTML element to tween and the tween options.

#### options
- `duration`: expressed in seconds. default `0.6s`
- `style`: an object with name and value of the CSS property to tween
- `ease`: the type of easing function to use. default is `easeOutExpo`

```js
import StyleTween from 'style-tween';

const element = document.getElementById('myDiv')

const tween = new StyleTween(element, {
  duration: 0.6,
  ease: 'easeOutExpo',
  style: {
    top: '10px',
    left: '10px'
  }
});

tween.run()
```

### Easing functions list

- ease
- easeIn
- easeOut
- linear
- easeInSine
- easeOutSine
- easeInOutSine
- easeOutQuad
- easeInOutQuad
- easeInQuad
- easeOutExpo
- easeInExpo
- easeInOutExpo
- easeOutCubic
- easeInCubic
- easeInOutCubic
- easeOutQuart
- easeInQuart
- easeInOutQuart
- easeOutQuint
- easeInQuint
- easeInOutQuint
- easeOutCirc
- easeInCirc
- easeInOutCirc
- easeOutBack
- easeInBack
- easeInOutBack
