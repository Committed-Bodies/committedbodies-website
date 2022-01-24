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
    // console.log(posts);
</script>

<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        BLOG
    </Header>
    {#each posts as post}
        <BlogListItem {post}></BlogListItem>
    {/each}
</div>

<style lang="scss">
</style>
