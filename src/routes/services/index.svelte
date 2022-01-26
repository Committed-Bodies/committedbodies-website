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
                let route = "services";
                return {path, title, price, content, thumbnail, route};
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
    let introData = servicesData.intro;    
    let masonryList = services;
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        SERVICES
    </Header>

    <PageIntro {introData} />

    <MasonryListSection {masonryList} />
</div>
