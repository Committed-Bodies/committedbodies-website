<script>
    import Header from '$lib/components/Header.svelte';
    export let thumbnail;
    export let title;
</script>


<div class="pageWrap">
    <Header>{title}</Header>
    <section>
        <img class="featured-image" src="{thumbnail}" alt="thumbnail description" />
        <div class="content">
            <slot />
        </div>
    </section>
</div>



<style lang="scss">
    section {
        padding: $space5;
        margin: $space5;
        :global(ul) {
            list-style-type: none;
        }
    }
</style>