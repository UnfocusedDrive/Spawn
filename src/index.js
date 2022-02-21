
import _ from './util.js';

/**
 * Spawn DOM (The Document Object Model)
 * The Spawn Engine is a stateless virtual DOM generator.
 * @param {object|string} props - props of the Spawn
 * @param {element} props.parentEl - parent element to spawn into
 * @returns {element} reference of your Spawn
 */
 const Spawn = (props = {}) => {
  const {
    children = [],
    className,
    events,
    /**
     * @param {element}
     * If provided, will mount to the parent
     */
    parentEl,
    name,
    label,
    style,
    tag = 'div',
    // type = 'div',
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

  // console.log('Spawn', props, props instanceof HTMLElement);

  // Element to spawn as
  const el = document.createElement(tag);

  // Children to add to Element
  const appendChildren = (children) => {
    // console.log('appendChildren', children, el);
    // convert to array
    let fmChildren = children;
    if (!Array.isArray(fmChildren)) {
      fmChildren = [fmChildren];
    }

    // each child...
    fmChildren.forEach(child => {
      el.appendChild(Spawn(child));
    });
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
      // console.log('style', key, value);
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
    parentEl.appendChild(el);
  }

  return el;
};

export default Spawn;