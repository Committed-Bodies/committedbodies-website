<script context="module">
    // An array of all posts in this directory
    const allServices = import.meta.glob('./*.md')
    let serviceArray = [];

    for (let path in allServices) {
        serviceArray.push(
            // Renaming stuff to align the masonry item component props
            allServices[path]().then(({ metadata }) => {
                let title = metadata.title;
                let price = metadata.price;
                let content = metadata.blurb;
                let thumbnail = metadata.thumbnail;
                let order = metadata.order;
                let route = "services";
                return {path, title, price, content, thumbnail, route, order};
            })
        );
    }
    export const load = async() => {
        const services = await Promise.all(serviceArray);
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
    import MasonryListSection from '$lib/components/MasonryListSection.svelte';
    import servicesData from "$lib/data/servicesPage.json"
    
    export let services;
    services.sort((a, b) => (a.order > b.order) ? 1 : -1);
    let introData = servicesData.intro;    
    let masonryList = services;
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631431623/action%20photos/Gym-in-Benoni_m5uh6j.jpg">
        SERVICES
    </Header>

    <PageIntro {introData} />

    <MasonryListSection {masonryList} />
</div>
