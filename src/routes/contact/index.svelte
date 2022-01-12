<script context="module">
    export const prerender = true;
</script>

<script>
    import Header from '$lib/components/Header.svelte';
    import { slideFadeIn, slideFadeOut } from "$lib/animation/transition-slideFade";
    import ContactSection from "$lib/components/ContactSection.svelte";
</script>

<div class="pageWrap" in:slideFadeIn out:slideFadeOut>
    <Header bgImage="https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg">
        Contact
    </Header>
    <div class="contentWrap">
        
        <div class="content">
            <!-- Donavan - replace the content text in this section with props from a data file. See Trello card -->
            <h2>How can we help?</h2>
            <p class="subtitle h4">
                Contact us
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quisquam repudiandae similique assumenda at. Laudantium, quaerat aliquid distinctio nesciunt, fugiat mollitia commodi, illum rerum veritatis nihil cumque eum hic voluptate!</p>
            <p>Perferendis facere numquam assumenda ipsam, modi, quam eum vel nobis iure fugit blanditiis, autem architecto. Quisquam asperiores consectetur aspernatur, porro perspiciatis quidem! Maiores eligendi ad repellendus quas eius. Dolor, ipsum?</p>
        </div>
        
        <form name="contact" method="POST" netlify>
            <p>
                <label>Your Name & Surname: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Your Cellphone Number: <input type="number" name="number" /></label>
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