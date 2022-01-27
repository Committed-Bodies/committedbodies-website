<script context="module">
    // An array of all posts in this directory
    const allMemebrships = import.meta.glob('./*.md')
    let membershipArray = [];

    for (let path in allMemebrships) {
        membershipArray.push(
            // Renaming stuff to align the masonry item component props
            allMemebrships[path]().then(({ metadata }) => {
                let title = metadata.title;
                let price = metadata.price;
                let content = metadata.blurb;
                let thumbnail = metadata.thumbnail;
                let route = "membership";
                return {path, title, price, content, thumbnail, route};
            })
        );
    }
    export const load = async() => {
        const memberships = await Promise.all(membershipArray);
        return {
            props: {
                memberships,
            }
        }
    };
</script>

<script>
    import Header from '$lib/components/Header.svelte';
    import PageIntro from '$lib/components/PageIntroSection.svelte'
    import MasonryListSection from '$lib/components/MasonryListSection.svelte';
    import membershipData from "$lib/data/membershipPage.json"
    
    export let memberships;
    let introData = membershipData.introJoin;    
    let masonryList = memberships;
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        MEMBERSHIPS
    </Header>

    <PageIntro {introData} />

    <MasonryListSection {masonryList} />
</div>