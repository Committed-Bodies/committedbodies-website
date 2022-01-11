<script>
	import ContactSocialLinks from '$lib/components/ContactSocialLinks.svelte';
    import contactData from '$lib/data/contact.json';
	import ContactDetails from '$lib/components/ContactDetails.svelte'
    import Logo from '$lib/svg/logo/Logo.svelte';

    // Contact details from data
    let contacts = contactData.contacts[0];
</script>

<section class="contactSection">
    <!-- Two Columns -->
    <div class="contactWrap">
        <!-- Info Column -->
        <div class="contactInfo">
            <div class="logoWrap">
                <Logo></Logo>
            </div>  
            <ContactDetails {contacts} classList="theme-on-primary" /> 
            <ContactSocialLinks />
        </div>
        <!-- Map Column -->
        <a class="contactMap" href="https://goo.gl/maps/VA4dCUMKpTfk7nPh6" alt="Open Google Maps">
            <img src="/assets/images/map.svg" alt="">
        </a>
    </div>    
</section>

<style lang="scss">
    .contactSection {
        .contactWrap {
            display: flex;
             flex-direction: column;
             color: hsla(var(--onNeutral) / var(--onNeutralStrength1));
            .contactInfo {
                margin: 2rem;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                :global(.contactDetails li) {
                    text-align: center;
                }
                .logoWrap {
                    width: 30%;
                }
                
            }
            a.contactMap {
                flex: 1;
                text-decoration: none;
                transition: all 0.7s linear;
                background-color: rgba(255,255,255,0.3);
                display: grid;
                place-items: center;
                overflow: hidden;
                margin: 2rem;
                &:before {
                    content: "Open in Google Maps";
                    padding: 1rem;
                    border: 1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));
                    background-color: hsl(var(--accentHS) calc(var(--accentL) - 10%));
                    color: hsl(var(--onAccent) / var(--onAccentStrength0));
                    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
                    z-index: 2;
                    position: absolute;
                    transform: scale(0);
                    opacity: 0;
                    transition: all 0.3s ease-out;
                }
                img {
                    will-change: transform, scale;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    object-position: center center;
                    transition: all 0.4s ease-in-out;
                    transform: scale(1);
                    z-index: 1;
                }
                &:hover {
                    &:before {
                        transform: scale(1);
                        opacity: 1;
                    }
                    img {
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
    @media screen and (min-width: $mdScreen) {
        .contactSection {
            .contactWrap {
                flex-direction: row-reverse;
                .contactInfo {
                    align-items: flex-start;
                    :global(.contactDetails li) {
                        text-align: left;
                    }
                }
            }
        }
    }
</style>