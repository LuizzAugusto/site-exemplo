//@ts-check

import { loadCSS } from "../../utils/loadCSS";

/**
 * 
 * @param {import("./types").ButtonPropsType} props 
 * @returns 
 */
export function Button({children, ...props}) {
  loadCSS("styles/buttons.css");

  return <div {...props} class={"button" + (props.std ? " std" : "") + (props.class ? " " + props.class : "")}>
    {children}
  </div>;
}
