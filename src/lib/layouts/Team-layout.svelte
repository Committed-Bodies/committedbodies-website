<script>
    import Header from '$lib/components/Header.svelte';
    export let thumbnail;
    export let fullName;
    // export let title;
    export let blurb;
    export let specialisations;
    export let actionHeading;
    export let actionInstruction;
    export let actionLink;
</script>

<div class="pageWrap">
        <Header customClass="featuredImage" featuredImage={thumbnail} bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631431623/action%20photos/Gym-in-Benoni_m5uh6j.jpg">
            {fullName}
        </Header>

        <div class="postWrap contentTypography">
            <span class="blurb">{blurb}</span>
            <div class="meta">
                {#each specialisations as specialisation}
                    <span>{specialisation.title}</span>
                {/each}
            </div>
            <div class="content">
                <slot />        
            </div>
            <!-- <div class="gallery">
                <h3>Gallery</h3>
                <p>Gallery component should go here. Perhaps each service can have a route to a folder of images on cloudinary. The gallery component will automatically handle a gallery layout of the images with lightbox popups.</p>
            </div> -->
            <div class="action">
                <h3>{actionHeading}</h3>
                <p>{actionInstruction}</p>
                <a class="button primary" href="{actionLink}">Complete Sign Up Form</a>
            </div>
        </div>
</div>

<style>
    .pageWrap .blurb {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        position: relative;
    }
    .pageWrap .blurb:before {
        content: '"';
        font-size: 5em;
        line-height: 1;
        position: absolute;
        left: -0.4em;
        top: -0.2em;
        color: hsl(var(--primaryHS) var(--primaryL));
    }
    .pageWrap .blurb:after {
        content: '"';
        font-size: 5em;
        line-height: 1;
        position: absolute;
        right: -0.4em;
        top: -0.2em;
        color: hsl(var(--primaryHS) var(--primaryL));
    }
    .pageWrap .postWrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 4vw;
        max-width: 900px;
        margin: 0 auto;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
    }
    .pageWrap .postWrap .meta {
        text-align: center;
        font-size: 0.9rem;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength-1));
        margin-bottom: 3rem;
    }
    .pageWrap .postWrap .meta span {
        background-color: hsl(var(--neutralHS) calc(var(--neutralL) - 15%));
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        padding: 3px 6px;
        border-radius: 3px;
        margin: 0 5px;
        font-weight: 500;
    }
    .button.primary {
        font-weight: 500;
        letter-spacing: 1px;
        cursor: pointer;
        padding: 0.3em 1em;
        border-radius: 3px;
        text-decoration: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: auto;
        box-shadow: 0 0 0 rgb(0 0 0 / 0), 0 0 0 rgb(0 0 0 / 0);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        border: 1px solid hsl(var(--accentHS) var(--accentL));
        background-color: hsl(var(--accentHS) var(--accentL));
        color: hsl(var(--onAccent) / var(--onAccentStrength0));
        box-shadow: 0 14px 28px rgb(0 0 0 / 0%), 0 10px 10px rgb(0 0 0 / 0%);
    }

    .button.primary:hover {
        border: 1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));
        background-color: hsl(var(--accentHS) calc(var(--accentL) - 10%));
        color: hsl(var(--onAccent) / var(--onAccentStrength0));
        box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
    }
</style>