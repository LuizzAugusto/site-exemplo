import { loadCSS } from "../../utils/loadCSS";

/**
 * 
 * @param {import("./types").CardContainerPropsType} props 
 * @returns 
 */
export function CardContainer(props) {
  loadCSS("./styles/cards.css");
  const className = props.class ? " " + props.class : "";

  return <div {...props} class={"card-container" + className}>{props.children}</div>;
}