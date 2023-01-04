import { Signal } from "solid-js";
import { SignalsBagType } from "../types";
import JSX from "solid-js/types/jsx";

export type ContentPropsType = {
  children: JSX.Element
};

export type PageTemplatePropsType = {
  children: JSX.Element
};

export type PagePropsType = {
  signalsBag: SignalsBagType
};
