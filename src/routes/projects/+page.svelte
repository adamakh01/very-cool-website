<script>
</script>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
<style>
    header{
        position:fixed;
        top:0;
        width:100vw;
        max-width: 100vw;
        height:6rem;
        background:#223A70;
        display:flex;
        align-items: center;
        z-index:10;
        gap: 1.2rem;
        overflow:hidden;
        padding-right:0.8rem;
        box-sizing:border-box;
    }
    h1{
        background-color:#445b94;
        border-radius: 10px;
        left:15px;
        position:relative;
        margin:0;
        padding:0;
        color:#a8a9ad;
        font-family: 'Roboto', sans-serif;
        font-weight:bold;
        font-size:50px;
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
        text-decoration: none;
        transition:color 0.55s;
    }
    a.nav-link:hover{
        color:#F6F6F6;
        text-decoration:underline;
        text-decoration-color:#F6F6F6;
    }
    .activeLink{
        left: 10px;
        position:relative;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        color:rgba(255, 255, 255, 0.685);
        font-size: 20px;
        transition: color 0.55s;
    }
    .nav-image {
        position: relative;
        left:65%;
        margin-left:2px;
        display:block;
        position:relative;
        gap:0.5rem;
    }
    main#main-content {
        display: contents;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 0;
        background: #526fb1;
        color: #F6F6F6;
        position: fixed;
        width: 100vw;
        top: 6rem;
        left: 0;
    }
    .projectFrame {
        display:flex;
        flex-direction:column;
        justify-content: center;
        position:relative;
        left:35%;
        top:7rem;
        box-sizing: border-box;
        width:500px;
        height:450px;
        margin-top: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        background-color:#445b94;
        border-radius:2rem;
        text-align:center;
        padding: 1rem;
    }
    .projectDescription {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        line-height: 1.5;
        color: #F6F6F6;
    }
    .projectTitle {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 30px;
        font-weight: bold;
        color: #d1d3d8;
        text-decoration: none;
        transition:color 0.3s;
    }
    .projectTitle:hover {
        color: #F6F6F6;
        text-decoration: underline;
        text-decoration-color: #F6F6F6;
    }
    .projectImage{
        margin-top: 0.5rem;
    }
    .projectDescription{
        margin-top:3rem;
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <a href="/" class = "nav-link">Home</a>
    <a href = "/about" class = "nav-link">About Me</a>
    <h2 class = "activeLink">Projects</h2>
            <a href="https://www.instagram.com/farmerakh/" class="nav-image" target="_blank">
        <img src="/images/linkImages/instagram-white-icon.svg" alt="Instagram" style="width: 30px; height: 30px;">
    </a>
    <a href="https://www.linkedin.com/in/adam-ho-a65786202" class="nav-image" target="_blank">
        <img src="\images\linkImages\linkedin-app-white-icon.svg" alt="LinkedIn" style="width: 30px; height: 30px;">
    </a>
    <a href="https://github.com/adamakh01" class="nav-image" target="_blank">
        <img src="\images\linkImages\github-mark-white.svg" alt="GitHub" style="width: 30px; height: 30px;">
    </a>
</header>
<main id="main-content">
    <div class = "projectFrame">
        <a href = "https://github.com/adamakh01/very-cool-website" class = "projectTitle" target="_blank">Adam Ho's Portfolio</a>
        <img src = "/images/projectImages/AdamHoPortfolio.png" alt = "Adam Ho's Portfolio" class = "projectImage" style = "position:relative; top:6%; width: 100%; height: auto">
        <p class = "projectDescription" style="font-family: Arial, Helvetica, sans-serif; font-size: 17px; line-height: 1.5;">
            Portfolio website showcasing my projects and skills, as well as present my contact info. Built with Sveltekit (HTML, CSS, and JavaScript).
        </p>
    </div>
    <div class = "projectFrame">
        <a href = "https://github.com/adamakh01/Get-Legacy-Apps-Back-for-Windows-11" class = "projectTitle" target="_blank">Legacy Apps for Windows 11</a>
        <img src = "/images/projectImages/LegacyApps.png" alt = "Get Legacy Apps Back for Windows 11" class = "projectImage" style = "position:relative; top:6%; width: 100%; height: auto">
        <p class = "projectDescription" style="font-family: Arial, Helvetica, sans-serif; font-size: 17px; line-height: 1.5;">
            A simple script that allows you to get the legacy Paint, Snipping Tool, and Math Input Panel back for Windows 11. Built using Python utilizing PowerShell commands.
        </p>
    </div>
    <div class = "projectFrame">
        <a href = "https://github.com/adamakh01/ACC-Tablet" class = "projectTitle" target="_blank">ACC Tablet</a>
        <img src = "\images\projectImages\ACC Tablet.PNG" alt = "ACC Tablet" class = "projectImage" style = "position:relative; top:6%; left:15%; width: 70%; height: auto">
        <p class = "projectDescription" style="font-family: Arial, Helvetica, sans-serif; font-size: 17px; line-height: 1.5;">
            A silly little project I made while I was bored. Relatively incomplete.
        </p>
    </div>
    <div class = "projectFrame">
        <a href = "https://github.com/adamakh01/Grade-Calculator" class = "projectTitle" target="_blank">Grade Calculator</a>
        <img src = "\images\projectImages\GradebookFiller.PNG" alt = "Grade Calculator" class = "projectImage" style = "position:relative; top:6%; left:32%; width: 35%; height: auto">
        <p class = "projectDescription" style="font-family: Arial, Helvetica, sans-serif; font-size: 17px; line-height: 1.5;">
            A simple grade calculator that allows you to input your grades and calculate your overall grade. Can be done for multiple classes.
            Built using code.org and JavaScript.
        </p>
    </div>
</main>
<main>
    <slot />
</main>