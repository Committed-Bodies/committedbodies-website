<script>
    export let post;
	let catIcons = {
			Transformation: "award",
			Events: "calendar",
			Advice: "thumbs-up",
			News: "bookmark",
			Announcements: "message",
			Tutorials: "chevrons-right"
	};
	let icon = catIcons[post.metadata.category];
	console.log("icon", icon);
</script>
<section>
	<div class="contentPrimary">
		<h3 class="h1">{post.metadata.title}</h3>
		<p class="subtitle h4">{post.metadata.category}</p>
		<div class="date">{new Date(post.metadata.date).toDateString()}</div>
		<p class="excerpt">{post.metadata.excerpt}</p>
		<div class="actionRow">
			<a class="button ghost" href="{`/blog/${post.path.replace(".md", "")}`}">Read more</a>
		</div>
	</div>
	<div class="numbers">
		<svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
			<line x="0" y1="0" x2="0" y2="800"></line>
		</svg>
		<div class="number">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <use xlink:href="#{icon}"></use>
            </svg>
		</div>
	</div>
	<div class="contentSecondary">
		<img src="{post.metadata.thumbnail}" alt="">
	</div>

</section>

<style lang="scss">
	section {
		// max-width: 70em;
    margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 4em 1fr;
		grid-template-rows: 9em auto auto;
		grid-template-areas: "left numbers right";
		padding: 0;
		.numbers {
			position: relative;
			grid-area: numbers;
			grid-row: 1 / span 3;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			height: 100%;
			z-index: 1;
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
				svg {
					width: 50%;
					stroke: hsl(var(--onAccent) / var(--onAccentStrength1));
					stroke-width: 2px;
				}
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
				font-family: $font_cursiveEmphasis;
				margin-top: 1em;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
			}
			.date {
				margin-top: 1rem;
				margin-bottom: 0;
				font-weight: 600;
				letter-spacing: 1px;
				text-transform: uppercase;
				font-size: 0.8rem;
				color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
			}
			.excerpt {
				margin-top: 0;
			}
			.actionRow {
				display: flex;
				grid-gap: 1rem;
				justify-content: center;
				.button {
					@include button;
					font-size: 1.2em;
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
			grid-template-rows: unset;
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
			.contentPrimary {
				grid-area: right;
			}
			.contentSecondary {
				grid-area: left;
			}
		}
		:global(section:nth-of-type(even)) {
			.contentPrimary {
				grid-area: left;
			}
			.contentSecondary {
				grid-area: right;
			}
		}
	}
</style>