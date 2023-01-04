//@ts-check
import { loadCSS } from "../../utils/loadCSS.js";
import { MenuButton } from "../inputs/MenuButton.jsx.js";

/**
 * 
 * @param {import("./types").TopBarPropsType} props 
 * @returns 
 */
export function TopBar(props) {
  loadCSS("styles/bars.css");

  return (
    <div id="top-bar">
      <div class="left"><MenuButton toggleSideMenu={props.toggleSideMenu} /></div>
      <div class="center"><p>{"Título"}</p></div>
      <div class="right">{"1"}</div>
    </div>
  );
}

