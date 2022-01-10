<script>
    import trainersData from "$lib/data/trainers.json"
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
        {#each trainersData.trainers as trainer}
            <div class="trainerWrap">
                <img src="{trainer.image}" alt="Cool profile pic for {trainer.name}">
                <p>{trainer.bio}</p>
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
                position: relative;
                overflow: auto;
                // border: 1px solid red;
                // background: white;
                // display: flex;
                // justify-content: center;
                // align-items: center;
                img {
                    float: right;
                    width: 50%;
                    // margin-left: -2rem;
                    shape-outside: url('/assets/images/kettlebell-LOGO.png'); 
                    shape-image-threshold: 0.5;
                    shape-margin: 0.5rem;
                }
            }
        }
    }
// On small devices alternate left-right images
@media (max-width: $mdScreen) {
   section {
        .trainersGallery {
            .trainerWrap:nth-child(odd) {
                img {
                    float: left;
                }
            }
        }
    } 
}
@media (min-width: $mdScreen) {
    section {
        .trainersGallery {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
            // .trainerWrap {
                
            // }
        }
    }
}
</style>