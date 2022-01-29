<script>
	import PageIntroSection from '$lib/components/PageIntroSection.svelte';
    import contactPage from '$lib/data/contactPage.json';
    let introData = contactPage.intro;
    import Header from '$lib/components/Header.svelte';
    import ContactSection from "$lib/components/ContactSection.svelte";

</script>

<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Contact
    </Header>

    <PageIntroSection {introData}/>

    <ContactSection />

    <!-- <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script> -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe width="100%" height="500" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Member/SimpleContact.mvc"></iframe>
</div>

<style lang="scss">
    .pageWrap {
        :global(.contactSection) {
            background: hsl(var(--neutralHS) calc(var(--neutralL) - 3%) );
        };
    }
    
    iframe {
        padding: 3vw;
    }
</style>