<script>
    import Header from '$lib/components/Header.svelte';
    import membershipPage from "$lib/data/membershipPage.json";
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Download The App
    </Header>
    
    <div class="contentWrap">  
        <div class="content">
            <h2>
                {membershipPage.introDownload.title}
            </h2>
            <p class="subtitle h4">
                {membershipPage.introDownload.subtitle}
            </p>
            <p>
                {membershipPage.introDownload.content}
            </p>
            <a href="https://apps.apple.com/gb/app/clublink/id1476551554" class="sc_button sc_button_default sc_button_size_small sc_button_with_icon sc_button_icon_left" target="_blank"><span class="sc_button_icon"><span class="icon-08-apple"></span></span><span class="sc_button_text"><span class="sc_button_subtitle">Download on the</span><span class="sc_button_title">App store</span></span><!-- /.sc_button_text --></a>
            <a href="https://play.google.com/store/apps/details?id=com.clubmanagercentral.myclub" class="sc_button sc_button_default sc_button_size_small sc_button_with_icon sc_button_icon_left color_style_link2" target="_blank"><span class="sc_button_icon"><span class="icon-09-google-play"></span></span><span class="sc_button_text"><span class="sc_button_subtitle">Get it on</span><span class="sc_button_title">google play</span></span><!-- /.sc_button_text --></a>
            <img src="static/assets/images/phone-clubLink-committed-bodies.png" alt="Pic">
        </div>
    </div>
</div>