//@ts-check
import { createSignal } from "solid-js";
import { HomePage } from "../components/pages/HomePage";

/**
 * @type {import("../components/types").SignalsBagType}
 */
export const signalsBag = {
  pageSignal: createSignal(HomePage),
  sideMenuClosedSignal: createSignal(false)
}
