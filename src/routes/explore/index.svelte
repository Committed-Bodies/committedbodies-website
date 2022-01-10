<script>
    import Header from '$lib/components/Header.svelte';
    import FacilitySection from "$lib/components/FacilitySection.svelte";
    import TrainersSection from "$lib/components/TrainersSection.svelte";
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        EXPLORE
    </Header>

    <FacilitySection />

    <TrainersSection />

    <section id="services">
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, inventore recusandae. Nostrum explicabo quibusdam cumque nam beatae consequuntur. Necessitatibus beatae maiores nostrum cupiditate unde sequi aperiam omnis nesciunt ratione sit.</p>
    </section>

</div>



<style lang="scss">
    section {
        padding: 3vw;
        max-width: 100%;

    }
</style>
