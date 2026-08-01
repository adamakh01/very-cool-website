<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script> 
    import {detailedAbout} from '$lib/components/data.js'
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
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 3rem;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.6s ease-out forwards;
    }
    @media screen and (min-width: 867px) {
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
    }

    @media screen and (max-width: 866px) {
        .aboutElement{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            position: relative;
            width: clamp(8vw, 1000px);
            min-height: clamp(400px, 75dvh, 550px);
            height: auto;
            flex-wrap: wrap;
            font-family: Arial, Helvetica, sans-serif;
            padding: 1rem;
        }
    }

    @media screen and (min-width: 675px) {
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
            transition: all 0.3s ease; 
        }
    }
    @media screen and (max-width: 674px) {
        .professionalElement{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            width: clamp(250px, 80vw, 1500px);
            min-height: clamp(200px, 75dvh, 300px);
            height: auto;
            flex-wrap: wrap;
            font-family: Arial, Helvetica, sans-serif;
            padding-top: 0.5rem;
            transition: all 0.3s ease; 
        }
    }
    .professionalElement:hover{
        transform: scale(1.05); 
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
        font-size: clamp(15px, 80vw, 35px);
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

    .pfp {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 50%;
        margin-left: 2rem;
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
        margin-bottom: 250px;
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
                    <div style = "display: flex; position: relative; align-items: center; flex-direction: column; margin-top: 2.5rem;">
                        <img class="pfp" style= "margin-left: 0px; margin-right: 0px" src={item.image} alt="pfp">
                        <div class = "mainPageButton" style = "padding-top: 5rem; padding-bottom: 20px; margin-right: 1.5rem; ">
                            <a href={item.link} onclick={item} class = "modernButton">Learn more!</a>
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
                    <div style = "display: flex; position: relative; align-items: center; flex-direction: column; margin-top: 2.5rem;">
                        <img class="pfp" style= "margin-left: 0px; margin-right: 0px" src={item.image} alt="pfp">
                        <div class = "mainPageButton" style = "padding-top: 5rem; padding-bottom: 20px; margin-right: 1.5rem; ">
                            <a href={item.link} onclick={item} class = "modernButton">Learn more!</a>
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