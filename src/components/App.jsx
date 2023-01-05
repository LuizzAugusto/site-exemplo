//@ts-check
import { loadCSS } from "https://gist.githubusercontent.com/LuizzAugusto/ee5ea3a915d236a1dcc1e11ce1d4c06b/raw/0725bbcabe87659d51559ec63e78ab3e01b079e2/loadCSS.min.js";
import { signalsBag } from "../utils/signalsBag.js";
import { TopBar } from "./navigation/TopBar.jsx";
import { SideMenu } from "./navigation/SideMenu.jsx";

/**
 * 
 * @param {import("../types").AppPropsType} _props 
 * @returns 
 */
export function App(_props) {
  loadCSS("styles/app.css");

  const [ sideMenuClosed, setSideMenuClosed ] = signalsBag.sideMenuClosedSignal;

  return (
    <div id="app">
      <TopBar toggleSideMenu={() => { setSideMenuClosed(!sideMenuClosed()); }} />
      <div class="content">
        <SideMenu sideMenuClosed={sideMenuClosed} />
        {signalsBag.pageSignal[0]()({signalsBag})}
      </div>
    </div>
  );
}
