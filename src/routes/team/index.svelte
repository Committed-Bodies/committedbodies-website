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
    import teamIntro from "$lib/data/teamPage.json"
    import Header from '$lib/components/Header.svelte';
    import TrainersSection from "$lib/components/TeamListSection.svelte";

    export let teamMembers;

    teamMembers.sort((a, b) => (a.metadata.order > b.metadata.order) ? 1 : -1);
    console.log(teamMembers);
</script>


<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631431623/action%20photos/Gym-in-Benoni_m5uh6j.jpg">
        The Team
    </Header>

    <section  class="content">
        <h2>{teamIntro.intro.title}</h2>
        <p class="subtitle h4">
            {teamIntro.intro.subtitle}
        </p>
        <p>
            {teamIntro.intro.content}
        </p>
    </section>

    <TrainersSection {teamMembers} />

</div>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        h2 {
            margin-top: 0;
            font-family: $font_boldEmphasis;
            line-height: 1;
            color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
        }
        .subtitle {
            font-family: $font_cursiveEmphasis;
            margin-top: 1em;
            color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
        }
    }
</style>
