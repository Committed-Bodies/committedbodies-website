<script>
    import Header from '$lib/components/Header.svelte';
    export let thumbnail;
    export let title;
    export let price;
    export let actionHeading;
    export let actionInstruction;
    export let actionLink;
    export let actionButtonText;
</script>


<div class="pageWrap">
        <Header customClass="containPic" bgImage="{thumbnail}">
            {title}
        </Header>

        <div class="postWrap contentTypography">
            <div class="price">
                <span>
                    {price}
                </span>
            </div>
            <div class="content">
                <slot />
            </div>
            <div class="gallery">
                <h3>Gallery</h3>
                <p>Gallery component should go here. Perhaps each service can have a route to a folder of images on cloudinary. The gallery component will automatically handle a gallery layout of the images with lightbox popups.</p>
            </div>
            <div class="action">
                <h3>{actionHeading}</h3>
                <p>{actionInstruction}</p>
                <a class="button primary" href="{actionLink}">{actionButtonText}</a>
            </div>
        </div>
</div>


<style>
    .price {
        font-size: 2em;
        font-weight: 900;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
    }
    .price span {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .price span:before, .price span:after {
        content: "";
        display: block;
        flex: 1;
        border-bottom: 4px solid hsl(var(--accentHS) var(--accentL));
    }
    .pageWrap .postWrap {
    padding: 4vw;
    max-width: 900px;
    margin: 0 auto;
    color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
    }
    .postWrap h3{
        font-weight: 500;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
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