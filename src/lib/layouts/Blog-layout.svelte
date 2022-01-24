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
            Posted on <span class="date">{new Date(date).toDateString()}</span> by <span class="author">{author}</span> in category: <span class="category">{category}</span>
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
            .meta {
                font-size: 0.9rem;
                color: hsl(var(--onNeutral) / var(--onNeutralStrength-1));
                span {
                    background-color: hsl(var(--neutralHS) calc(var(--neutralL) - 15%));
                    color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
                    padding: 3px 6px;
                    border-radius: 3px;
                    margin: 0 5px;
                    font-weight: 500;
                }
            }
        }
    }
</style>