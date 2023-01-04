//@ts-check
import { MenuHamburger } from "../images/MenuHamburger.jsx";
import { Button } from "./Button.jsx";

/**
 * 
 * @param {import("./types").MenuButtonPropsType} props 
 * @returns 
 */
export function MenuButton(props) {
  return <Button {...props} id="menu-button" onClick={() => { props.toggleSideMenu(); }}>
    <MenuHamburger />
  </Button>;
}
