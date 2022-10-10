<script>
    export let section;
</script>
<!-- <section style="background-image:url({section.background});"> -->
<section>
	<div class="bgImage" style="background-image:url({section.background})">

	</div>
	<!-- <img class="bgImage" src="{section.background}" alt=""> -->

	<!-- <slot name="contentPrimary"></slot> -->
	<div class="contentPrimary">
		<h3 class="h1">{section.title}</h3>
		<p class="subtitle h4">{section.subtitle}</p>
		{@html section.text}
		<div class="actionRow">
			{#if section.secondaryButtonText}
			<a class="button ghost" href="{section.secondaryButtonLink}">{section.secondaryButtonText}</a>
			{/if}
			{#if section.primaryButtonText}
			<a class="button primary" href="{section.primaryButtonLink}">{section.primaryButtonText}</a>
			{/if}
		</div>
	</div>
	<div class="numbers">
		<svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
			<line x="0" y1="0" x2="0" y2="800"></line>
		</svg>
		<div class="number">{section.number}</div>
	</div>
	<div class="contentSecondary">
		<img src="{section.image}" alt="">
	</div>

</section>

<style lang="scss">
	section {
		position: relative;
    	margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 4em 1fr;
		grid-template-rows: 30em auto auto;
		grid-template-areas: "left numbers right";
		padding: 0;
		
		.bgImage {
			grid-column: 1 / span 3;
			grid-row: 1;
			z-index: 0;
			width: 100%;
			height: 100%;
			// object-fit: cover;
			// object-position: center;
			background-position: center;
			background-size: cover;
			background-attachment: fixed;
		}
		

		.numbers {
			position: relative;
			grid-area: numbers;
			grid-row: 1 / span 3;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			height: 100%;
			
			svg {
				height: 100%;
				stroke-width: 4px;
				stroke:  hsl(var(--accentHS) var(--accentL));
				position: absolute;
			}
			.number {
				font-size: 2.5em;
				position: absolute;
				top: 1em;
				width: 100%;
				aspect-ratio: 1 / 1;
				border-radius: 50%;
				background-color: hsl(var(--accentHS) var(--accentL));
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 900;
				color: hsl(var(--onAccent) / var(--onAccentStrength1));
			}
		}
		.contentPrimary {
			grid-row: 2;
			grid-column: 1 / span 3;
			padding: 3vw;
			color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
			z-index: 2;
			background-color: hsl(var(--neutralHS) var(--neutralL));
			text-align: center;
			h3 {
				font-family: $font_boldEmphasis;
				line-height: 1;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
			}
			.subtitle {
				margin-top: 1em;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
			}
			.actionRow {
				display: flex;
				grid-gap: 1rem;
				justify-content: center;
				.button {
					@include button;
					font-size: 1.2em;
					&.primary {
						@include buttonPrimary;
					}
					&.ghost {
						@include buttonGhost;
						border-color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
						color: hsl(var(--onNeutral) / var(--onNeutralStrength2));
						&:hover {
							color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
						}
					}
				}
			}
		}
		.contentSecondary {
			padding: 3vw;
			grid-row: 3;
			grid-column: 1 / span 3;
			z-index: 3;
			background-color: hsl(var(--neutralHS) var(--neutralL));
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	// MED > SCREENS SECTION LAYOUTS
	@media screen and (min-width: $mdScreen) {
		section {
			grid-template-columns: 1fr 4em 1fr;
			grid-template-areas: "left numbers right";
			grid-template-rows: auto 30em;
			z-index: 1;

			.bgImage {
				grid-column: 1 / span 3;
				grid-row: 2;
				z-index: 0;
			}

			.numbers {
				z-index: 3;
			}
			
			.contentPrimary {
				background-color: transparent;
				grid-row: 1;
				text-align: left;
				.actionRow {
					justify-content: flex-start;
				}
			}
			.contentSecondary {
				background-color: transparent;
				grid-row: 1;
			}
		}
		// Alternate image and text on larger screens
		:global(section:nth-of-type(odd)) {
			&:before {
				background: var(--brandGradient2FromRight);
				right: 0;
				top: 0;
			}
			.contentPrimary {
				grid-area: right;
			}
			.contentSecondary {
				grid-area: left;
			}
		}
		:global(section:nth-of-type(even)) {
			&:before {
				background: var(--brandGradient2FromLeft);
			}
			.contentPrimary {
				grid-area: left;
			}
			.contentSecondary {
				grid-area: right;
			}
		}
	}
</style>