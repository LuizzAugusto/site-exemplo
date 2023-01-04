import { Accessor, Signal } from "solid-js";

export type TopBarPropsType = {
  toggleSideMenu: () => void
};

export type SideMenuPropsType = {
  sideMenuClosed: Accessor<boolean>
};