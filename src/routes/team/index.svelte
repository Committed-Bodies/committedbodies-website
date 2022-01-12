<script context="module">
    const allTeam = import.meta.glob('./*.md')
    let team = [];
    for (let path in allTeam) {

        team.push(
            allTeam[path]().then(({ metadata }) => {
                return {path, metadata};
            })
        );
    }
    export const load = async() => {
        const teamMembers = await Promise.all(team);
        return {
            props: {
                teamMembers,
            }
        }
    };
</script>

<script>
    import Header from '$lib/components/Header.svelte';
    import TrainersSection from "$lib/components/TeamListSection.svelte";
    export let teamMembers;
    console.log("teamMembers: ", teamMembers);
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        The Team
    </Header>

    <TrainersSection {teamMembers} />

</div>
