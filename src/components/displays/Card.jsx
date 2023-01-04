/**
 * 
 * @param {import("./types").CardPropsType} props 
 * @returns 
 */
export function Card(props) {
  const className = props.class ? " " + props.class : "";

  return <div {...props} class={"card" + className}>{props.children}</div>;
}