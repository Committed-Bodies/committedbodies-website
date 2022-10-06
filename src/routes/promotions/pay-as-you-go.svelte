<script>
  import PageIntroSection from "$lib/components/PageIntroSection.svelte";
  import membershipPage from "$lib/data/membershipPage.json";
  import Header from "$lib/components/Header.svelte";

  import contactData from '$lib/data/contactPage.json';
  let contacts = contactData.contacts;

  let introData = membershipPage.introPayAsYouGo;
</script>

<div class="pageWrap">
  <Header
    bgImage="/assets/images/PAYG-Timetable-Banner.jpg"
  >
    Pay as you go!
  </Header>

  <div class="contentWrap">
    <div class="text">
        <PageIntroSection {introData} />
        <div class="buttonsWrap">
            <a rel="external" class="button" href="/assets/pdf/Committed-Bodies-pay-as-you-go.pdf">Download a printable timetable</a>
            <a class="button primary" href="tel:{contacts.phone}">Call to book</a>
        </div>
    </div>
  </div>

    

  <div class="timetable">
    <img src="/assets/images/payg-timetable.jpg">
  </div>

</div>

<style lang="scss">
    .contentWrap {
        padding: 3vw 3vw 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text {
        .buttonsWrap {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
            padding: 0 3vw 3vw 3vw;
            .button {
                @include button;
                border: 1px solid hsl(var(--accentHS) var(--accentL));
                color: hsla(var(--onNeutral)/var(--onNeutralStrength2));
                &.primary {
                  @include buttonPrimary;
                }
            }

        }
    }
  .timetable {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    .cta {
        padding: 0 3vw ;
    }
</style>
