<script>
    export let teamMembers;
</script>

<section id="trainers">
    <h3> Our Personal Trainers </h3>
    <div class="trainersGallery">
        {#each teamMembers as trainer}
            {#if trainer.metadata.group == "Trainers"}
                <div class="trainerWrap">
                    <img src="{trainer.metadata.thumbnail}" alt="Cool profile pic for {trainer.metadata.firstName}">
                    <h3 class="h5">{trainer.metadata.fullName}</h3>
                    {#if trainer.metadata.specialisations}
                    <p>{trainer.metadata.blurb}</p>
                    <ul class="specialisations">
                        {#each trainer.metadata.specialisations as specialisation}
                            <li>{specialisation.title}</li>
                        {/each}
                    </ul>
                    {/if}
                    <a class="button" href="{`/team/${trainer.path.replace(".md", "")}`}" alt="Book {trainer.metadata.fistName}">Train with {trainer.metadata.firstName}</a>
                </div>
            {/if}
        {/each}
    </div>
</section>

<section id="class-trainers">
    <h3> Class Trainers </h3>
    <div class="trainersGallery">
        {#each teamMembers as trainer}
            {#if trainer.metadata.group == "Group Class Trainers"}
                <div class="trainerWrap">
                    <img src="{trainer.metadata.thumbnail}" alt="Cool profile pic for {trainer.metadata.firstName}">
                    <h3 class="h5">{trainer.metadata.fullName}</h3>
                    <p>{trainer.metadata.blurb}</p>
                    {#if trainer.metadata.specialisations}
                    <ul class="specialisations">
                        {#each trainer.metadata.specialisations as specialisation}
                            <li>{specialisation.title}</li>
                        {/each}
                    </ul>
                    {/if}
                    
                    <a class="button" href="{`/team/${trainer.path.replace(".md", "")}`}" alt="Book {trainer.metadata.fistName}">Read more about {trainer.metadata.firstName}</a>
                </div>
            {/if}
        {/each}
    </div>
</section>

<section id="personnel">
    <h3> Our personnel </h3>
    <div class="trainersGallery">
        {#each teamMembers as trainer}
            {#if trainer.metadata.group == "Personnel"}
                <div class="trainerWrap">
                    <img src="{trainer.metadata.thumbnail}" alt="Cool profile pic for {trainer.metadata.firstName}">
                    <h3 class="h5">{trainer.metadata.fullName}</h3>
                    <p>{trainer.metadata.blurb}</p>
                    {#if trainer.metadata.specialisations}
                    <ul class="specialisations">
                        {#each trainer.metadata.specialisations as specialisation}
                            <li>{specialisation.title}</li>
                        {/each}
                    </ul>
                    {/if}
                    
                    <a class="button" href="{`/team/${trainer.path.replace(".md", "")}`}" alt="Book {trainer.metadata.fistName}">Read more about {trainer.metadata.firstName}</a>
                </div>
            {/if}
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        .trainersGallery {
            .trainerWrap {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem 0;
                position: relative;
                h3 {
                    text-align: center;
                    margin: 0;
                    color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
                }
                p {
                    margin: 0;
                    text-align: center;
                }
                .specialisations {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
                    justify-items: center;
                    align-items: center;
                    li {
                        padding: 0.1rem 0.5rem;
                        margin: 3px;
                        border-radius: 3px;
                        font-size: 0.6rem;
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
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 2rem;
        }
    }
}
@media (min-width: $xlScreen) {
    section {
        .trainersGallery {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2rem;
        }
    }
}
</style>