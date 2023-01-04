//@ts-check
import { loadCSS } from "../../../utils/loadCSS";
import { Main } from "../../Main";

/**
 * 
 * @param {import("../types").PageTemplatePropsType} props 
 * @returns 
 */
export function PageTemplate(props) {
  loadCSS("styles/pages.css");

  return (
    <Main>
      <div id="page">
        {props.children}
      </div>
    </Main>
  );
}
