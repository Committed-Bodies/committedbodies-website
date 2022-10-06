<script>
  import { browser } from '$app/env';
  export let theme = 'light';
  
  function classToggle() {
    var htmlTag = document.querySelector("html");
    console.log('New theme is ', theme);
    if (htmlTag) {
      var currentTheme = htmlTag.classList[0];
      htmlTag.classList.toggle(currentTheme);
      htmlTag.classList.toggle(theme);
    }
  }
  $: if (browser) theme && classToggle(theme);
</script>

<div class="themeSwitcher {theme}">
  <label class="darkRadio">
    <input type=radio bind:group={theme} name="theme" value={"dark"}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        <use xlink:href="#moon"></use>
    </svg>
  </label>
  
  <label class="lightRadio">
    <input type=radio bind:group={theme} name="theme" value={"light"}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
      <use xlink:href="#sun"></use>
    </svg>
  </label>
</div>

<style lang="scss">
  // Not mobile first - see responsive for mobile exception
  .themeSwitcher {
    position: relative;
    display: flex;
    border-radius: 30px;
    border: 1px solid currentColor;
    overflow: hidden;
    display: flex;
    label {
      padding: 5px;
      flex:1;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      input{
        display: none;
      }
      &.darkRadio {
        color: currentColor;
      }
      &.lightRadio {
        color: currentColor;
      }
    }
    &.dark {
      .darkRadio {
        background-color: white;
        color: black;
      }
    }
    &.light {
      .lightRadio {
        background-color: black;
        color: white;
      }
    }
  }

  // RESPONSIVE
  // Mobile devices
  @media screen and (max-width: ($mdScreen - 1) ) {
    .themeSwitcher {
      border: none;
      height: 100%;
      label {
        padding: 0;
        height: 100%;
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg {
          width: 24px;
          height: 24px;
          margin: 4px 0;
        }
        &:after {
          content: "theme";
          font-size: var(--fontSizeSm);
          padding-bottom: 3px;;
        }
      }
      &.dark {
        label {
          &.lightRadio {
            background-color: transparent;
            color: inherit;
          }
          &.darkRadio {
            display: none;
          }
        }
      }
      &.light {
        background-color: transparent;
        label {
          &.darkRadio {
            background-color: transparent;
            color: inherit;
          }
          &.lightRadio {
            display: none;
          }
        }
      }
    }
  }
</style>