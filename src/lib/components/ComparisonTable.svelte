<script>
    import contactData from '$lib/data/contactPage.json';
    let contacts = contactData.contacts;
    export let comparisonData;
    comparisonData.sort((a, b) => (a.order > b.order) ? 1 : -1);
</script>


<section>
    {#each comparisonData as item}
        <div class="card" class:featured="{item.featured === true}">
            <header>
                <h3 class="h4">{item.title}</h3>
                <img src="{item.thumbnail}" alt="Thumbnail pic of membership option">
                <span class="price">{item.price}</span>
            </header>
            <ul>
                {#each item.summaryList as point}
                <li>
                    {point.listItems}
                </li>
                {/each}
            </ul>
            <div class="button actionRow">
                <!-- <a class="ghost" href="/">Read More</a> -->
                <!-- <a class="ghost" href="{`/membership/${item.path.replace(".md", "")}`}">Read more</a> -->
                <a href="mailto:{contacts.email}?subject=Membership enquiry - {item.title}" class="button primary">Join</a>
            </div>
            
        </div>
    {/each}
</section>

<style lang="scss">
    section {
        padding: 3vw;
        display: grid;
        grid-gap: 1rem;
        .card {
            display: flex;
            flex-direction: column;
            &.featured {
                header {
                    .h4 {
                        background: hsl(var(--accentHS) var(--accentL));
                    }
                    .price {
                        background: hsl(var(--accentHS) var(--accentL));
                    }
                }
                .actionRow {
                    .primary {
                        background: hsl(var(--primaryHS) var(--primaryL));
                        border: hsl(var(--primaryHS) var(--primaryL));
                        color: hsl(var(--onPrimary) / var(--onPrimaryStrength3));
                    }
                }
            }
            header {
                display: grid;
                grid-template-rows: 3rem auto 3rem;
                position: relative;
                &:before {
                    content: "";
                    background-image: linear-gradient(45deg, black, transparent);
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                .price {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    grid-row: 3;
                    grid-column: 1;
                    z-index: 2;
                    color: #ffffff;
                    background: hsl(var(--accentAltHS) var(--accentAltL));
                }
                .h4 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    grid-row: 1;
                    grid-column: 1;
                    font-size: 1rem;
                    color: #ffffff;
                    z-index: 2;
                    background: hsl(var(--accentAltHS) var(--accentAltL));
                }
                img {
                    grid-row: 2;
                    grid-column: 1;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    aspect-ratio: 6/3;
                }
            }
            ul {
                background-color: #ffffff;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                li {
                    padding: 0.5rem;
                    width: 100%;
                    border-bottom: 1px solid hsl(var(--primaryHS) var(--primaryL));
                }
            }
            .actionRow {
                display: flex;
                flex-direction: column;
                a {
                    @include button;
                    color: inherit;
                    &.primary {
                        @include buttonPrimary;
                    }
                    &.ghost {
                        @include buttonGhost;
                        border-color: #ffffff;
                        background-color: #ffffff;
                    }
                }
            }
        }
    }
    // RESPONSIVE STYLES FOR MED - LARGE
    @media (min-width: $mdScreen) {
        section {
            grid-template-columns: 1fr 1fr 1fr 1fr;

        }  
    }
</style>