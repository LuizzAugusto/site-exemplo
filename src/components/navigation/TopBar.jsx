//@ts-check
import { loadCSS } from "https://gist.githubusercontent.com/LuizzAugusto/ee5ea3a915d236a1dcc1e11ce1d4c06b/raw/0725bbcabe87659d51559ec63e78ab3e01b079e2/loadCSS.min.js";
import { MenuButton } from "../inputs/MenuButton.jsx";

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

