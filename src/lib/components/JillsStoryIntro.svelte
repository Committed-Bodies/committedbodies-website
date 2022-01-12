<script>
	import { onMount } from 'svelte';
	export let introData;
	
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.set(".graphicsWrap *",{transformOrigin:"center center"});

		let tl1 = gsap.timeline({
			scrollTrigger: {
				scroller: "main",
				trigger: '.intro .content',
				scrub: 1,
				start: "top 70%",
				end: "center center"
			}
		});
		tl1.from(".layerBG",{duration:1, rotate:40},"<");
		tl1.from(".layerBeforeTextBG, .layerBeforeTextFG",{duration:1, rotate:40},"<");
		tl1.from(".layerMirror",{duration:1, xPercent:-10},"<+0.1");
		tl1.from(".layerScale",{duration:1.3, rotate:20, xPercent:-10},"<");

		let tl2 = gsap.timeline({
			scrollTrigger: {
				scroller: "main",
				trigger: '.intro .content .graphicsWrap',
				scrub: 1,
				start: "center center",
				end: "+=500px",
				pin: ".intro .content",
				anticipatePin: 1
			}
		});
		tl2.from(".layerJillAfter",{duration:1, left:-300, autoAlpha:0},"<");
		tl2.to(".layerMirror",{duration:1, left:-300, autoAlpha:0},"<0.5");
		tl2.fromTo(".layerScale",{rotate:0, left:0, autoAlpha:1}, {duration:1.3, left:-300, rotate:-30, autoAlpha:0},"<0.5");
		tl2.from(".layerAfterTextBG",{duration:1, right:-30, autoAlpha:0},"<0.5");
		tl2.fromTo(".layerBG",{rotate:0}, {duration:1.3, rotate:90},"<");
	});
</script>

<section class="intro">
	
	<div class="introTitle">
		<h1 class="xxxl">{introData.title}</h1>
		<p class="subtitle h2">{introData.subtitle}</p>
	</div>
	
	<div class="content">
		<div class="graphicsWrap">
			<img class="layer layerBG" src="/assets/images/Before-After/BG.png" alt="">
			<img class="layer layerBeforeTextBG" src="/assets/images/Before-After/BeforeTextBG.png" alt="">
			<img class="layer layerAfterTextBG" src="/assets/images/Before-After/AfterTextBG.png" alt="">
			<img class="layer layerMirror" src="/assets/images/Before-After/mirror.png" alt="">
			<img class="layer layerScale" src="/assets/images/Before-After/scale.png" alt="">
			<img class="layer layerJillAfter" src="/assets/images/Before-After/AfterJill.png" alt="">
			<img class="layerJillBefore" src="/assets/images/Before-After/beforeJill.png" alt="">
			<img class="layer layerBeforeTextFG" src="/assets/images/Before-After/BeforeTextFG.png" alt="">
		</div>
		<div class="textWrap">

			{introData.text}

			<div class="signature">
				Jill Myburgh
			</div>

			<a class="button" href="{introData.buttonLink}">{introData.buttonText}</a>
		</div>
	</div>
	
</section>

<!-- ******CSS -->
<!-- NOT mobile first -->
<style lang="scss">
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
		
		.content {
			display: flex;
			.graphicsWrap {
				flex: 1.5;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				.layer {
					position: absolute;
					width: 100%;
					height: auto;
					// max-height: 100%;
					&.layerJillAfter, &.layerAfterTextBG {
						visibility: hidden;
					}
				}
				.layerJillBefore {
					position: relative;
					width: 100%;
				}
			}
			.textWrap {
				flex: 1;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding: 3vw;
				.button {
					@include button;
					@include buttonPrimary;
					margin-top: 1rem;
					font-size: 1.2em;
				}
				.signature {
					color: hsl(var(--accentHS) var(--accentL));
					font-family: $font_cursiveEmphasis;
					font-size: var(--fontSizeH3);
					margin: 2rem 0 0 0;
				}		
			}
		}
	}

	// Responsive Styles - for mobile
	@media screen and (max-width: calc($mdScreen - 1px)) {
		section.intro {
			.content {
				flex-direction: column-reverse;
				.graphicsWrap {
					flex: unset;
					overflow: hidden;
				}
				.textWrap {
					flex: unset;
					margin: 0 auto;
					max-width: 60ch;
					padding: 0 0 6vw 0;
					align-items: center;
				}
			}
		}
	}
</style>