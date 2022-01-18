<script context="module">
    const allServices = import.meta.glob('./*.md')
    let service = [];
    for (let path in allServices) {

        service.push(
            allServices[path]().then(({ metadata }) => {
                return {path, metadata};
            })
        );
    }
    export const load = async() => {
        const services = await Promise.all(service);
        return {
            props: {
                services,
            }
        }
    };

</script>

<script>
    import Header from '$lib/components/Header.svelte';
    import ServicesSection from "$lib/components/ServicesListSection.svelte";
    export let services;
    // import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        SERVICES
    </Header>

    <ServicesSection {services} />
</div>



<style lang="scss">
    // section {
    //     :global(ul) {
    //         list-style-type: none;
    //     }
    // }
</style>
