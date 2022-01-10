<script>
    import facility from "$lib/data/facility.json";
    import Masonry from 'svelte-masonry/Masonry.svelte';
    let refreshLayout;
</script>

<section id="facility">
    <div class="content">
        <h2>Technology for change</h2>
        <p class="subtitle">
            All about our facility
        </p>
    </div>
    <div class="gallery">
        <!-- Using masonry component from https://github.com/janzheng/svelte-masonry -->
        <Masonry gridGap={'0'} bind:refreshLayout={refreshLayout}>
            {#each facility.facilityFeatures as feature}
                <div class="feature">
                    <h4>{feature.title}</h4>
                    <img src="{feature.image}" alt="description here" on:load={refreshLayout}>
                    <p>{feature.content}</p>
                </div>
            {/each}
        </Masonry>
    </div>
</section>

<style lang="scss">
    section {
        border: 1px solid red;
        padding: 3vw;
        border: 1px solid red;
        .content {
            grid-column: 2;
            grid-row: 1;
            border: 1px solid red;
            h2 {
                margin-top: 0;
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
                }
                h4 {
                    display: none;
                    position: absolute;
                    margin: 0;
                }
                p {
                    display: none;
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