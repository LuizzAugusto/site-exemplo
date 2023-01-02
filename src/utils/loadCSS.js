//@ts-check
/**
 * 
 * @param {string} src 
 */
export async function loadCSS(src) {
  try {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.type = "text/css";
    css.href = src;
    await document.head.appendChild(css);
  }
  catch (e) { console.error(e); }
}
