import { writable } from "svelte/store";

export const navigationStore = writable(
    { modal: null}
);