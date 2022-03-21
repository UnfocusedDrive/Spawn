/**
 * Unmount
 * Entry point of the SPAWN DOM.
 *
 * If the provided render is already mounted, this method will detach and attach to new el.
 *
 * @param {Element} el - mount el
 * @returns {Element} of render
 */
 const Unmount = (el) => {
  el.remove();
  return null;
}

export default Unmount;
