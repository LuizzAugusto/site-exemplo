import { loadCSS } from "../../utils/loadCSS";

/**
 * 
 * @param {import("./types").BannerPropsType} props 
 */
export function Banner(props) {
  loadCSS("./styles/banners.css");

  return <div {...props} class="banner">{props.children}</div>;
}
