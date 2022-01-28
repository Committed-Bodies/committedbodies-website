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
                let route = "membership";
                return {path, title, price, content, thumbnail, summaryList, route};
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
    import membershipData from "$lib/data/membershipPage.json"
    
    export let memberships;
    let introData = membershipData.introJoin;
    console.log(memberships)
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        MEMBERSHIPS
    </Header>

    <PageIntro {introData} />

    <section>
        {#each memberships as membership}
            <h1>
                {membership.title}
            </h1>
            <div>
                {membership.price}
                <img src="{membership.thumbnail}" alt="Thumbnail pic of membership option">
            </div>
            <ul>
                {#each membership.summaryList as item}
                <li>
                    {item}
                </li>
                {/each}
            </ul>
            <a href="/">Reda More</a>
            <a href="{membership.actionLink}">Join</a>
        {/each}
    </section>

</div>