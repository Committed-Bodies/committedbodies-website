<script>
    import siteSettings from "$lib/data/siteSettings.json";
    import footerData from "$lib/data/footer.json";
</script>
<footer>
    <div class="footerContent">
        <div class="aboutWidget">
        <h5>About Committed Bodies</h5>
        <p>{siteSettings.config.about}</p>
        </div>
        <div class="actionsWidget align-right">
            <h5>{footerData.footerLinks1.columnTitle}</h5>
            <ul>
                {#each footerData.footerLinks1.links as link}
                    <li><a href="{link.url}">{link.title}</a></li>
                {/each}
            </ul>
        </div>
        <div class="actionsWidget">
            <h5>{footerData.footerLinks2.columnTitle}</h5>
            <ul>
                {#each footerData.footerLinks2.links as link}
                    <li><a href="{link.url}">{link.title}</a></li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="tagline">
        <div class="copyright">
            &copy; 2022 Committed Bodies
        </div>
        <div class="credit">
            Site by <a href="https://www.sonya.ninja" alt="Kick-ass websites by Sonya.Ninja">SONYA.NINJA</a>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        position: relative;
        background: hsl(var(--accentAltHS) var(--accentAltL));
        color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength0));
        font-weight: 300;
         a {
            color: inherit;
            text-decoration: none;
        }
        .footerContent {
            padding: 1rem;
            align-items: flex-start;
            div {
            // border: 1px solid white;
            p {
                margin-top: 0;
            }
            }
            h5 {
                font-size: 1.2rem;
                margin-top: 0;
                font-weight: 300;
                color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength3));
            }
            .actionsWidget {
                padding: 1rem;
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .tagline {
            padding: 1rem 1rem 2rem 1rem;
            display: flex;
            justify-content: space-between;
            background-color: hsl(var(--accentAltHS) calc(var(--accentAltL) - 10%));
            color: hsla(var(--onAccentAlt) / var(--onAccentAltStrength3));
            font-size: 0.8rem;
            // .credit {
            //     border: 1px solid red;
            // }
            // .copyright {
            //     border: 1px solid red;
            // }
        }
        
        
    
        
    }

    // Responsive Styles
    @media (min-width: $mdScreen) {
        footer {
            .footerContent {
                display: grid;
                grid-template-columns: 1fr auto auto;
                grid-gap: 1rem;
                .aboutWidget {
                    p {
                        max-width: 40ch;
                    }
                }
                .actionsWidget {
                    padding: 0;
                    &.align-right {
                        padding: 0 1rem 0 0;
                        text-align: right;
                        border-right: 1px solid hsl(var(--onAccentAlt) / var(--onAccentAltStrength3));
                    }
                }
            }
            .tagline {
                padding: 1rem;
            }
        }
    }
</style>