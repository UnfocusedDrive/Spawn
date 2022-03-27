import _ from './util.js';
import Mount from './Mount.js';

/**
 * Spawn DOM (The Document Object Model)
 * The Spawn Engine is a stateless virtual DOM generator.
 * @param {object|string} props - props of the Spawn
 * @param {element} props.parentEl - parent element to spawn into
 * @returns {element} reference of your Spawn
 */
 const Spawn = (props = {}) => {
  const {
    /**
     * Child elements
     */
    children = [],
    className,
    /**
     * @param {object} Event Listeners
     */
    events,
    /**
     * @param {element}
     * If provided, will mount to the parent
     */
    parentEl,
    name,
    label,
    style,
    /**
     * tag to render element as
     */
    tag = 'div',
    value,
    // Convert rest props to attrs
    ...restProps
  } = props;

  // Text node
  if (typeof props === 'string' || typeof props === 'number') {
    return document.createTextNode(props);
  }
  // Already DOM Element
  if (props instanceof HTMLElement) return props;

  // Element to spawn as
  const el = document.createElement(tag);

  /**
   *  Children to add to Element
   * @param {*} children - function(el) / array / element / string
   */
  const appendChildren = (children) => {
    if (children instanceof Function) {
      children(el);
    }

    // convert to array
    let fmChildren = children;
    if (!Array.isArray(fmChildren)) {
      fmChildren = [fmChildren];
    }

    // Mount each child
    fmChildren.forEach(child => Mount(el, Spawn(child)));
  }

  // Attach Event Listeners
  // Assign {event} and {el} (self)
  if (events) {
    Object.keys(events).forEach(key => {
       el.addEventListener(key, e => events[key](e, el));
    });
  }

  // Attach Style to Element
  if (style) {
    el.setAttribute('style', Object.keys(style).map(key => {
      let value = style[key];
      // number default to px
      if (_.isPxImpliedValue(value, key)) {
        value = _.toPx(value);
      }

      return `${_.getStyleName(key)}: ${value};`
    }).join(' '));
  }

  // Attach Class Name
  if (className) {
    el.setAttribute('class', className);
  }

  // .. spread down the rest to html attrs
  Object.keys(restProps).forEach(key => el.setAttribute(key, restProps[key]));

  appendChildren(children);

  // Append to parent
  if (parentEl) {
    Mount(parentEl, el);
  }

  return el;
};

export default Spawn;