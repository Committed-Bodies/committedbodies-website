<script context="module">
    const allPosts = import.meta.glob('./*.md')
    let blog = [];
    for (let path in allPosts) {
        blog.push(
            allPosts[path]().then(({ metadata }) => {
                return {path, metadata};
            })
        );
    }
    export const load = async() => {
        const posts = await Promise.all(blog);
        return {
            props: {
                posts,
            }
        }
    };
</script>

<script>
    import Header from '$lib/components/Header.svelte';
    // import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    export let posts;
    // console.log(posts);
</script>

<div class="pageWrap">
    <Header>BLOG</Header>
    <section>
        <div class="articleList">
            {#each posts as {path, metadata}}
            <article>
                <img src="{metadata.thumbnail}" alt="thumbnail">
                <div class="content">
                    <header><h2>{metadata.title}</h2></header>
                    <div class="excerpt">
                        {metadata.description}
                    </div>
                    <footer>
                        <a href={`/blog/${path.replace(".md", "")}`}>
                            Read more
                        </a>
                    </footer>
                </div>
            </article>
            {/each}
        </div>
    </section>
</div>

<style lang="scss">
    section {
        padding: $space3;
        margin: $space3;
        .articleList {
            display: grid;
            grid-template-rows: repeat(1fr);
            grid-gap: $space5;
        }
        article {
            display: grid;
            grid-template-columns: 1fr 2fr;
            img {
                background: $brandPrimary;
            }
            .content {
                padding: 0;
                display: grid;
                grid-template-rows: auto 1fr auto;
                grid-template-columns: 1fr;
                justify-content: space-between;
                header {
                    padding: $space3;
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: row;
                    align-items: center;
                    h2 {
                        margin: 0;
                        padding: 0;
                    }
                }
                .excerpt {
                    padding: $space3;
                }
                footer {
                    padding: $space3;
                    text-align: right;
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: row;
                    align-items: center;
                    a {
                        @include buttonPrimary;
                    }
                }
            }
        }
    }
</style>
