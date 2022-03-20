/**
 * Mount
 * Entry point of the SPAWN DOM.
 *
 * If the provided render is already mounted, this method will detach and attach to new el.
 *
 * @param {Element} el - mount el
 * @param {Element} render
 * @returns {Element} of render
 */
 const Mount = (el, render) => {
  el.appendChild(render);
  return render;
}

export default Mount;
