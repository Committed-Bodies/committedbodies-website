import { writable } from "svelte/store";

const navigationStore = writable(
    { from: null, to: null },
    { modal: null}
);

export default navigationStore;