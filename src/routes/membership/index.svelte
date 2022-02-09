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
                let summaryList = metadata.summaryList;
                let order = metadata.order;
                let featured = metadata.featured;
                let route = "membership";
                return {path, title, price, content, thumbnail, summaryList, route, featured, order};
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
    import ComparisonTable from '$lib/components/ComparisonTable.svelte';
    import Header from '$lib/components/Header.svelte';
    import PageIntro from '$lib/components/PageIntroSection.svelte'
    import membershipData from "$lib/data/membershipPage.json"
    
    export let memberships;
    let introData = membershipData.introJoin;
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        MEMBERSHIPS
    </Header>

    <PageIntro {introData} />   
    <ComparisonTable comparisonData = "{memberships}"/>
</div>