<script>
    import Header from '$lib/components/Header.svelte';
    import membershipPage from '$lib/data/membershipPage.json'
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Membership
    </Header>
    <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script>

    <div class="contentWrap">
        
        <div class="content">
            <h2>
                {membershipPage.introJoin.title}
            </h2>
            <p class="subtitle h4">
                {membershipPage.introJoin.subtitle}
            </p>
            <p>
                {membershipPage.introJoin.content}
            </p>
        </div>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe width="100%" height="1700" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Member/Joining.mvc"></iframe>
                        
    </div>

</div>



<!-- <style lang="scss">
    section {
        padding: $space2;
        max-width: 100%;
    }
</style> -->
