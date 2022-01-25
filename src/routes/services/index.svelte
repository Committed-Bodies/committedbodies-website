<script context="module">
    // An array of all posts in this directory
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
    import PageIntro from '$lib/components/PageIntroSection.svelte'
    import ServicesSection from "$lib/components/ServicesListSection.svelte";
    import servicesData from "$lib/data/servicesPage.json"
    
    export let services;
    let introData = servicesData.intro;
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        SERVICES
    </Header>

    <PageIntro {introData} />

    <ServicesSection {services} />
</div>
