<script>
    import "../styles/app.scss";
    import IconsCombined from "$lib/svg/icons/Icons_combined.svelte";
    import TopNav from "$lib/components/NavTopLevel.svelte";
    import ActionNav from "$lib/components/NavActions.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import LogoWrap from "$lib/components/NavlogoWrap.svelte";
    import Footer from "$lib/components/Footer.svelte";
    export let y;

    // LoadingBar script and Page Transitions
    import { fade } from 'svelte/transition';
    import {navigationState} from '$lib/stores/navigationState';
    import PageLoader from '$lib/components/PageLoader.svelte';

    function transitionPageIn() {
        gsap.set("main", {scrollTo: 0, autoAlpha:0, scale: 0.95});
        gsap.to("main",{duration:0.4, scale:1, autoAlpha:1});
    }



</script>

<!-- Loading bar component -->
<svelte:window
    on:sveltekit:navigation-start={() => {
        // console.log("page is loading");
        $navigationState = 'loading';
    }}
    on:sveltekit:navigation-end={() => {
        // console.log("page is loaded");
        $navigationState = 'loaded';

        transitionPageIn();
    }}
/>

<!-- Add hidden icon paths to use across all components -->
<IconsCombined></IconsCombined>

<!-- Navigation Components -->
<LogoWrap y="{y}"></LogoWrap>
<TopNav y="{y}"></TopNav>
<ActionNav y="{y}"></ActionNav>

<!-- Background color and shadow for Navigation Components -->
<div class="navColor {y > 80 ? 'scrolled' : ''}"></div>
<div class="shadow {y > 80 ? 'scrolled' : ''}"></div>

<!-- Main content -->
<main on:scroll="{(e)=>y=e.target.scrollTop}">
    {#if $navigationState === 'loading'}
        <div out:fade={{ delay: 500 }}>
            <PageLoader/>
        </div>
    {/if}
    <slot></slot>
    <Footer></Footer>
</main>

<!-- Modal -->
<Modal />


<!-- ******STYLES -->
<style lang="scss">
    // main {
    //     border: 3px solid red;
    // }
    //  Little hack to make a background color for topnav on scroll
    .navColor {
        grid-row: 1;
        grid-column: 1 / span 2;
        background-color: hsl(var(--primaryHS) var(--primaryL));
        z-index: 2;
        @media screen and (min-width: $mdScreen) and (max-width: calc($xlScreen - 1px)) {
            display: block;
            grid-column: 1 / span 3 ;
            grid-row: 1;
            opacity:0;
            transition: all 0.5s linear;
            &.scrolled {
                opacity: 0.7;
            }
        }
        @media screen and (min-width: $xlScreen) {
            display: block;
            opacity: 1;
            grid-column: 1;
            grid-row: 1 / span 3;
            background-image: var(--brandGradient);
        }
    }
    // The brand color is too bright for a dark theme nav
    :global(.dark) {
        .navColor {
            background-color: hsl(var(--accentAltHS) var(--accentAltL));
            @media screen and (min-width: $xlScreen) {
                background-image: linear-gradient(145deg, hsla(0, 0%, 100%, 0.141), transparent);
            }
        }
    }

    // Little hack to make a shadow nav elements.
    .shadow {
        z-index: 20;
        pointer-events: none;
        width: 100%;
        height: 100%;
        grid-area: main;
        box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.15);

        @media screen and (min-width: $mdScreen) and (max-width: calc($xlScreen - 1px)) {
            grid-column: 1 / span 3 ;
            grid-row: 1;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0);
            transition: all 0.5s linear;
            &.scrolled {
                backdrop-filter: blur(10px);
                box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
            }
        }
        @media screen and (min-width: $xlScreen) {
            grid-area: main;
            box-shadow: inset 2px 0 3px rgba(0, 0, 0, 0.15);
        }
    }
</style>