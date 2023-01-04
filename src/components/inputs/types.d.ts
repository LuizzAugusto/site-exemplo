import { Signal } from "solid-js";
import JSX from "solid-js/types/jsx";

export type ButtonPropsType = Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "tabIndex"> & {std?: boolean};
export type MenuButtonPropsType = ButtonPropsType & { toggleSideMenu: () => void };
export type InputPropsType = JSX.InputHTMLAttributes<HTMLInputElement>;