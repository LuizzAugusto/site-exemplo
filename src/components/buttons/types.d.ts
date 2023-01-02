import { Signal } from "solid-js";
import JSX from "/home/luizz/projects/personal/js/site/node_modules/.pnpm/solid-js@1.5.1/node_modules/solid-js/types/jsx";

export type ButtonPropsType = Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "tabIndex"> & {std?: boolean};
export type MenuButtonPropsType = ButtonPropsType & { toggleSideMenu: () => void };
