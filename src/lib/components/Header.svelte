<script>
	import ContactSocialLinks from '$lib/components/ContactSocialLinks.svelte';
    import BreadCrumbs from "$lib/components/NavBreadCrumbs.svelte";
    export let bgImage;
    export let customClass;
</script>


<header class="{customClass}" style="background-image:url({bgImage});">
    <div class="titleWrap">
        <h1 class="titleLarge">
            <slot />
        </h1>
        <BreadCrumbs classList="theme-on-primary"></BreadCrumbs>
        <ContactSocialLinks></ContactSocialLinks>
    </div>
</header>

<style lang="scss">
    header {
        padding-top: 200px;
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: var(--brandGradient);
        background-size: cover;
        background-position: center;
        &.containPic {
            background-size: contain;
        }
        .titleWrap {
            padding-bottom: 120px;
            z-index: 3;
            color: hsl(var(--onImage) / var(--onImageStrength2));
            h1 {
                color: hsl(var(--onImage) / var(--onImageStrength3));
                font-family: $font_boldEmphasis;
                font-weight: 900;
                font-style: normal;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0px;
                text-align: center;
                padding: 0;
                margin: 0;
                max-width: 20ch;
            }
        }
        &:before {
            content: "";
            position: absolute;
            background-color: rgba(0,0,0,0.5);
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }
</style>