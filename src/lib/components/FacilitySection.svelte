<script>
    import facility from "$lib/data/facility.json"
</script>

<section id="facility">
    <div class="content">
        <h2>Technology for change</h2>
        <p class="subtitle">
            All about our facility
        </p>
    </div>
    <div class="gallery">
        {#each facility.facilityFeatures as feature}
            <div class="feature">
                <h4>{feature.title}</h4>
                <img src="{feature.image}" alt="description here">
                <p>{feature.content}</p>
            </div>
        {/each}
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
            .feature {
                h4 {
                    position: absolute;
                }
                p {
                    display: none;
                }
            }
        }
    }
    @media (min-width: $mdScreen) {
        section {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>