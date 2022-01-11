<script>
    export let item;
</script>

<div class="feature">
    <img src="{item.image}" alt="description here">
    <div class="summary">
        <h3 class="h5">{item.title}</h3>
        <p>{item.content}</p>
    </div>
</div>

<style lang="scss">
    .feature {
        position: relative;
        img {
            display: block;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: 1;
        }
        .summary {
            // position: absolute;
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
        }
    }
</style>