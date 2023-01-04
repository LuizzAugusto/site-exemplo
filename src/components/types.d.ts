import { Signal } from "solid-js";
import { PagePropsType } from "./content/types";
import JSX from "/home/luizz/projects/personal/js/site/node_modules/.pnpm/solid-js@1.5.1/node_modules/solid-js/types/jsx";

export type SignalsBagType = {
  pageSignal: Signal<(props: PagePropsType) => JSX.Element>,
  sideMenuClosedSignal: Signal<boolean>
};

export type MainPropsType = {
  children: JSX.Element
}