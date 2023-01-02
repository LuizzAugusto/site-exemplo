/**
 * 
 * @param {import("./types").MainPropsType} props 
 * @returns 
 */
export function Main(props) {
  return <main id="main">
    {props.children}
  </main>;
}