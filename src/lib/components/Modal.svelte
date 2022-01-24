<script>
    import {page} from '$app/stores';
    import Subnav from '$lib/components/NavSubnav.svelte';

    function urlBack() {
        window.history.back();
    }
</script>

{#if $page.url.searchParams.get('modal')}
    <div class="overlay">
        <div class="modalWrap">
            <button class="close" on:click={urlBack}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#close"></use>
                </svg>
                CLOSE
            </button>

            <!-- This is an ugly hack - find a way to programatically pass a component to the modal slot -->
            <!-- We need to pass in the video player as well -->
            <Subnav></Subnav>

        </div>
    </div>
{/if}



<style lang="scss">
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        .modalWrap {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            background: hsl(var(--accentAltHS) var(--accentAltL));
            color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength2));
            display: flex;
            justify-content: center;
            align-items: center;
            button.close {
                position: absolute;
                top: 0;
                right: 0;
                @include buttonImposter;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 0.6rem;
                width: 50px;
                padding: 10px;
                height: auto;
                svg {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
    @media (max-width: $mdScreen) {
        .overlay {
            padding: 1rem;
        }
    }
</style>