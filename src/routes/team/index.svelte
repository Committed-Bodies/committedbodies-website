<script>
    import Header from '$lib/components/Header.svelte';
    import TrainersSection from "$lib/components/TrainersSection.svelte";
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        The Team
    </Header>

    <TrainersSection />

</div>
