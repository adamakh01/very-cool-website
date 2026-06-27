<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script> 
    import {projects} from '$lib/components/data.js'
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

    @media screen and (min-width: 1297px) {
        .projectContainer {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-top:10px;
            gap: 20px;
            padding-bottom: 5rem;
        }
    }

    @media screen and (max-width: 1296px) {
        .projectContainer {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-top:10px;
            gap: 20px;
            padding-bottom: 5rem;
        }
    }


    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #11111157;
        height: 35rem;
        width: 25rem;
        transition: transform 0.3s ease, border-color 0.3s ease-in-out; 
        border: 2px solid black;
        border-radius: 10px;
    }


    .project:hover {
        transform: translateY(-10px); 
        border-color: rgb(49, 49, 49);
    }

    .projectTitle {
        font-family: 'Space Grotesk', sans-serif;
        font-size: clamp(15px, 70vw, 35px);
    }

    @media screen and (max-width: 875px) {
        .projectContainer {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            margin-top:10px;
            gap: 20px;
            padding-bottom: 5rem;
        }
        .project {
            display:flex;
            width: 22rem;
        }
        .projectTitle{
            font-size: 30px;
        }

    }

    .description {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 16px;
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
            <a href="/about" class="nav-link">About Me</a>
            <a href="/projects" class="nav-link" style = "color:rgb(184, 184, 184);">Projects</a>
        </div>
    </header>
    <main id="main-content">
        <div class = "projectContainer">
            {#each projects as item}
                <div class = "project">
                    <h1 class = "projectTitle">{item.title}</h1>
                    <p class = "description" style = "min-height: 225px; max-height: 225px; max-width: 300px">{item.description}</p>
                    <div class = "techStack" style = "display: flex; flex-wrap: wrap; align-content: flex-start; column-gap: 10px; min-height: 125px; max-width: 300px; user-select: none; ">
                        {#each item.techStack as tech}
                            <p class = "techStackText" style = "background-color: black; border: 1.5px solid gray; padding: 2.5px; text-align: center; font-family: 'Space Grotesk', sans-serif; font-size: 13px; border-radius: 5px">{tech}</p>
                        {/each}
                    </div>
                    <a href={item.githubLink} onclick={item} class = "modernButton" style = "margin-right:4%;">{item.githubLink.length === 0 ? 'GitHub not available.' : 'GitHub Repo'}</a>
                </div>
            {/each}
        </div>
    </main>
    <footer>
        <p class = "footerText">© 2026 FarmerAKH - Made with ✨</p>
        <div class = "social-wrapper">
            <a href="https://www.linkedin.com/in/adam-ho-a65786202" class="socialLink" target="_blank">
                LinkedIn
            </a>
            <a href="https://github.com/FarmerAKH" class="socialLink" target="_blank">
                GitHub
            </a>
        </div>
    </footer>
</div>