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
    import BlogListItem from '$lib/components/BlogListItem.svelte'
    export let posts;
    const dateSortedPosts = posts.slice().sort((post1, post2) => {
        return new Date(post2.metadata.date) - new Date(post1.metadata.date);
    })
</script>

<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631431623/action%20photos/Gym-in-Benoni_m5uh6j.jpg">
        BLOG
    </Header>
    {#each dateSortedPosts as post}
        <BlogListItem {post}></BlogListItem>
    {/each}
</div>

<style lang="scss">
</style>
