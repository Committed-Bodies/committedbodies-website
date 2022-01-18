<script>
    import servicesData from "$lib/data/servicesPage.json"
    export let services;
</script>

<section id="services">
    <div class="content">
        <h2>{servicesData.intro.title}</h2>
        <p class="subtitle h4">
            {servicesData.intro.subtitle}
        </p>
        <p>
            {servicesData.intro.content}
        </p>
    </div>
    <div class="servicesGallery">
        {#each services as service}
            {#if service.metadata.group == "Services"}
                <div class="serviceWrap">
                    <img src="{service.metadata.thumbnail}" alt="Cool profile pic for {service.metadata.firstName}">
                    <h3 class="h5">{service.metadata.fullName}</h3>
                    <ul class="prices">
                        {#each service.metadata.prices as price}
                            <li>{price}</li>
                        {/each}
                    </ul>
                    <p>{service.metadata.blurb}</p>
                    <a class="button" href="{`/services/${service.path.replace(".md", "")}`}" alt="Book {service.metadata.firstName}">Train with {service.metadata.firstName}</a>
                </div>
            {/if}
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
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
                .prices {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    li {
                        padding: 0.1rem 0.5rem;
                        display: inline-block;
                        margin: 3px;
                        border-radius: 3px;
                        font-size: 0.8rem;
                        font-weight: 500;
                        background: hsl(var(--neutralHS) calc(var(--neutralL) + 5%));
                        color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
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