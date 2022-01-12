<script>
	import FacilityFeature from './FacilityFeature.svelte';
    import facility from "$lib/data/facility.json";
    import Masonry from 'svelte-bricks';
    $: items = facility.facilityFeatures;
    let animate = false;

    // NOT WORKING
    // GSAP only animates features in first column
    
    // import { afterUpdate } from 'svelte';
    // afterUpdate(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     const sections = document.querySelectorAll('.feature');
    //     console.log('sections', sections);

    //     sections.forEach((section) => {
    //         gsap.from(section, {
    //             scrollTrigger: {
    //                 scroller: "main",
    //                 trigger: section,
    //                 // markers: true,
    //                 start: "top 50%"
    //             },
    //             xPercent: -10,
    //             opacity: 0,
    //             scale: 0.9,
    //             transformOrigin: "center center",
    //             duration: 0.3
    //         });
    //     });
    // });
</script>

<section id="facility">
    <div class="content">
        <h2>{facility.intro.title}</h2>
        <p class="subtitle h4">
            {facility.intro.subtitle}
        </p>
        <p>
            {facility.intro.content}
        </p>
    </div>
    <div class="gallery">
        <Masonry {items} {animate} let:item>
            <FacilityFeature {item} />
        </Masonry>
    </div>
</section>

<style lang="scss">
    section {
        padding: 3vw;
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
        .gallery {
            grid-column: 1;
            grid-row: 1;
            padding: 0;
        }
    }
    @media (min-width: $mdScreen) {
        // section {
        //     display: grid;
        //     grid-template-columns: 2fr 1fr;
        // }
    }
    // :global(.col .feature.active) {
    //     opacity: 1 !important;
    //     transform: scale(1) !important;
    // }
</style>