<!-- ******SCRIPTS -->
<script>
    import homePage from '$lib/data/homePage.json'
    import HeroLogo from "$lib/components/HeroLogo.svelte";
    import JillsStoryIntro from '$lib/components/JillsStoryIntro.svelte';
    import VideoSection from '$lib/components/VideoSection.svelte'
    import NumberedSection from '$lib/components/NumberedSection.svelte';
    import ContactSection from '$lib/components/ContactSection.svelte'

    // SONYA: if you update the Animated-LOGO from keyshape, replace woman and dumbell xlinks with cloudinary links:
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689403/ui-assets/woman_f4955x.png"
    // xlink:href="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631689417/ui-assets/dumbbell-FG_auovbf.png"

    // SECTIONS FROM DATA
    let sections = homePage.sections;
    let introData = homePage.intro;
    let videoData = homePage.video;
</script>

<!-- ******HTML -->
<svelte:head>
	<title>Committed Bodies - Weight-loss gym in Benoni</title>
</svelte:head>



<div class="pageWrap">
    <div class="pageContentWrap">

        <!-- Video Preview -->
        <VideoSection {videoData}></VideoSection>

        <!-- Numbered Sections -->
        {#each sections as section (section)}
            <NumberedSection {section}></NumberedSection>
        {/each}

        <section class="contactTitle">
            <!-- Title -->
            <h2><span>Contact Us</span></h2>
        </section>

        <!-- Contact -->
        <ContactSection />
    </div>
</div>

<!-- Hero logo -->
<HeroLogo></HeroLogo>

<section class="intro">
	<div class="introTitle">
		<h1 class="xxxl">{introData.title}</h1>
		<p class="subtitle h2">{introData.subtitle}</p>
	</div>
</section>

<!-- (Intro) Jill's story -->
<JillsStoryIntro {introData}></JillsStoryIntro>

<style  lang="scss">
    section.intro {
		padding: 3vw;
		position: relative;
		width: 100%;

		.introTitle {
			padding: 6vw 0;
			h1 {
				margin: 0;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
				text-align: center;
				font-family: $font_boldEmphasis;
			}
			.subtitle {
				color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
				margin: 0.5em 0;
				text-align: center;
				font-family: $font_cursiveEmphasis;
			}
		}
    }
    .contactTitle {
        h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 3rem 0;
            color: hsla(var(--onNeutral) / var(--onNeutralStrength3));
            font-family: $font_boldEmphasis;
            span {
                border: 3px solid hsl(var(--accentHS) var(--accentL));
                padding: 1rem 2rem;
                text-align: center;
                width: auto;
                background-color: hsl(var(--neutralHS) var(--neutralL));
                z-index: 5;
            }
        }
    }
    :global(.pageContentWrap section:nth-last-child(3) .numbers) {
		height: 110%;
	}
    :global(.pageContentWrap section:nth-last-child(3)) {
		padding-bottom: 10%;
	}

    section{
        
    }
</style>