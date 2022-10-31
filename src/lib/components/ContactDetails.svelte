<script>
    import contactData from '$lib/data/contactPage.json';
    let contacts = contactData.contacts;
</script>
<ul class="contactDetails">
    <li>
        <a href="tel:{contacts.phone}" class="contacts_phone">
            <i>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#phone"></use>
                </svg>
            </i>
            {contacts.phone}
        </a>
    </li>
    <li>
        <a href="https://wa.me/27798373780" class="contacts_phone">
            <i>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#message"></use>
                </svg>
            </i>
            {contacts.whatsapp} (Whatsapp)
        </a>
    </li>
    <li>
        <a href="mailto:{contacts.email}">
            <i>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#mail"></use>
                </svg>
            </i>
            {contacts.email}
        </a>
    </li>
     <li>
        <a href="mailto:{contacts.email2}">
            <i>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#mail"></use>
                </svg>
            </i>
            {contacts.email2}
        </a>
    </li>
    <li>
        <a href="{contacts.mapLink}">
            <i>
                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <use xlink:href="#map-pin"></use>
                </svg>
            </i>
            {contacts.address}
        </a>
    </li>
</ul>


<style lang="scss">
    ul.contactDetails {
        font-size: inherit;
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: block;
        line-height: 1.5;
        color: currentColor;
        li {
            font-size: inherit;
            color: currentColor;
            display: block;
            &:before {
                display: none;
            }
            a {
                text-decoration: none !important;
                font-size: inherit;
                color: currentColor;
                text-decoration: none;
                display: grid;
                grid-template-columns: auto 1fr;
                transition: all 0.2s ease-in;
                transform-origin: center bottom;
                transform: scale(1);
                line-height: 1.5;
                i {
                    margin-right: 1em;
                    svg {
                        fill: transparent;
                        transition: all 0.2s ease-in;
                    }
                }
            }
            &:hover {
                a {
                    i {
                        svg {
                            fill: currentColor;
                            stroke: hsl(var(--primaryHS) var(--primaryL));
                        }
                    }
                }
            }
        }
    }
</style>