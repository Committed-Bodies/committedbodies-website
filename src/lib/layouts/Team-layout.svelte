<script>
    import Header from '$lib/components/Header.svelte';
    export let thumbnail;
    export let fullName;
    // export let title;
    export let blurb;
    export let specialisations;
</script>

<div class="pageWrap">
        <Header customClass="featuredImage" featuredImage={thumbnail} bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
            {fullName}
        </Header>

        <div class="postWrap contentTypography">
            <span class="blurb">{blurb}</span>
            <div class="meta">
                {#each specialisations as specialisation}
                    <span>{specialisation}</span>
                {/each}
            </div>
            <div class="content">
                <slot />
            </div>
        </div>
</div>

<style>
    .pageWrap .blurb {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        position: relative;
    }
    .pageWrap .blurb:before {
        content: '"';
        font-size: 5em;
        line-height: 1;
        position: absolute;
        left: -0.4em;
        top: -0.2em;
        color: hsl(var(--primaryHS) var(--primaryL));
    }
    .pageWrap .blurb:after {
        content: '"';
        font-size: 5em;
        line-height: 1;
        position: absolute;
        right: -0.4em;
        top: -0.2em;
        color: hsl(var(--primaryHS) var(--primaryL));
    }
    .pageWrap .postWrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 4vw;
        max-width: 900px;
        margin: 0 auto;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
    }
    .pageWrap .postWrap .meta {
        text-align: center;
        font-size: 0.9rem;
        color: hsl(var(--onNeutral) / var(--onNeutralStrength-1));
        margin-bottom: 3rem;
    }
    .pageWrap .postWrap .meta span {
        background-color: hsl(var(--neutralHS) calc(var(--neutralL) - 15%));
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        padding: 3px 6px;
        border-radius: 3px;
        margin: 0 5px;
        font-weight: 500;
    }
</style>