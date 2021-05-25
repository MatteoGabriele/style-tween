import easings from "./esaings";

export default class StyleTween {
  constructor(el, options = {}) {
    this.node = el;
    this.duration = options.duration == null ? 0.6 : options.duration;
    this.properties = options.style || {};
    this.ease = easings[options.ease] || easings.easeOutExpo;
  }

  static tweenId = "data-tween-id";

  static transitionCSSProperty = "transition";

  static killTween(el) {
    const tweenId = el.getAttribute(StyleTween.tweenId);

    if (tweenId) {
      clearInterval(tweenId);
      el.removeAttribute(StyleTween.tweenId);
    }

    if (el.style.getPropertyValue(StyleTween.transitionCSSProperty) === "") {
      return;
    }

    el.style.removeProperty(StyleTween.transitionCSSProperty);
  }

  createTransitionProperty() {
    return Object.keys(this.properties)
      .map((key) => `${key} ${this.duration}s ${this.ease}`)
      .join(", ");
  }

  run() {
    const transition = this.createTransitionProperty();

    this.node.style.setProperty(StyleTween.transitionCSSProperty, transition);

    Object.keys(this.properties).forEach((key) => {
      this.node.style.setProperty(key, this.properties[key]);
    });

    this.timer = setTimeout(() => {
      StyleTween.killTween(this.node);
    }, this.duration * 1000);

    this.node.setAttribute(StyleTween.tweenId, this.timer);
  }
}
