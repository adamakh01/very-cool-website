<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script> 
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
    
    const personMe = [
        'I am a Computer Science Major!',
        'I am currently learning Flutter!',
        'I want get into more backend development.', 
        'I was an Open Source ACM Board member!',
        'I was a project lead for Open Source Stats!',
        'I have previously assisted students in Business Calculus and Calc II.',
        'I have been doing supplemental instruction for 2 semesters!',
        'I love my friends! I enjoy spending time with them.',
        'Originally an Oregonian!',
        'Previous VALORANT Addict',
        'Thank you for exploring my portfolio! :D']

    function showMessage(text) {
        clearTimeout(timeoutId);
        let randomIndex = Math.floor(Math.random() * personMe.length);
        let randomMessage = personMe[randomIndex];
        message = randomMessage;
        toastId += 1;

        timeoutId = setTimeout(() => {
            message = '';
        }, 2000);
    }
</script>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
<style>
    .bodyPage {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        width:100vw;
        max-width: 100vw;
        height:6rem;
        background:#000000;
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
        text-decoration: none;
        transition:background-color 0.55s;
        padding: 10px;
        border-radius: 10px;
    }
    a.nav-link:hover{
        background-color:#3d3d3d;
    }
    .nav-link-wrapper{
        padding-right: 10px;
    }

    .titleLink {
        left:10px;
        position:relative;
        margin:0;
        color:#ffffff;
        font-family: 'Space Grotesk', sans-serif;
        letter-spacing: -0.02em;
        font-weight:bold;
        font-size:50px;
    }

    main#main-content {
        flex: 1;
        margin-top: 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to bottom, #000000 95%, #b6b6b6 100%);
        color: #F6F6F6;
        height: 85vw;
        width: 100vw;
        overflow-y: auto;
    }

    .notepad{
        position: relative;
        display: flex;
        flex-direction: column;
        width: clamp(400px, 80vw, 1500px);
        height: clamp(150px, 100vh, 700px);
        background: #323437;
        border: 1px solid #313131;
        border-radius: 16px;

    }

    .window-bar{
        height: 40px;
        display: flex;
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

        /* adjust to sit below your header */
        top: 120px;
        right: 20px;

        padding: 12px 16px;
        border-radius: 8px;

        background: #222;
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
        padding-top: 2.5rem;
    }

    .modernButton {
        color: rgb(34, 34, 34);
        font-size: 18px;
        text-decoration: none;
        background-color: #b6b6b6;
        transition:background-color 0.55s;
        border-radius: 10px;
        padding: 10px;
    }

    .modernButton:hover{
        background-color: rgb(235, 235, 235);
    }

    footer {
        background: #b6b6b6;
        color: white;
        text-align: center;
        padding: 1rem;
    }

</style>
<div class = "bodyPage">
    <header>
        <h1>
            <a href = "/" class = "titleLink">Adam Ho</a>
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
                    <span class="red" onclick={showMessage('hi')}></span>
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="yellow" onclick={showMessage('Minimize clicked')}></span>
                    <!-- svelte-ignore a11y_click_events_have_key_events -->
                    <!-- svelte-ignore a11y_no_static_element_interactions -->
                    <span class="green" onclick={showMessage('Maximize clicked')}></span>
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
        <p>2026 FarmerAKH</p>
    </footer>
</div>