<script>
    export let item;
</script>

<div class="feature">
    <div class="imageWrap">
        <img src="{item.thumbnail}" alt="picture of {item.title}">
        {#if item.price}
        <div class="priceWrap">
            {item.price}
        </div> 
        {/if}
    </div>
    <div class="summary">
        <h3 class="h5">{item.title}</h3>
        <p>{item.content}</p>
        {#if item.path}
            <div class="actionRow">
                <a class="button" href="{`/services/${item.path.replace(".md", "")}`}" alt="Read more">Read More</a>
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    .feature {
        position: relative;
        display: flex;
        flex-direction: column;
        .imageWrap {
            width: 100%;
            position: relative;
            .priceWrap {
                position: absolute;
                bottom: 0;
                left: 0;
                font-weight: bold;
                z-index: 3;
                color: #ffffff;
                font-size: 2em;
                line-height: 1.2;
                padding: 0 0.5rem;
                max-width: 10ch;
            }
            img {
                display: block;
                height: 100%;
                width: 100%;
                object-fit: cover;
                z-index: 1;
            }
            &:before {
                    content: "";
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background-image: linear-gradient(transparent, rgba(0,0,0,0.6));
                }
        }
        
        .summary {
            z-index: 2;
            background-color: hsl(var(--neutralHS) calc(var(--neutralL) - 5%));
            color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
            width: 100%;
            height: auto;
            bottom: 0;
            left: 0;
            padding: 1rem;
            h3 {
                margin: 0;
                font-family: $font_boldEmphasis;
            }
            p {
                margin: 0;
            }
            .actionRow {
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                .button {
                    margin-top: 1rem;
                    @include button;
                    @include buttonPrimary;
                }
            }
        }
    }
</style>