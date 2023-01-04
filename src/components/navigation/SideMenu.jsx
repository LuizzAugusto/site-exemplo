//@ts-check
import { loadCSS } from "../../utils/loadCSS.js";
import { Button } from "../inputs/Button.jsx";

/**
 * 
 * @param {import("./types").SideMenuPropsType} props 
 * @returns 
 */
export function SideMenu(props) {
  loadCSS("styles/menus.css");

  return <div id="side-menu" class={`${props.sideMenuClosed() ? " closed" : ""}`}>
    <Button>{"Home"}</Button>
  </div>;
}