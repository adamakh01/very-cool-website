<script>
    let slideIndex = 0;
    const images = [
        { src: "src/lib/images/beachday.JPG", alt: "beachday" },
        { src: "src/lib/images/arthistoryproject.JPG", alt: "Art History 101 Project" },
        { src: "src/lib/images/midwayMuseum.JPG", alt: "Midway Museum" },
        { src: "src/lib/images/rainyDay.JPG", alt: "Rainy Day" }
    ];
    const captions = [
        "Beach Day 2024!",
        "Art History 101 Photography Project",
        "USS Midway Museum New Years 2025",
        "Feels like Oregon"
    ];

    function plusDivs(n) {
        slideIndex = (slideIndex + n + images.length) % images.length;
        captionIndex = (slideIndex + n + captions.length) % captions.length;
    }
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
        flex-direction: row;  
        padding-top: 0;
        background: #526fb1;
        color: #F6F6F6;
        position: fixed;
        width: 100vw;
        top: 6rem;
        left: 0;
        background: 
        repeating-linear-gradient(
            135deg,
            #526fb1,
            #526fb1 40px,
            #445b94 40px,
            #445b94 42px
        );
        min-height: 100vh;
    }
    .intro{
        position:relative;
        left:55px;
        box-sizing: border-box;
        width:500px;
        height:105px;
        margin-top: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        background-color:#445b94;
        border-radius:2rem;
        align-items: center;
        text-align:center;
    }
    .introStatement{
        padding-top:0.5rem;
        font-size: 20px;
        font-weight: bold;
        color: #F6F6F6;
    }
    .gallery{
        position:fixed;
        left:610px;
        box-sizing: border-box;
        width:1200px;
        height:700px;
        margin-top: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        background-color:#445b94;
        border-radius:2rem;
        align-items: center;
        text-align: center;
        overflow: hidden;
    }
    .galleryPic {
        width:70%;
        position: absolute;
        top:7%;
        left: 15%;
        display: block;
        height: 70%;
        object-fit: contain;
        margin: 1.5rem auto 0 auto;
    }
    .gallery-left, .gallery-right {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background:#223A70;
        border-radius:2rem;
        color: white;
        border: none;
        width:100px;
        height:100px;
        font-size:30px;
        cursor: pointer;
        transition:color 0.15s, background 0.55s;
    }
    .gallery-left:hover, .gallery-right:hover {
        background: rgb(56, 83, 150);
        color: #F6F6F6;
    }
    .gallery-left:active, .gallery-right:active {
        background: rgb(37, 64, 133);
        color: #F6F6F6;
    }
    .gallery-caption{
        display:block;
        position: absolute;
        padding:1rem;
        border-radius:2rem;
        background:#223A70;
        width:35rem;
        height:60px;
        text-align:center;
        top:84%;
        left:25.5%;
    }
    .recentProjects{
        display:flex;
        flex-direction: column;
        align-content:center;
        position:fixed;
        left:55px;
        top:18rem;
        box-sizing: border-box;
        width:500px;
        height:540px;
        font-family: Arial, Helvetica, sans-serif;
        background-color:#445b94;
        border-radius:2rem;
        text-align:center;
        padding: 1rem;
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <h2 class = "activeLink">Home</h2>
    <a href="/about" class="nav-link">About Me</a>
    <a href="/projects" class="nav-link">Projects</a>
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
    <div class = "intro">
        <h2 class = "introStatement">Hello! My name is Adam.</h2>
        <p>Feel free to take a look around! :D</p>
    </div>
    <div class = "gallery">
        <h2>My Gallery</h2>
        <img class="galleryPic" src={images[slideIndex].src} alt={images[slideIndex].alt}>
        <button class="gallery-left" on:click={() => plusDivs(-1)} style="position:fixed; left:40rem; top:50%;">&#10094;</button>
        <button class="gallery-right" on:click={() => plusDivs(+1)} style="position:fixed; left:104.8rem; top:50%rem;">&#10095;</button>
        <div class="gallery-caption">
            <p class="gallery-caption-text">{ captions[slideIndex] }</p>
        </div>
    </div>
    <div class = "recentProjects">
        <h2>My Recent Project</h2>
        <a href = "https://github.com/adamakh01/very-cool-website" class = "nav-link" target="_blank">
            Adam Ho's Portfolio
        </a>
         <img src = "src/lib/projectImages/AdamHoPortfolio.png" alt = "Adam Ho's Portfolio" class = "projectPic" style = "position:relative; top:6%; width: 100%; height: auto; margin-bottom:2rem;">
        <p class = "description" style="margin:0.5rem; padding:1rem;">
            Portfolio website showcasing my projects and skills, as well as present my contact info. Built with Sveltekit (HTML, CSS, and JavaScript).
        </p>
    </div>
</main>