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
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    // Files "listed" by the terminal's ls command
    const lsFiles = ['Aspiring_SWE', 'Math_SI_Leader'];
    let showOutput = false;

    onMount(() => {
        function initTyped() {
            new Typed('.auto-type', {
                strings: ["ls Adam-Ho"],
                typeSpeed: 70,
                showCursor: false,
                loop: false,
                onComplete: () => {
                    showOutput = true;
                }
            });
        }

        if (window.Typed) {
            initTyped();
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
            script.onload = initTyped;
            document.body.appendChild(script);
        }
    });

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
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom, #000000 95%, #b6b6b6 100%);
        color: #F6F6F6;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 3rem;
    }

    :global(html, body, #svelte) {
        height: 100%;
    }

    :global(body) {
        margin: 0;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .notepad{
        position: relative;
        display: flex;
        flex-direction: column;
        width: min(460px, 90vw);
        height: 580px;
        background: #16181a;
        border: 1px solid #313131;
        border-radius: 10px;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
        overflow: hidden;
    }

    .window-bar{
        position: relative;
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

    .window-title{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        font-family: Consolas, Monaco, 'Courier New', monospace;
        font-size: 13px;
        color: #8a8f94;
        user-select: none;
        transition: color 0.55s;
    }

    .window-title:hover{
        color: #ffffff;
    }

    .terminal-body{
        flex: 1;
        padding: 14px 16px;
        overflow-y: auto;
        font-family: Consolas, Monaco, 'Courier New', monospace;
        font-size: 15px;
        line-height: 1.6;
        color: #e6e6e6;
        text-align: left;
        user-select: none;
        -webkit-user-select: none;
    }

    .terminal-body .line{
        margin: 0;
        word-break: break-word;
    }

    .prompt-user{
        color: #4ade80;
        font-weight: bold;
    }

    .prompt-path{
        color: #60a5fa;
        font-weight: bold;
    }

    .prompt-sep{
        color: #e6e6e6;
    }

    .command{
        color: #e6e6e6;
    }

    .cursor{
        display: inline-block;
        width: 9px;
        height: 1em;
        margin-left: 2px;
        vertical-align: text-bottom;
        background: #e6e6e6;
        animation: blink 1s steps(1) infinite;
    }

    @keyframes blink{
        50% { opacity: 0; }
    }

    .ls-output{
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 4px 20px;
        margin: 2px 0 6px;
    }

    .ls-entry{
        color: #60a5fa;
        font-weight: bold;
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

    .mainPageButton{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding-top: 2rem;
    }

    .modernButton {
        position: static;
        left: auto;
        display: inline-flex;
        align-items: center;
        color: rgb(34, 34, 34);
        font-size: 18px;
        text-decoration: none;
        background-color: #b6b6b6;
        transition: background-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
        border-radius: 10px;
        padding: 10px;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
    }

    .modernButton:hover{
        background-color: rgb(235, 235, 235);
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
    }

    .modernButton:active{
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        transition-duration: 0.1s;
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

    .introGrid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 580px;
    }

    .introductions{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.75rem;
        padding: 0 2rem;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        text-align: left;
    }

    .introTitle{
        margin: 0;
        font-size: clamp(2.5rem, 5vw, 4.5rem);
        font-weight: bold;
        line-height: 1.05;
        letter-spacing: -0.03em;
        color: #ffffff;
    }

    .introSubtitle{
        margin: 0;
        font-size: clamp(1.1rem, 2vw, 1.6rem);
        font-weight: 400;
        color: #b6b6b6;
    }

    .introSummary{
        margin: 0.5rem 0 0;
        max-width: 42ch;
        font-size: clamp(0.95rem, 1.1vw, 1.05rem);
        line-height: 1.65;
        color: rgba(255, 255, 255, 0.6);
    }

    @media (max-width: 979px){
        .introGrid{
            grid-template-columns: 1fr;
            height: auto;
            gap: 2rem;
            justify-items: center;
            margin-bottom: 20px;
        }

        .introductions{
            padding: 0 1.5rem;
            text-align: center;
            align-items: center;
        }

        .mainPageButton{
            justify-content: center;
        }
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
        <div class = "introGrid">
            <div class = "notepad">
                <div class="window-bar">
                    <div class="dots">
                        <span class="red"></span>
                        <span class="yellow"></span>
                        <span class="green"></span>
                    </div>
                    <span class="window-title">adam@portfolio: ~</span>
                </div>

                <div class="terminal-body">
                    <p class="line">
                        <span class="prompt-user">adam@portfolio</span><span class="prompt-sep">:</span><span class="prompt-path">~</span><span class="prompt-sep">$</span>
                        <span class="command auto-type"></span>{#if !showOutput}<span class="cursor"></span>{/if}
                    </p>

                    {#if showOutput}
                        <div class="ls-output" in:fade={{ duration: 150 }}>
                            {#each lsFiles as file}
                                <span class="ls-entry">{file}</span>
                            {/each}
                        </div>
                        <p class="line" in:fade={{ duration: 150 }}>
                            <span class="prompt-user">adam@portfolio</span><span class="prompt-sep">:</span><span class="prompt-path">~</span><span class="prompt-sep">$</span>
                            <span class="cursor"></span>
                        </p>
                    {/if}
                </div>
            </div>
            <div class = "introductions">
                <p class = "introTitle">I'm Adam</p>
                <p class = "introSubtitle">Welcome to my portfolio!</p>
                <p class = "introSummary">I am an aspiring full stack engineer who loves to learn new technologies through AI tools and projects! Based in Fullerton, CA.</p>
                <div class = "mainPageButton">
                    <a href={randomHref} onclick={updateRandomPage} class = "modernButton">Explore Me!</a>
                    <a href= "/v1" class = "modernButton">v1</a>
                </div>
            </div>
        </div>


    </main>
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