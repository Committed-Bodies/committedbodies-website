<script>
    import faciltyData from '$lib/data/facilityPage.json'
	import MasonryList from '$lib/components/MasonryListSection.svelte';
    import Header from '$lib/components/Header.svelte';
    import PageIntroSection from '$lib/components/PageIntroSection.svelte';
    let introData = faciltyData.intro;
    let masonryList = faciltyData.facilityFeatures;
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Facility
    </Header>

    <PageIntroSection {introData}/>

    <MasonryList {masonryList}/>

</div>
