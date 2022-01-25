<script>
    // List of services passed in from parent
    export let services;
    // console.log("Services", services);
</script>

<section id="services">
    <div class="servicesGallery">
        {#each services as service}
            <div class="serviceWrap">
                <img src="{service.metadata.thumbnail}" alt="Cool profile pic for {service.metadata.firstName}">
                <h3 class="h5">{service.metadata.title}</h3>
                <div class="price">
                    <span>
                        {service.metadata.price}
                    </span>
                </div>
                <p>{service.metadata.blurb}</p>
                <a class="button" href="{`/services/${service.path.replace(".md", "")}`}" alt="Book {service.metadata.firstName}">Train with {service.metadata.firstName}</a>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        .servicesGallery {
            .serviceWrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem 0;
                position: relative;
                h3 {
                    margin: 0;
                    color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
                }
                p {
                    margin: 0;
                }
                .price {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
                .button {
                    margin-top: 1rem;
                    @include button;
                    @include buttonPrimary;
                }
            }
        }
    }
// Responsive styles md - lg screens
@media (min-width: $mdScreen) {
    section {
        .servicesGallery {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
        }
    }
}
</style>