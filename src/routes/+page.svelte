<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script> 
    import {aboutMe, professional, randomFactsAboutMe} from '$lib/components/data.js'
	// Define your website's available inner pages
	const pages = ['/about', '/projects'];

	// Initialize the href with a random page choice
	let randomHref = (pages[Math.floor(Math.random() * pages.length)]);

	// Pick a fresh random page so subsequent clicks route elsewhere
	function updateRandomPage() {
		const alternativePages = pages.filter(p => p !== randomHref);
		const randomIndex = Math.floor(Math.random() * alternativePages.length);
		randomHref = alternativePages[randomIndex];
	}
    let text = "> ";
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
        background: linear-gradient(to bottom, #000000 95%, #b6b6b6 100%);
        color: #F6F6F6;

        width: 100%;
        overflow: hidden; /* 👈 change from auto to hidden */
        box-sizing: border-box;
        padding-bottom: 3rem;
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

    .notepad{
        position: relative;
        display: flex;
        flex-direction: column;
        width: clamp(250px, 80vw, 1500px);
        height: clamp(400px, 75dvh, 600px);
        background: #323437;
        border: 1px solid #313131;
        border-radius: 10px;

    }

    .window-bar{
        height: 40px;
        display: flex;
        flex: 0 0 40px;
        align-items: center;
        padding: 0 12px;
        background: linear-gradient(#1b1b1b, #151515);
        backdrop-filter: blur(6px);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 1px solid #2a2a2a;
    }

    .dots{
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .dots span{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
    }

    .red{
        background: #ff5f57;
    }

    .yellow{
        background: #febc2e;
    }

    .green{
        background: #28c840;
    }

    .dots span:hover{
        filter: brightness(1.2);
        transform: scale(1.05);
        cursor: pointer;
    }
    .toast {
        position: fixed;

        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
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

        z-index: 1000;
    }
    .code{
        padding-left: 10px;
        font-size: clamp(10px, 4vw, 60px);
        font-family: Consolas, Monaco, 'Courier New', monospace;
        color: #FFFF00;
    }

    .mainPageButton{
        padding-top: 2rem;
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
</style>
<div class = "bodyPage">
    <header>
        <h1>
            <a href = "/" class = "titleLink">I'm Adam</a>
        </h1>
        <div class = "nav-link-wrapper">
            <a href="/about" class="nav-link">About Me</a>
            <a href="/projects" class="nav-link">Projects</a>
        </div>
    </header>
    <main id="main-content">
        <div class = "notepad">
            <div class="window-bar">
                <div class="dots">
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="red" onclick={setList(1)}></span>
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="yellow" onclick={setList(2)}></span>
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="green" onclick={setList(3)}></span>
                </div>
            </div>

            <p class = "code">{text}<span class = "auto-type"></span></p>
        </div>
        {#if message}
            {#key toastId}
                <div class="toast" in:fly={{ x: 20, duration: 200 }} out:fade={{ duration: 200 }}>
                    {message}
                </div>
            {/key}
        {/if}
        <script src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        <script>
            var typed = new Typed(".auto-type", {
                strings: ["Adam Ho<br>> Aspiring SWE<br>> Math Supplemental Instruction Leader @CSUF"],
                typeSpeed: 20,
                loop: false
            });
        </script>
        <div class = "mainPageButton">
            <a href={randomHref} onclick={updateRandomPage} class = "modernButton">Explore Me!</a>
        </div>

    </main>
    <footer>
        <p class = "footerText">© 2026 FarmerAKH - Made with AWESOMENESS</p>
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