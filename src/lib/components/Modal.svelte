<script>
	import navigationStore from '$lib/stores/navigationStore';
    console.log(navigationStore);
</script>
<div class="overlay">
    <div class="modalWrap">
        <slot></slot>
    </div>
</div>



<style lang="scss">
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
        display: none;
        .modalWrap {
            position: relative;
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            background: hsl(var(--accentAltHS) var(--accentAltL));
            color: hsl(var(--onAccentAlt) / var(--onAccentAltStrength2));
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>