import easings from "./esaings";

const tweenIdKey = "data-tween-id";
const CSSTransitionProperty = "transition";
const duration = 0.6;
const timeFormat = "s";

export default class StyleTween {
  constructor(el, options = {}) {
    this.node = el;
    this.duration = options.duration == null ? duration : options.duration;
    this.properties = options.style || {};
    this.ease = easings[options.ease] || easings.easeOutExpo;
  }

  static killTween(el) {
    const tweenId = el.getAttribute(tweenIdKey);

    if (tweenId) {
      clearInterval(tweenId);
      el.removeAttribute(tweenIdKey);
    }

    if (el.style.getPropertyValue(CSSTransitionProperty) === "") {
      return;
    }

    el.style.removeProperty(CSSTransitionProperty);
  }

  createTransitionProperty() {
    return Object.keys(this.properties)
      .map((key) => `${key} ${this.duration}${timeFormat} ${this.ease}`)
      .join(", ");
  }

  run() {
    const transition = this.createTransitionProperty();

    this.node.style.setProperty(CSSTransitionProperty, transition);

    Object.keys(this.properties).forEach((key) => {
      this.node.style.setProperty(key, this.properties[key]);
    });

    this.timer = setTimeout(() => {
      StyleTween.killTween(this.node);
    }, this.duration * 1000);

    this.node.setAttribute(tweenIdKey, this.timer);
  }
}
