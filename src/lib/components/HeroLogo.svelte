<script>
  import { onMount } from 'svelte';
  import LadyLogo from "$lib/svg/logo/Lady-LOGO.svelte";

  onMount(() => {
    // INTRODUCE THE HERO LOGO
    gsap.registerPlugin(ScrollTrigger);
	gsap.set("svg *",{transformOrigin:"center center"});
        function initLogo() {
            let tl = gsap.timeline({delay:1, id:"intro"});

            tl.from("#bannerCenter, #bodies",{duration:0.4, autoAlpha:0, scaleX:0});
            tl.fromTo('#committed path', {scaleX:0.2, scaleY:1.8, y:-300, autoAlpha:0}, {duration:1, y:0, scaleX:1, scaleY:1, autoAlpha:1, ease:"bounce.out"},"<")
            tl.from('#man', {duration:1, autoAlpha:0, yPercent:30},"<");
            tl.from('#sphere', {duration:1, scale:0.3, yPercent:20, autoAlpha:0, ease:"expo.out"},"<");
            tl.from('#bannerRight', {duration:0.3, xPercent:-50, yPercent:-10, autoAlpha:0, ease:"expo.out"},"<");
            tl.from('#bannerLeft', {duration:0.3, xPercent:50, yPercent:-10, autoAlpha:0, ease:"expo.out"},"<");
            tl.from("#shield, #kettlebell",{duration:0.6, autoAlpha:0, scale:0, ease:"expo.out"},"<0.3");
            tl.from("#barbell-Left",{duration:0.7, autoAlpha:0, rotate:-20, transformOrigin:"right top", ease:"bounce.out"} ,">");
            tl.from("#barbell-Right",{duration:0.7, autoAlpha:0, rotate:20, transformOrigin:"left top", ease:"bounce.out"} ,"<");
            tl.from('#woman, #woman-dumbbell', {duration:3, yPercent:10, autoAlpha:0, ease:"expo.out"},"<");
            tl.from("#slogan",{duration:0.5, autoAlpha:0, rotate:-60, transformOrigin:"center center", ease:"expo.out"},"<+0.5");
            // GSDevTools.create();

            // SCROLLTRIGGER OUT ANIMATION
            let stl = gsap.timeline({
                scrollTrigger: {
									scroller: "main",
                    trigger: '.hero',
                    // markers:true,
                    scrub: 1,
                    start: "center 49%",
                    end: "bottom top"
                }
            });
            stl.to('#sphere', {duration:4, y:-20},"<");
            stl.to('#man', {duration:4, y:-10},"<");

            stl.to("#cmtd-t1",{duration:1, xPercent:5 },"<");
            stl.to("#cmtd-t2",{duration:1, xPercent:15 },"<");
            stl.to("#cmtd-e",{duration:1, xPercent:20 },"<");
            stl.to("#cmtd-d",{duration:1, xPercent:35 },"<");

            stl.to("#cmtd-m2",{duration:1, xPercent:-5 },"<");
            stl.to("#cmtd-m1",{duration:1, xPercent:-15 },"<");
            stl.to("#cmtd-o",{duration:1, xPercent:-20 },"<");
            stl.to("#cmtd-c",{duration:1, xPercent:-35 },"<");

            stl.to('#woman, #woman-dumbbell', {duration:4, y:10},"<");
            stl.to("#bannerLeft, #bannerRight, #bannerCenter, #bodies",{duration:4, y:20},"<");
            stl.to("#barbell-Left path, #barbell-Right path",{duration:4, y:30},"<");
            stl.to("#kettlebell path",{duration:4, y:40},"<");
            stl.to("#shield",{duration:4, y:40},"<");
        }

		initLogo();
  })
</script>

<section class="hero">
	<LadyLogo></LadyLogo>
</section>

<style lang="scss">
	.hero {
        height: 100%;
        background-image: var(--brandGradient);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2vw 0;
        :global(svg){
            height: 100%;
            width: auto;
            max-width: 100%;
            overflow: visible; /* This prevents clipping when animating the expanding/enlarging */
            box-shadow : 0px -0px 10000px transparent; /*overflow trick for chrome - to do the same as above*/
        }
        @media screen and (min-width: $mdScreen) and (max-width: $xlScreen){
            padding-top: 136px;
        }
    }
</style>