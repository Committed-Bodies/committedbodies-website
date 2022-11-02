<script>
  import PageIntroSection from "$lib/components/PageIntroSection.svelte";
  import promotions from "$lib/data/promotions.json";
  import Header from "$lib/components/Header.svelte";

  import contactData from '$lib/data/contactPage.json';
  let contacts = contactData.contacts;

  let introData = promotions.introPayAsYouGo;
</script>

<div class="pageWrap">
  <Header
    bgImage="/assets/images/PAYG-Timetable-Banner.webp"
  >
    Pay as you go!
  </Header>

  <div class="contentWrap">
    <div class="text">
        <PageIntroSection {introData} />
        <div class="buttonsWrap">
            <a rel="external" class="button" href="/assets/pdf/CBNOV-TIMETABLEFB2.pdf">Download a printable timetable</a>
            <a class="button primary" href="tel:{contacts.phone}">Call to book</a>
        </div>
    </div>
  </div>

    

  <a class="timetable" rel="external" href="/assets/pdf/CBNOV-TIMETABLEFB2.pdf">
    <img src="https://res.cloudinary.com/committed-bodies/image/upload/q_auto/v1667284649/CB_NOV_TIMETABLEFB2_1.webp" alt="timetable">
  </a>

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
</style>
