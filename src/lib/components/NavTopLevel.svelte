<script>
	import { page } from '$app/stores';
	import navigation from '$lib/data/navigation.json';
	//  Hiding the contact section in nav - it's too much (may think about using it later)
	// import ContactDetails from '$lib/components/ContactDetails.svelte'
	let topNavList = navigation.topNav;
	export let y;
</script>

<!-- As in: Top-Level navigation -->
<nav class="topNav {y > 80 ? 'scrolled' : ''}" aria-label="Primary Navigation">
	<ul>
		{#each topNavList as item (item)}
		<li class="{item.class}" class:active={item.link === $page.url.pathname}>
			<a class="LinkLevel1" href="{item.link}">{item.title}</a>
			
			{#if item.subnav}
			<div class="subNav {item.subnavClass}">
				<ul>
					{#each item.subnav as subnavItem}
					<li class="{subnavItem.class}">
						<a href="{subnavItem.link}">
							{subnavItem.title}
						</a>
					</li>
					{/each}
				</ul>
			</div>
			{/if}
			<!-- Hiding the contact details in nav - may use it later -->
			<!-- {#if item.title == "Contact"}
			<div class="subNav contactSubnav hideSM hideMD">
				<ContactDetails classList="theme-on-primary"></ContactDetails>
			</div>
			{/if} -->
		</li>
		{/each}
	</ul>
	<!-- Try put loading component here -->
</nav>

<style lang="scss">
	// Default mobile-first styles
	// Background-Color is set in __layout : div.navColor
	.topNav {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		// Padding right balances the logo that has a grid-column of 50px;
		// TODO: better way of handling this?
		padding-right: 50px;
		color: hsl(var(--primaryHS) var(--onPrimaryStrength0));
		height: 100%;
		&:hover {
			li {
				a {
					opacity: 0.6;
				}
			}
		}
		ul {
			list-style-type: none;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			li {
				a {
					letter-spacing: 3px;
					display: block;
					color: inherit;
					text-decoration: none;
					padding: $space1;
					white-space: nowrap;
					transform: scale(1);
					transition: all 0.2s ease-in;
					transform-origin: center bottom;
					letter-spacing: 0;
					&:hover {
						opacity: 1;
						transform: scale(1.04);
					}
				}
			}
		}
	}

	// Dark theme has a different background color
	:global(.dark) {
		.topNav {
			color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength0));
			&.scrolled {
				color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength0));
			}
			@media screen and (min-width: $xlScreen) {
				color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength0));
				&.scrolled {
					color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength0));
				}
				a.LinkLevel1 {
					color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength1));
				}
			}
		}
	}
	
	// Responsive styles
	// Remove padding from really small screens
	@media screen and (max-width: 390px) {
		.topNav {
			padding-right: 0;
		}
	}
	// Md screens
	@media screen and (min-width: $mdScreen) {
		.topNav {
			padding-right: 0;
			color: hsl(var(--onImage) / var(--onImageStrength0));
			ul {
				li {
					a {
						text-decoration: none;
					}
				}
			}
			&.scrolled {
				color: hsl(var(--primaryHS) var(--onPrimaryStrength2));
			}
		}
	}
	// Xl screens
	@media screen and (min-width: $xlScreen) {
		.topNav {
			color: hsl(var(--onGradient) / var(--onGradientStrength0));
			// overflow-y: scroll;
			padding: 0 10% 10% 10%;
			justify-content: flex-start;
			background-color: transparent;
			&.scrolled {
				color: hsl(var(--onGradient) / var(--onGradientStrength0));
			}
			ul {
				display: flex;
				padding: 0;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				li {
					a.LinkLevel1 {
						font-size: var(--fontSizeH5);
						color: hsl(var(--onGradient) / var(--onGradientStrength1));
						padding: 0;
						transform-origin: left center;
					}
					.subNav {
						font-size: var(--fontSizeMd);
						ul {
							padding: 0;
							line-height: 1.5;
							margin: 0;
							gap: 0;
							li {
								margin-bottom: 0;
								a {
									padding: 0;
									transform-origin: left center;
								}
							}
						}
					}
				}
			}
		}
		:global(.topNav:hover ul li .contactSubnav ul li a) {
			opacity: 0.6;
		}
		:global(.topNav:hover ul li .contactSubnav ul li a:hover) {
			opacity: 1;
			transform: scale(1.04);
		}
	}
</style>