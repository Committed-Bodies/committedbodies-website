<script>
    import Header from '$lib/components/Header.svelte';
    import FacilitySection from "$lib/components/FacilitySection.svelte";
    
    // import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    // Using fade transition for now - custom slideFade transition messes with the home page gsap scrolltrigger animations 
    import { fade } from 'svelte/transition';
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Facility
    </Header>

    <FacilitySection />

</div>
