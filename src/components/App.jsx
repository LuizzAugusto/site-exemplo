//@ts-check
import { loadCSS } from "../utils/loadCSS.js";
import { signalsBag } from "../utils/signalsBag.js";
import { TopBar } from "./bars/TopBar.jsx";
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
