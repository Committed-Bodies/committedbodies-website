<script>
    import {page} from '$app/stores';
    import navigation from '$lib/data/navigation.json';
    let subNavList = navigation.topNav[$page.url.searchParams.get('subNav')].subnav;
</script>
<nav>
    <ul>
        {#each subNavList as item}
            <li>
                <a href="{item.link}">{item.title}</a>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
    nav {
        width: 100%;
        ul {
            list-style: none;
            color: inherit;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            li {
                a {
                    color: inherit;
                    text-decoration: none;
                    padding: 1rem;
                    background-color: rgba(0,0,0,0.3);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    font-size: var(--fontSizeXXL);
                }
            }
        }
    }
    @media (max-width: $mdScreen) {
        nav {
            ul {
                li {
                    a {
                        font-size: var(--fontSizeH5);
                    }
                }
            }
        }
    }
    
</style>