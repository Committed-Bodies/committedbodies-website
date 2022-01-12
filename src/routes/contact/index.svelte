<script context="module">
    export const prerender = true;
</script>

<script>
    //Donavan
    import contactPage from '$lib/data/contactPage.json' 
    //Donavan
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import ContactSection from "$lib/components/ContactSection.svelte";

    //Donavan
    let intro = contactPage.intro;
    //Donavan
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Contact
    </Header>
    <div class="contentWrap">
        
        <div class="content">
            <!-- Donavan - replace the content text in this section with props from a data file. See Trello card -->
            <ContactSection {intro} ></ContactSection> 
        </div>
        
        <form name="contact" method="POST" netlify>
            <p>
                <label>Your Name & Surname: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Cellphone Number: <input type="integer" name="integer`" /></label>
            </p>
            <p>
                <label>What are your fitness goals: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
        <ContactSection />
    </div>
</div>

<style lang="scss">
    .contentWrap {
        padding: 2rem;
        background-color: hsl(var(--neutralHS) var(--neutralL));
        color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
        .content {
            color: hsl(var(--onNeutral) / var(--onNeutralStrength0));
            // h2 {
            //     margin-top: 0;
			// 	font-family: $font_boldEmphasis;
			// 	line-height: 1;
			// 	color: hsl(var(--onNeutral) / var(--onNeutralStrength3));
			// }
			// .subtitle {
			// 	font-family: $font_cursiveEmphasis;
			// 	margin-top: 1em;
			// 	color: hsl(var(--onNeutral) / var(--onNeutralStrength1));
			// }
        }
        form {
            margin-top: $space4;
            background-color: #ffffff;
            padding: $space3;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
        }
    }
</style>