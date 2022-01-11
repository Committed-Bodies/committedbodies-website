<script>
    import facility from "$lib/data/facility.json";
    // import Masonry from 'svelte-masonry/Masonry.svelte';
    let refreshLayout;
</script>

<section id="facility">
    <div class="content">
        <h2>{facility.intro.title}</h2>
        <p class="subtitle h4">
            {facility.intro.subtitle}
        </p>
        <p>
            {facility.intro.content}
        </p>
    </div>
    <div class="gallery">
        <!-- Using masonry component from https://github.com/janzheng/svelte-masonry -->
        <!-- <Masonry gridGap={'0'} bind:refreshLayout={refreshLayout}>
            {#each facility.facilityFeatures as feature}
                <div class="feature">
                    <img src="{feature.image}" alt="description here" on:load={refreshLayout}>
                    <div class="summary">
                        <h3 class="h5">{feature.title}</h3>
                        <p>{feature.content}</p>
                    </div>
                </div>
            {/each}
        </Masonry> -->
        {#each facility.facilityFeatures as feature}
            <div class="feature">
                <img src="{feature.image}" alt="description here" on:load={refreshLayout}>
                <div class="summary">
                    <h3 class="h5">{feature.title}</h3>
                    <p>{feature.content}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
        .content {
            grid-column: 2;
            grid-row: 1;
            color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
            h2 {
                margin-top: 0;
				font-family: $font_boldEmphasis;
				line-height: 1;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
			}
			.subtitle {
				font-family: $font_cursiveEmphasis;
				margin-top: 1em;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
			}
        }
        .gallery {
            grid-column: 1;
            grid-row: 1;
            padding: 0;
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
        }
    }
    @media (min-width: $mdScreen) {
        // section {
        //     display: grid;
        //     grid-template-columns: 2fr 1fr;
        // }
    }
</style>