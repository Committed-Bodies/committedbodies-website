<script>
    export let thumbnail;
    export let fullName;
</script>

<div>
    <div>
        <img class="featured-image" src="{thumbnail}" alt="thumbnail description" />
    </div>
    <div class="content">
        <h1>
            {fullName}
        </h1>
        <slot />
    </div>
</div>