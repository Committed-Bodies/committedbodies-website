<script>
    import trainersData from "$lib/data/teamPage.json"
    export let teamMembers;
</script>

<section id="trainers">
    <div class="content">
        <h2>{trainersData.intro.title}</h2>
        <p class="subtitle h4">
            {trainersData.intro.subtitle}
        </p>
        <p>
            {trainersData.intro.content}
        </p>
    </div>
    <div class="trainersGallery">
        {#each teamMembers as trainer}
            <div class="trainerWrap">
                <img src="{trainer.metadata.thumbnail}" alt="Cool profile pic for {trainer.metadata.firstName}">
                <h3 class="h5">{trainer.metadata.fullName}</h3>
                <ul class="specialisations">
                    {#each trainer.metadata.specialisations as specialisation}
                        <li>{specialisation}</li>
                    {/each}
                </ul>
                <p>{trainer.metadata.blurb}</p>
                <a class="button" href="{`/team/${trainer.path.replace(".md", "")}`}" alt="Book {trainer.metadata.fistName}">Train with {trainer.metadata.firstName}</a>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        .content {
            grid-column: 2;
            grid-row: 1;
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
        .trainersGallery {
            .trainerWrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem 0;
                position: relative;
                h3 {
                    margin: 0;
                    color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
                }
                p {
                    margin: 0;
                }
                .specialisations {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    li {
                        padding: 0.1rem 0.5rem;
                        display: inline-block;
                        margin: 3px;
                        border-radius: 3px;
                        font-size: 0.8rem;
                        font-weight: 500;
                        background: hsl(var(--neutralHS) calc(var(--neutralL) + 5%));
                        color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
                        text-transform: uppercase;
                        letter-spacing: 1px;
                    }
                }
                .button {
                    margin-top: 1rem;
                    @include button;
                    @include buttonPrimary;
                }
            }
        }
    }
// Responsive styles md - lg screens
@media (min-width: $mdScreen) {
    section {
        .trainersGallery {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
        }
    }
}
</style>