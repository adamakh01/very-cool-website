<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script> 
    import {aboutMe, professional, randomFactsAboutMe, detailedAbout} from '$lib/components/data.js'
    import { fade, fly } from 'svelte/transition';

    let message = '';
    let toastId = 0;
    let timeoutId;
    
    function showMessage() {
        clearTimeout(timeoutId);
        let randomIndex = Math.floor(Math.random() * list.length);
        let randomMessage = list[randomIndex];
        message = randomMessage;
        toastId += 1;

        timeoutId = setTimeout(() => {
            message = '';
        }, 2000);
    }

    let list = [];
    function setList(num) {
        if (num == 1) {
            list = aboutMe;
        } else if (num == 2) {
            list = professional;
        } else if (num == 3) {
            list = randomFactsAboutMe;
        }
        showMessage();
    }
</script>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
<style>
    .bodyPage {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        box-sizing: border-box;
        background-color: black;
    }
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        width:100%;
        max-width: 100%;
        height:6rem;
        background: rgba(8, 9, 10, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);

        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        align-items: center;
        z-index:10;
        gap: 1.2rem;
        overflow:hidden;
        padding-right:0.8rem;
        box-sizing:border-box;
    }
    a{
        left: 10px;
        position:relative;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color:rgba(255, 255, 255, 0.685);
        font-size: 20px;
        transition: color 0.55s;
    }
    a.nav-link{
        color: rgb(129, 129, 129);
        font-size: 18px;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        text-decoration: none;
        transition:background-color 0.55s;
        padding: 10px;
        border-radius: 10px;
        white-space: nowrap;
    }
    a.nav-link:hover{
        background-color:#3d3d3d;
    }
    .nav-link-wrapper{
        padding-right: 10px;
    }

    .titleLink {
        padding-left: 10px;
        left:10px;
        position:relative;
        margin:0;
        color:#ffffff;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        font-weight:bold;
        font-size: clamp(5px, 6vw, 50px);
        white-space: nowrap; 
    }

    main#main-content {
        flex: 1;
        margin-top: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to bottom, #000000 calc(100% - 40px), #b6b6b6 100%);
        color: #F6F6F6;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 3rem;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s ease-out forwards;
    }
    /* Experience blocks: desktop is the base, mobile overrides are grouped in
       the single media query at the bottom of this file */
    .aboutElement{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: clamp(250px, 80vw, 1500px);
        min-height: clamp(400px, 75dvh, 550px);
        height: auto;
        flex-wrap: wrap;
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
    }

    .professionalElement{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
        width: clamp(250px, 80vw, 1500px);
        min-height: clamp(200px, 75dvh, 300px);
        height: auto;
        flex-wrap: wrap;
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 0.5rem;
        transition: transform 0.3s ease;
    }

    .professionalElement:hover{
        transform: scale(1.025);
    }

    /* was an inline style repeated in both experience loops */
    .experienceMedia{
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        margin-top: 2.5rem;
    }

    .experienceButton{
        padding-top: 5rem;
        padding-bottom: 20px;
        margin-right: 1.5rem;
    }

    .aboutText {
        display: flex;
        font-family: 'Space Grotesk', sans-serif;
        flex-direction: column;
        gap: 0.5rem;
        margin-left: 3.5rem;
        flex: 1;
    }

    .titleElement{
        display: flex;
        flex-direction: column;
        margin-top: 35px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(35px, 80vw, 55px);
        padding-left: 10px;
    }

    .subTitleElement{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(25px, 3vw, 35px);
        padding-left: 10px;
    }

    .subsubTitleElement{
        margin-top: 35px;
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(15px, 80vw, 25px);
        font-weight: bold;
    }

    .listAbout{
        display: flex;
        flex-direction: column;
    }

    .modernButton {
        color: rgb(34, 34, 34);
        font-size: 18px;
        text-decoration: none;
        background-color: #b6b6b6;
        transition:background-color 0.55s;
        border-radius: 10px;
        padding: 10px;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
    }

    .modernButton:hover{
        background-color: rgb(235, 235, 235);
    }

    .toast {
        position: fixed;
        top: 120px;
        right: 20px;

        padding: 12px 16px;
        border-radius: 8px;

        background: rgba(8, 9, 10, 0.7);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);

        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        color: white;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.02em;

        z-index: 1000;
    }

    .factButtons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        padding: 0 1rem;
    }

    .factButton {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;

        width: 60px;
        padding: 1.1rem 0.75rem;
        border: none;
        border-radius: 14px;
        cursor: pointer;

        color: rgb(34, 34, 34);
        background-color: #b6b6b6;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        font-size: 16px;

        transition: background-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
    }

    .factButton svg {
        width: 30px;
        height: 30px;
    }

    .factButton:hover {
        background-color: rgb(235, 235, 235);
        transform: translateY(-3px);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
    }

    .factButton:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
        transition-duration: 0.1s;
    }

    .pfp {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
        margin-left: 2rem;
        margin-right: 5rem;
    }

    .experienceImage {
        margin-left: 0;
        margin-right: 0;
    }

    @media screen and (max-width: 866px) {
        .aboutElement,
        .professionalElement {
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            width: 100%;
            min-height: auto;
            padding: 1rem 1.25rem;
            box-sizing: border-box;
        }

        /* scaling up overflows the viewport on a full-width card */
        .professionalElement:hover {
            transform: none;
        }

        .infoContainer {
            align-items: stretch;
            width: 100%;
            box-sizing: border-box;
            padding: 0 1.25rem 3rem;
        }

        .aboutText {
            margin-left: 0;
            width: 100%;
        }

        .titleElement,
        .subsubTitleElement {
            padding-left: 0;
            margin-top: 20px;
        }

        .subTitleElement {
            align-items: flex-start;
            padding-left: 0;
            margin-top: 60px;
        }

        /* default ul indent is 40px - pull the bullets back toward the edge */
        .listAbout {
            padding-left: 1.1rem;
            margin: 0;
        }

        /* full width so the logo and button center against the whole card,
           not just their own content box */
        .experienceMedia {
            align-items: center;
            width: 100%;
            margin-top: 1.5rem;
        }

        .experienceButton {
            padding-top: 1.5rem;
            padding-bottom: 0;
            margin-right: 0;
        }

        .experienceButton .modernButton {
            left: 0;
        }

        .pfp {
            width: clamp(140px, 45vw, 200px);
            height: clamp(140px, 45vw, 200px);
            margin-left: 0;
            margin-right: 0;
        }

        .factButtons {
            justify-content: flex-start;
            padding: 0 1.25rem;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    :global(html, body, #svelte) {
        height: 100%;
    }

    :global(body) {
        margin: 0;
        overflow-x: hidden;
        /* let the body scroll vertically if needed */
        overflow-y: auto;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #b6b6b6;
        color: white;
        text-align: center;
        padding: 0.5rem;
    }

    .footerText {
        color: black;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        font-size: 13px;
    }
    .socialLink{
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        color: black;
        font-size: 13px;
        transition:color 0.55s;
        margin-right: 10px;
    }
    .socialLink:hover{
        color: gray;
    }

    .overview {
        font-size: 20px;
    }

    .listElement {
        padding-bottom: 1rem;
    }
    .horizontal-line {
        border: none;
        height: 2px;
        background-color: #333;
        width: 100%;  
    }

    .infoContainer {
        display: flex;
        flex-direction: column;
        position: relative;
        align-content: center;
        align-items: center;
        padding-bottom: 5rem;
    }

    .techLogos {
        overflow: hidden;
        width: 100%;
        padding: 20px 0;
        white-space: nowrap;
        margin-bottom: 100px;
    }

    .scroll-track {
        display: flex;
        width: max-content;
        animation: scroll 20s linear infinite;
    }

    .scroll-track:hover {
        animation-play-state: paused;
    }

    .scroll-track img {
        height: clamp(100px, 2vh, 200px);
        width: auto;
        margin: 0 15px;
        border-radius: 8px;
        object-fit: cover;
        padding-right: 10px;
    }

    @keyframes scroll {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
    }
</style>
<div class = "bodyPage">
    <header>
        <h1>
            <a href = "/" class = "titleLink">I'm Adam</a>
        </h1>
        <div class = "nav-link-wrapper">
            <a href="/about" class="nav-link" style = "color:rgb(184, 184, 184);">About Me</a>
            <a href="/projects" class="nav-link">Projects</a>
        </div>
    </header>
    <main id="main-content">
        <div class = "aboutElement">
            <div class = "aboutText">
                <p class = "titleElement">{Object.keys(detailedAbout["generalAbout"])}</p>
                <ul class = "listAbout">
                    <li class = "listElement">{detailedAbout["generalAbout"]["Hi, my name is Adam"]["year"]}</li>
                    <li class = "listElement">Hobbies: {detailedAbout["generalAbout"]["Hi, my name is Adam"]["hobbies"]}</li>
                    <li class = "listElement">Games I love: {detailedAbout["generalAbout"]["Hi, my name is Adam"]["games"]}</li>
                </ul>
            </div>
            <img class="pfp" src="/images/aboutImages/pfp.jpg" alt="pfp">
        </div>
        <div class = "infoContainer">
            <p class = "subTitleElement">Professional Experience</p>
            <hr class="horizontal-line">
            {#each detailedAbout["professionally"] as item}
                <div class="professionalElement" style="border-color: {item.color}">
                    <div class = "aboutText">
                        <p class = "subsubTitleElement">{item.title}</p>
                        <p class = "overview">Overview: {item.overview}</p>
                        <p>{item.active}</p>
                        <ul class = "listAbout">
                            {#each item.bulletPoints as point}
                                <li class = "listElement">{point}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class = "experienceMedia">
                        <img class="pfp experienceImage" src={item.image} alt="pfp">
                        <div class = "experienceButton">
                            <a href={item.link} class = "modernButton">Learn more!</a>
                        </div>
                    </div>
                </div>
            {/each}
            <p class = "subTitleElement" style = "margin-top: 100px">Community</p>
            <hr class="horizontal-line">
            {#each detailedAbout["community"] as item}
                <div class="professionalElement" style="border-color: {item.color}">
                    <div class = "aboutText">
                        <p class = "subsubTitleElement">{item.title}</p>
                        <p class = "overview">Overview: {item.overview}</p>
                        <p>{item.active}</p>
                        <ul class = "listAbout">
                            {#each item.bulletPoints as point}
                                <li class = "listElement">{point}</li>
                            {/each}
                        </ul>
                    </div>
                    <div class = "experienceMedia">
                        <img class="pfp experienceImage" src={item.image} alt="pfp">
                        <div class = "experienceButton">
                            <a href={item.link} class = "modernButton">Learn more!</a>
                        </div>
                    </div>
                </div>
            {/each}
            <p class = "subTitleElement" style = "margin-top: 100px">Technologies!</p>
            <div class="techLogos">
                <div class = "scroll-track">
                    {#each detailedAbout["techStack"] as image}
                        <img src = {image.image} alt = {image.alt}>
                    {/each}
                </div>
            </div>
            <div class = "factButtons">
                <button class = "factButton" onclick={() => setList(1)} aria-label="Show a random fact about me">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="8" r="4"/>
                        <path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>
                    </svg>
                </button>

                <button class = "factButton" onclick={() => setList(2)} aria-label="Show a random professional fact">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="2.5" y="7" width="19" height="13" rx="2"/>
                        <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7"/>
                        <path d="M2.5 12h19"/>
                    </svg>
                </button>

                <button class = "factButton" onclick={() => setList(3)} aria-label="Show a random fun fact">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M3 12h18"/>
                        <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z"/>
                    </svg>
                </button>
            </div>
        </div>
    </main>
    {#if message}
        {#key toastId}
            <div class="toast" in:fly={{ x: 20, duration: 200 }} out:fade={{ duration: 200 }}>
                {message}
            </div>
        {/key}
    {/if}
    <footer>
        <p class = "footerText">© 2026 FarmerAKH - Made with ✨</p>
        <div class = "social-wrapper">
            <a href="https://www.linkedin.com/in/adam-ho-a65786202" class="socialLink" target="_blank">
                LinkedIn
            </a>
            <a href="https://github.com/adamakh01" class="socialLink" target="_blank">
                GitHub
            </a>
        </div>
    </footer>
</div>