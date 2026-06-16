<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script> 
    import {detailedAbout} from '$lib/components/data.js'


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
        /* Animation */
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s ease-out forwards;
    }

    .aboutElement{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        position: relative;
        width: clamp(250px, 80vw, 1500px);
        min-height: clamp(400px, 75dvh, 600px);
        height: auto;
        flex-wrap: wrap;
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
    }

    .aboutText {
        display: flex;
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
        font-size: clamp(15px, 80vw, 55px);
        padding-left: 10px;
    }

    .listAbout{
        display: flex;
        flex-direction: column;
    }

    .pfp {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 5rem;
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
                    <li class = "listElement">{detailedAbout["generalAbout"]["Hi, my name is Adam"]["hobbies"]}</li>
                    <li class = "listElement">{detailedAbout["generalAbout"]["Hi, my name is Adam"]["games"]}</li>
                </ul>
            </div>
            <img class="pfp" src="/images/aboutImages/pfp.jpg" alt="pfp">
        </div>
    </main>
    <footer>
        <p class = "footerText">© 2026 FarmerAKH - Made with 🔥</p>
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