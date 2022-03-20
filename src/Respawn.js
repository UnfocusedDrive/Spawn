/**
 * RESPAWN
 * Regenerator of the SPAWN DOM.
 *
 * @param {Element} el
 * @param {Element} render
 * @returns {Element} of render
 */
const Respawn = (el, render) => {
  el.replaceWith(render);
  return render;
}

export default Respawn;