import { Signal } from "solid-js";
import { SignalsBagType } from "../types";
import JSX from "/home/luizz/projects/personal/js/site/node_modules/.pnpm/solid-js@1.5.1/node_modules/solid-js/types/jsx";

export type ContentPropsType = {
  children: JSX.Element
};

export type PageTemplatePropsType = {
  children: JSX.Element
};

export type PagePropsType = {
  signalsBag: SignalsBagType
};
