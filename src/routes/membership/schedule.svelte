<script>
    import membershipPage from '$lib/data/membershipPage.json'
    import Header from '$lib/components/Header.svelte';
    import PageIntroSection from '$lib/components/PageIntroSection.svelte';
    let introData = membershipPage.introSchedule;
</script>

<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631431623/action%20photos/Gym-in-Benoni_m5uh6j.jpg">
        Schedule
    </Header>
    <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script>
    
    <div class="contentWrap">
        
        <PageIntroSection {introData} />
        
       
        <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script>
         <!-- svelte-ignore a11y-missing-attribute -->
        <iframe width="100%" height="1700" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Booking/Forthcoming?showLogo=true&"></iframe>        
    </div>
</div>

<style lang="scss">
    iframe {
        padding: 3vw;
    }
</style>