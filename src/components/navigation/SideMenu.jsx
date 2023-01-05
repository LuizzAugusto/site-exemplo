//@ts-check
import { loadCSS } from "https://gist.githubusercontent.com/LuizzAugusto/ee5ea3a915d236a1dcc1e11ce1d4c06b/raw/0725bbcabe87659d51559ec63e78ab3e01b079e2/loadCSS.min.js";
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