<script>
	import PageIntroSection from '$lib/components/PageIntroSection.svelte';
    import membershipPage from "$lib/data/membershipPage.json";
    import Header from '$lib/components/Header.svelte';
    let introData = membershipPage.introDownload;
    let content = membershipPage.contentDownload;
</script>

<div class="pageWrap">
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto/v1631431623/action%20photos/Gym-in-Benoni_m5uh6j.jpg">
        Download The App
    </Header>
    
    <div class="contentWrap">

            <div class="text">
                <PageIntroSection {introData} />
                <div class="buttonsWrap">
                    <a class="button" href="https://apps.apple.com/gb/app/clublink/id1476551554">Download on the App store</a>
                    <a class="button" href="https://play.google.com/store/apps/details?id=com.clubmanagercentral.myclub">Get it on google play</a>
                </div>
            </div>

            <div class="image">
                <img src="/assets/images/phone-clubLink-committed-bodies.png" alt="Pic">
            </div>            
        </div>
</div>

<style lang="scss">
    .contentWrap {
        padding: 3vw 3vw 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        .text {
            .buttonsWrap {
                padding-left: 3vw;
                .button {
                    @include button;
                    @include buttonPrimary;
                }
            }
        }
    }
</style>