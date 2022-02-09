import { writable } from 'svelte/store';

// let NavigationState = null;
// type NavigationState = "loading" | "loaded" | null;

export const navigationState = writable(null);