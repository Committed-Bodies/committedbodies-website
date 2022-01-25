<script>
    import Header from '$lib/components/Header.svelte';
    export let thumbnail;
    export let title;
    export let price;
    export let actionHeading;
    export let actionInstruction;
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
                <p>Embedded form or button here?</p>
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
    
</style>