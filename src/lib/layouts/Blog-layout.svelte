<script>
    import Header from '$lib/components/Header.svelte';
    export let thumbnail;
    export let title;
    export let date;
    export let category;
    export let author
</script>


<div class="pageWrap">
     <Header customClass="containPic" bgImage="{thumbnail}">
        {title}
    </Header>
    <div class="postWrap">
        <div class="meta">
            Posted on {new Date(date).toDateString()} by {author} in category: {category}
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</div>


<style lang="scss">
    .pageWrap {
        .postWrap {
            padding: 4vw;
            max-width: 900px;
            margin: 0 auto;
            color: hsl(var(--onNeutral) / var(--onNeutralStrength0));

        }
    }
</style>