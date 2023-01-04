import { loadCSS } from "../../utils/loadCSS";

/**
 * 
 * @param {import("../content/types").BannerPropsType} props 
 */
export function Banner(props) {
  loadCSS("./styles/banners.css");
  const className = props.class ? " " + props.class : "";

  return <div {...props} class={"banner" + className}>{props.children}</div>;
}
