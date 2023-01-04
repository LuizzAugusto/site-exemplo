/**
 * 
 * @param {import("./types").MenuHamburgerPropsType} props 
 * @returns 
 */
export function MenuHamburger(props) {
  return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" style="font-size: 32px;" width={props.width ? props.width : "1em"} height={props.height ? props.height : "1em"} xmlns="http://www.w3.org/2000/svg">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
  </svg>;
}