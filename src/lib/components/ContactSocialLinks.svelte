<script>
    import contactData from '$lib/data/contactPage.json';
    let socials = contactData.socials;
</script>
<ul class="socialDetails">
    {#each socials as social}
        {#if social}
            <li>
                <a class="{social.title} socialLink" href="{social.link}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <use xlink:href="#{social.title}"></use>
                    </svg>
                </a>
            </li>
        {/if}
    {/each}
</ul>

<style lang="scss">
    .socialDetails {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        color: inherit;
        justify-content: center;
        li {
            border: 2px solid;
            border-radius: 3px;
            border-color: inherit;
            text-align: center;
            display: block;
            width: 2.5rem;
            height: 2.5rem;
            transition: all 0.3s ease-out;
            a {
                color: inherit;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                svg {
                    stroke-width: 2px;
                }
            }
            &:hover {
                background-color: hsl(var(--accentHS) var(--accentL));
                border-color: hsl(var(--accentHS) var(--accentL));
            }
        }
    }
</style>