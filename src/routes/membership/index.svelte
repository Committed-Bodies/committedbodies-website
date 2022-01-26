<script>
    import membershipPage from '$lib/data/membershipPage.json'
    import Header from '$lib/components/Header.svelte';
    let introData = membershipPage.introJoin;
    import PageIntroSection from '$lib/components/PageIntroSection.svelte';
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Membership
    </Header>
    <!-- See about putting this script just before the closing body tag on this page -->
    <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script>

    <div class="contentWrap">
        
        <PageIntroSection {introData} />
    <p>
        Copy the code from services index page and tweek to show memberships instead.
    </p>

        <!-- svelte-ignore a11y-missing-attribute
        <iframe width="100%" height="1700" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Member/Joining.mvc"></iframe>
                         -->
    </div>

</div>