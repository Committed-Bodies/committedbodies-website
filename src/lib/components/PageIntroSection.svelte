<script>
    // Intro section content passed in from parent
    export let introData;
</script>

<section  class="content">
    <h2>{introData.title}</h2>
    <p class="subtitle h4">
        {introData.subtitle}
    </p>
    <p>
        {introData.content}
    </p>
</section>

<style lang="scss">
    section {
        padding: 3vw;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        h2 {
            margin-top: 0;
            font-family: $font_boldEmphasis;
            line-height: 1;
            color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
        }
        .subtitle {
            font-family: $font_cursiveEmphasis;
            margin-top: 1em;
            color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
        }
    }
</style>