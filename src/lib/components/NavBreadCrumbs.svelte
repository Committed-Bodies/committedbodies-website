<script>
    import { page } from '$app/stores';
    export let path = $page.url.pathname;
    export let classList;

    // create array from path
    let paths = path.split("/");
    paths = paths[paths.length-1] === "" ? paths.slice(0, paths.length-1): paths;
    paths = paths[1] === "" ? paths.slice(1) : paths;

    // Create array of crumbs - we need a title and url for each
    let breadcrumbs = paths.map((path, index) => {
        var url = paths.slice(0, index+1).join('/');
        if (index === 0) {
            path = "home";
            url = "/";
        }
        return {"title":path, "url":url};
    });
</script>

<ul class="breadcrumbs {classList}">
    {#each breadcrumbs as crumb, i}
        {#if crumb.url == $page.url.pathname}
            <li class="youAreHere">
                <span class="divider">/</span>
                <span class="crumb">{crumb.title}</span>
            </li>
        {:else}
            <li>
                <span class="divider">/</span>
                <a href="{crumb.url}">
                    <span class="crumb">{crumb.title}</span>
                </a>
            </li>
        {/if}
    {/each}
</ul>

<style lang="scss">
    .breadcrumbs {
        color: inherit;
        font-weight: 300;
        text-align: center;
        list-style-type: none;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
        li {
            color: inherit;
            .divider {
                padding: $space1 0;
                color: inherit;
            }
            a {
                text-decoration: none;
                color: inherit;
                &:hover {
                    opacity: 0.7;
                }
            }
            .crumb {
                padding: $space1;
                // font-size: small;
                text-transform: capitalize;
            }
            &:first-of-type {
                .divider {
                    display: none;
                }
            }
            &.youAreHere {
                opacity: 0.7;
            }
        }
    }
</style>