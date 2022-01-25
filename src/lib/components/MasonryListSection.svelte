<script>
	import MasonryItem from './MasonryItem.svelte';
    import Masonry from 'svelte-bricks';
    export let masonryList;

    // ITEM PROPERTIES (* required)
    // - * title
    // - * thumbnail
    // - * content
    // - price
    // - path
    // - if path then *route (see services/index.svelte script for example)

    // add unique id to each masonry item (I think masonry plugin needs it)
    function insertID() {
        for (let index = 0; index < masonryList.length; index++) {
            const item = masonryList[index];
            item.id = index;
        }
    }
    insertID();
    

    // console.log("newMasonryList", masonryList);
    $: items = masonryList;
    let animate = false;
</script>

<section id="facility">
    <div class="gallery">
        <Masonry {items} {animate} let:item >
            <MasonryItem {item} />
        </Masonry>
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
    }
</style>