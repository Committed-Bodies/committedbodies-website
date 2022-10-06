<script>
    export let videoData;
</script>


<section class="{videoData.style}">
    <video autoplay muted loop id="myVideo">
        <source src="{videoData.videoUrl}" type="video/mp4">
    </video>
    <div class="contentWrap">
        <header>
            <h2 class="lookAtMeTitle">{videoData.title}</h2>
            <p class="subtitle">{videoData.subtitle}</p>
        </header>
        <div class="buttonWrap">
            <svg class="line" preserveAspectRatio="none" viewbox="-1 -1 6 800" width="6" height="800">
                <line x="0" y1="0" x2="0" y2="800"></line>
            </svg>
            <a class="button primary" href="{videoData.buttonLink}">{videoData.buttonText}</a>
        </div>
    </div>
</section>

<style lang="scss">
    // Mobile first default styles
    section {
        position: relative;
        display: flex;
        flex-direction: column;
        // aspect-ratio: 9 / 16;
        height: 100vh;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        video {
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: 1;
        }
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: var(--brandGradient);
            opacity: 0.5;
            z-index:2;
        }
        .contentWrap {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 3;
            max-width: 70em;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            padding: 0;
            .buttonWrap {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                height: 30%;
                svg {
                    height: 100%;
                    stroke-width: 4px;
                    stroke: hsl(var(--accentHS) var(--accentL));
                    position: absolute;
                    z-index: 1;
                    // visibility: hidden;
                }
                .button {
                    @include button;
                    @include buttonPrimary;
                    z-index: 2;
                    font-size: 1.5em;
                    // text-transform: uppercase;
                    font-weight: 900;
                }
            }
            header {
                position: relative;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .lookAtMeTitle {
                    font-family: $font_boldEmphasis;
                    font-size: var(--fontSizeXXXL);
                    line-height: 0.95;
                    text-align: center;
                    margin-top: 0;
                    // margin-bottom: 0.5em;
                    color: hsl(var(--onImage) / var(--onImageStrength2));
                    max-width: 16ch;
                }
                .subtitle {
                    // font-family: $font_cursiveEmphasis;
                    text-align: center;
                    margin-top: 1em;
                    font-size: 2rem;
                    color: hsl(var(--onImage) / var(--onImageStrength2));
                }
            }
        }
    }

    // Responsive styles

    // MED > SCREENS SECTION LAYOUTS
	@media screen and (min-width: $mdScreen) {
		section {
			// aspect-ratio: 16 / 7;
            height: 40%;
            .contentWrap {
                header {
                   .lookAtMeTitle {
                       max-width: none;
                   } 
                }
            }
		}
	}
</style>