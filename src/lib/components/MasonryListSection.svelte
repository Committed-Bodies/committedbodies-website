<script>
	import MasonryItem from './MasonryItem.svelte';
    import Masonry from 'svelte-bricks';
    export let masonryList;
    $: items = masonryList;
    let animate = false;
</script>

<section id="facility">
    <div class="gallery">
        <Masonry {items} {animate} let:item>
            <MasonryItem {item} />
        </Masonry>
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
    }
</style>