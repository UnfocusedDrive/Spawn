/**
 * RESPAWN
 * Regenerator of the SPAWN DOM.
 *
 * @param {Element} el - Element to Respawn
 * @param {Element} render - Replace Element With This
 * @returns {Element} of render
 */
const Respawn = (el, render) => {
  el.replaceWith(render);
  return render;
}

export default Respawn;