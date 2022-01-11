<script context="module">
    const allTeam = import.meta.glob('./*.md')
    let team = [];
    for (let path in allTeam) {

        team.push(
            allTeam[path]().then(({ metadata }) => {
                return {path, metadata};
            })
        );
    }
    export const load = async() => {
        const teamMembers = await Promise.all(team);
        return {
            props: {
                teamMembers,
            }
        }
    };
</script>

<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    export let teamMembers;
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header>TEAM</Header>
    <section>
        <h3>Something about our team</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eius ea sit unde reprehenderit non? Amet pariatur itaque ipsam quam. Fuga, tenetur recusandae. Cupiditate praesentium temporibus amet magnam natus quos?</p>
        <p>Beatae asperiores atque exercitationem dolorum dolore neque tempore possimus hic velit cumque laudantium consequatur commodi temporibus a perferendis illum earum explicabo fugit, vitae enim corporis aliquam blanditiis expedita iusto? Quod!</p>
        <p>At veritatis cum repellat, vel debitis placeat velit accusamus, minus rem eaque vero qui necessitatibus minima omnis ex commodi deleniti unde consequatur rerum. Suscipit error quod at quas, vel sit?</p>
        <p>Quod illum alias autem architecto corrupti ea id eius ab optio rerum eveniet odit animi, laudantium ad maiores ullam amet inventore placeat sint exercitationem mollitia suscipit commodi. Ratione, dolorem ullam.</p>
    </section>
    <section class="grid">
        {#each teamMembers as {path, metadata}}
        <article>
            <header>
                <img src="{metadata.thumbnail}" alt="thumbnail">
            </header>
            <div class="content">
                <h3>{metadata.name}</h3>
                {metadata.title}<br>
            </div>
            <footer>
                <a href={`/blog/${path.replace(".md", "")}`}>
                    Read more
                </a>
            </footer>
        </article>
        {/each}
    </section>
</div>


<style lang="scss">
    section {
        background-color: hsl(var(--neutralHS) var(--neutralL));
        // padding: $space3;
        &.grid {
            display: grid;
            grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
            grid-gap: $space3;
            justify-content: space-between;
            align-items: center;
        }
        article {
            background: #ffffff;
            display: grid;
            grid-template-rows: 200px 1fr 60px;
            justify-content: center;
            align-content: center;
            grid-template-columns: 1fr;
            grid-gap: 1rem;
            header {
                img {
                    background: $brandPrimary;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
            .content {
                h3 {
                    margin: 0 0;
                }
                padding: $space1;
            }
            footer {
                padding: $space1;
                // background-color: hsl(var(--neutralHS) var(--neutralL));
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                a {
                    position: relative;
                    @include button;
                    @include buttonPrimary;
                }
            }
            &:nth-of-type(odd) {
                header {
                    img {
                        background-color: $brandAccent;
                    }
                }
            }
        }
    }
</style>
