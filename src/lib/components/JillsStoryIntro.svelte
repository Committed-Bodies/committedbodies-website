<script>
	export let introData;
</script>

<section class="intro">
	<div class="introTitle">
		<h1 class="xxxl">{introData.title}</h1>
		<p class="subtitle h2">{introData.subtitle}</p>
		<div class="signature">
			Jill Myburgh
		</div>
	</div>

	<div class="content">
		<div class="textWrap">

			{introData.text}

			<a class="button" href="{introData.buttonLink}">{introData.buttonText}</a>
		</div>
	</div>

</section>

<section class="jill">
	<div class=" graphics before">
			<img class="layer layerBG" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421673/ui-assets/Before-After/BG.png" alt="">
			<img class="layer layerBeforeTextBG" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421671/ui-assets/Before-After/BeforeTextBG.png" alt="">
			<img class="layer layerMirror" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421675/ui-assets/Before-After/mirror.png" alt="">
			<img class="layer layerScale" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421676/ui-assets/Before-After/scale.png" alt="">	
			<img class="layer layerJillBefore" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421674/ui-assets/Before-After/BeforeJill.png" alt="">
			<img class="layer layerBeforeTextFG" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421671/ui-assets/Before-After/BeforeTextFG.png" alt="">
	</div>

	<div class=" graphics after">
			<img class="layer layerBG" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421673/ui-assets/Before-After/BG.png" alt="">
			<img class="layer layerAfterTextBG" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421673/ui-assets/Before-After/AfterTextBG.png" alt="">	
			<img class="layer layerJillAfter" src="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1644421675/ui-assets/Before-After/AfterJill.png" alt="">
		</div>
</section>


<style lang="scss">
	section.intro {
		color: hsla(var(--onNeutral) / var(--onNeutralStrength1));
		padding: 0 3vw;
		margin-bottom: 3vw;
		margin-top: 3vw;
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-content: center;
		align-items: center;
		.introTitle {
			justify-content: flex-start;
			h1 {
				margin-top: 3rem;
				color: hsla(var(--onNeutral) / var(--onNeutralStrength3));
			}
			.subtitle {
				margin-top: 1rem;
				color: hsla(var(--onNeutral) / var(--onNeutralStrength2));
			}
		}
		.content {
			align-items: flex-end;
		}
		.signature {
			color: hsl(var(--accentHS) var(--accentL));
			font-family: $font_cursiveEmphasis;
			font-size: var(--fontSizeH3);
			margin: 1rem 0 0 0;
		}
		.button {
			@include button;
			@include buttonPrimary;
			margin-top: 1rem;
			font-size: 1.2em;
		}
	}
	section.jill {
		color: hsl(var(--onNeutralHS) var(--onNeutralL));
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 1rem;
		.graphics {
			position: relative;
			.layer {
				position: absolute;
				width: 100%;
				height: auto;
				top: 0;
				left: 0;
			}
			.layerBG {
				position: relative;
			}
			&.after {
				.layerBG {
					transform-origin: center;
					transform: rotate(30deg);
				}
			}
		}
		
	}

	@media screen and (max-width: calc($mdScreen - 1px)) {
		section.intro {
			display: block;
		}
		section.jill {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>