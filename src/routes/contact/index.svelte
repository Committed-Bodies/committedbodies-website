<script context="module">
    export const prerender = true;
</script>

<script>
    //Donavan
    import contactPage from '$lib/data/contactPage.json' 
    //Donavan
    import Header from '$lib/components/Header.svelte';
    // import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import ContactSection from "$lib/components/ContactSection.svelte";

</script>

<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Contact
    </Header>
    <div class="contentWrap">
        
        <div class="content">
            <!-- Donavan - replace the content text in this section with props from a data file. See Trello card -->
            <h2>
                {contactPage.intro.title}
            </h2>
            <p class="subtitle h4">
                {contactPage.intro.subtitle}
            </p>
            <p>
                {contactPage.intro.content}
            </p>
        </div>
        
        <!-- <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script> -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <!-- <iframe width="100%" height="1700" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://www.clubmanagercentral.com/cm/contact.php?b=61e68416-3d0e-4302-bd0f-dca493494bb3"></iframe> -->
                                

        <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script>
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe width="100%" height="1700" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Member/SimpleContact.mvc"></iframe>
                        
        <!-- <form name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name & Surname: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Cellphone Number: <input type="integer" name="integer`" /></label>
            </p>
            <p>
                <label>What are your fitness goals: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form> -->
        <ContactSection />
    </div>
</div>

<style lang="scss">
    .contentWrap {
        padding: 2rem;
        background-color: hsl(var(--neutralHS) var(--neutralL));
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        .content {
            color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
            h2 {
                margin-top: 0;
				font-family: $font_boldEmphasis;
				line-height: 1;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
			}
			.subtitle {
				font-family: $font_cursiveEmphasis;
				margin-top: 1em;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
			}
        }
        // form {
        //     margin-top: $space4;
        //     background-color: #ffffff;
        //     padding: $space3;
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     align-items: flex-start;
        // }
    }
</style>