<script>
    import Header from '$lib/components/Header.svelte';
    import membershipPage from '$lib/data/membershipPage.json'
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Portal
    </Header>
    <script src="https://CommittedBodiesFitnessCentresa.clubm.mobi/Portal/Home/clubmanager-integration.js"></script>

    <div class="contentWrap">
        
        <div class="content">
            <h2>
                {membershipPage.introPortal.title}
            </h2>
            <p class="subtitle h4">
                {membershipPage.introPortal.subtitle}
            </p>
            <p>
                {membershipPage.introPortal.content}
            </p>
        </div>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe width="100%" height="1700" allowtransparency="true" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://CommittedBodiesFitnessCentresa.clubm.mobi/"></iframe>

    </div>
</div>