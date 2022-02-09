<script>
	import PageIntroSection from '$lib/components/PageIntroSection.svelte';
    import Header from '$lib/components/Header.svelte';
    import footerData from "$lib/data/footer.json";

    let introData = {
        "title": "Sorry! This page doesn't seem to exist",
        "subtitle": "Oops!",
        "content": "Can we tempt you with a few other pages?"
    }
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        SERVICES
    </Header>
    <section>
        <PageIntroSection {introData} />
        <div class="actionsWidget">
            <div class="align-right">
                <h5>Joining pages</h5>
                <ul>
                    {#each footerData.footerLinks1.links as link}
                        <li><a href="{link.url}">{link.title}</a></li>
                    {/each}
                </ul>
            </div>
            <div>
                <h5>Explore and find out more</h5>
                <ul>
                    {#each footerData.footerLinks2.links as link}
                        <li><a href="{link.url}">{link.title}</a></li>
                    {/each}
                </ul>
            </div>
        </div>
        
    </section>
</div>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        font-weight: 300;
         a {
            color: inherit;
            text-decoration: none;
        }
        .actionsWidget {
            padding: 1rem;
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
        }
    }
    @media (min-width: $mdScreen) {
        section {
            .actionsWidget {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 1rem;
                .align-right {
                    padding: 0 1rem 0 0;
                    text-align: right;
                    border-right: 1px solid hsl(var(--onNeutral) / var(--onNeutralStrength3));
                }
            }
        }
    }
</style>