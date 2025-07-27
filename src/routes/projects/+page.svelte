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
    main{
        top:10px;
        position:fixed;
        padding-top: 4rem;
        background:#526fb1;
        color:#F6F6F6;
    }
    main#main-content {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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
        display:block;
        position:relative;;
        left:55px;
        top:28rem;
        box-sizing: border-box;
        width:500px;
        height:350px;
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
    .projectImage{
        position:relative;
        width: 9%; 
        height: auto; 
        margin-top: 0.5rem; 
        left:12%; 
        top: 65%;
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <a href="/" class = "nav-link">Home</a>
    <a href="/about" class = "nav-link">About Me</a>
    <h2 class = "activeLink">Projects</h2>
    <a href="https://www.instagram.com/farmerakh/" class="nav-image" target="_blank">
        <img src="src/lib/linkImages/instagram-white-icon.svg" alt="Instagram" style="width: 30px; height: 30px;">
    </a>
    <a href="https://www.linkedin.com/in/adam-ho-a65786202" class="nav-image" target="_blank">
        <img src="src\lib\linkImages\linkedin-app-white-icon.svg" alt="LinkedIn" style="width: 30px; height: 30px;">
    </a>
    <a href="https://github.com/adamakh01" class="nav-image" target="_blank">
        <img src="src\lib\linkImages\github-mark-white.svg" alt="GitHub" style="width: 30px; height: 30px;">
    </a>
</header>
<main id="main-content">
    <div class = "projectFrame">
        <a href = "https://github.com/adamakh01/very-cool-website" class = "projectTitle" target="_blank">Adam Ho's Portfolio</a>
        <img src = "src/lib/projectImages/AdamHoPortfolio.png" alt = "Adam Ho's Portfolio" class = "projectImage">
        <p class = "projectDescription" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.5;">
            This is my personal portfolio website where I showcase my projects and skills. It is built using Svelte and CSS, and it is designed to be responsive and user-friendly.
        </p>
    </div>
    <div class = "projectFrame">

    </div>
    <div class = "projectFrame">

    </div>
    <div class = "projectFrame">

    </div>
</main>
<main>
    <slot />
</main>