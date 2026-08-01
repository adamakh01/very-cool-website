<script>
    let slideIndex = 0;
    const images = [
        { src: "/images/images/beachday.JPG", alt: "beachday" },
        { src: "/images/images/ohsu.JPG", alt: "OHSU"},
        { src: "/images/images/arthistoryproject.JPG", alt: "Art History 101 Project" },
        { src: "/images/images/midwayMuseum.JPG", alt: "Midway Museum" },
        { src: "/images/images/rainyDay.JPG", alt: "Rainy Day" }
    ];
    const captions = [
        "Beach Day 2024!",
        "Oregon Health and Science University",
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
    .nav-link-wrapper {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .nav-icons-wrapper {
        position:relative;
        margin-left: auto;
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
    .nav-icons-wrapper-mobile{
        display:none;
    }
    .nav-image {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
    }
    main{
        top:10px;
        position:fixed;
        padding-top: 4rem;
        background:#526fb1;
        color:#F6F6F6;
    }
    main#main-content {
        position:absolute;
        display: flex;
        flex-direction: row;  
        padding-top: 0;
        background: #526fb1;
        color: #F6F6F6;
        position: fixed;
        height: calc(100vh - 6rem);
        width: 100vw;
        top: 6rem;
        left: 0;
        overflow-y: auto;
        background:
        repeating-linear-gradient(
            135deg,
            #526fb1,
            #526fb1 40px,
            #445b94 40px,
            #445b94 42px
        );
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
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
    }
    .introStatement{
        padding-top:0.5rem;
        font-size: 20px;
        font-weight: bold;
        color: #F6F6F6;
    }
    .intro:hover{
        transform: scale(1.05);
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
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
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
        position: relative;
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
        align-items: center;
        position:fixed;
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
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
    }
    .recentProjects:hover{
        transform:scale(1.05);
    }
    .basicInfo{
        position:fixed;
        left:55px;
        top:14rem;
        box-sizing: border-box;
        width:500px;
        height:200px;
        margin-top: 2rem;
        font-family: Arial, Helvetica, sans-serif;
        background-color:#445b94;
        border-radius:2rem;
        text-align:center;
        padding:1rem;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
    }
    .basicInfo:hover{
        transform:scale(1.05);
    }
    .occupationLink{
        display:block;
        margin-bottom:1rem;
        text-decoration: none;
        transition:color 0.55s;
        font-size: 15px;
        max-width: 92%;;
        margin-left:0;
        margin-right:0;
    }
    .occupationLink:hover{
        color:#F6F6F6;
        text-decoration:underline;
        text-decoration-color:#F6F6F6;
    }
    @media(max-width:819px){
        .gallery{
            display:none;
        }
    }
    @media(min-width:768px){
        .dropbtn{
            display:none;
        }
        .dropdown{
            display:none;
        }
        .dropdown-content{
            display:none;
        }
    }
    @media(min-width:820px) and (max-width: 1700px) {
        main#main-content {
            display: flex;
            flex-direction: column;
        }
        .intro, .recentProjects, .gallery {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        .recentProjects{
            top:10rem;
        }
        .gallery{
            display:none;
            position:absolute;
            box-sizing: border-box;
            top:43rem;
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
        .gallery-left, .gallery-right {
            position: absolute;
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
        .gallery-left{
            left:-15px;
            top: 50%;
            transform: translateY(-50%);
        }
        .gallery-right {
            right: -15px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    @media (max-width:760px) {
        header {
            min-width:320px;
            overflow:visible;
            justify-content: space-between;
        }
        h1{
            font-size:30px;
        }
        .nav-link-wrapper {
            display:none;
        }
        .nav-icons-wrapper{
            display:none;
        }
        main#main-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .intro, .basicInfo, .recentProjects {
            margin-right:auto;
            width: 90%;
            left: 5%;
        }
        .nav-icons-wrapper-mobile{
            margin-top:16px;
            display:flex;
            flex-direction:row;
            position:relative;
            margin-top:5rem;
            margin-bottom:5rem;
        }
        .dropbtn {
            background-color: #223A70;
            color: white;
            padding: 16px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition:color 0.15s, background 0.55s;
        }
        .dropdown {
            position: relative;
            display: inline-block;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            right:0px;
            background-color: #526fb1;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        .dropdown-content a {
            color: rgb(255, 255, 255);
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        .dropdown-content a:hover {background-color: #526fb1; width:fit-content;}
        .dropdown:hover .dropdown-content {
            display: block;
        }
        .dropdown:hover, .dropbtn {
            background-color: #243c74;
        }
        .intro{
            position:relative;
            top:-1.5rem;
        }
        .basicInfo{
            position:relative;
            top:-0.5rem;
        }
        .recentProjects{
            position:relative;
            top:-0.5rem;
            height:auto;
        }
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <div class = "nav-link-wrapper">
        <h2 class = "activeLink">Home</h2>
        <a href="/v1/about" class="nav-link activeLink">About Me</a>
        <a href="/v1/projects" class="nav-link">Projects</a>
    </div>
    <div class = "nav-icons-wrapper">
        <a href="https://www.instagram.com/farmerakh/" class="nav-image" target="_blank">
            <img src="/images/linkImages/instagram-white-icon.svg" alt="Instagram" style="width: 30px; height: 30px;">
        </a>
        <a href="https://www.linkedin.com/in/adam-ho-a65786202" class="nav-image" target="_blank">
            <img src="\images\linkImages\linkedin-app-white-icon.svg" alt="LinkedIn" style="width: 30px; height: 30px;">   
        </a>
        <a href="https://github.com/adamakh01" class="nav-image" target="_blank">
            <img src="\images\linkImages\github-mark-white.svg" alt="GitHub" style="width: 30px; height: 30px;">
        </a>
    </div>
    <div class="dropdown">
        <button class="dropbtn">&#9776</button>
        <div class="dropdown-content">
        <a href="/">Home</a>
        <a href="/v1/about">About Me</a>
        <a href="/v1/projects">Projects</a>
        </div>
    </div>
</header>
<main id="main-content">
    <div class = "intro">
        <h2 class = "introStatement">Hello! My name is Adam.</h2>
        <p>Feel free to take a look around! :D</p>
    </div>
    <div class = "basicInfo">
        <h2>My Occupation</h2>
        <a href = "https://www.fullerton.edu/ecs/cs" class = "occupationLink" target="_blank">
            Computer Science, B.S Undergraduate @ California State University, Fullerton
        </a>
        <a href = "https://www.fullerton.edu/si" class = "occupationLink" target="_blank">
            Math Department Supplemental Instruction Leader @ California State University, Fullerton
        </a>
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
        <h2>Portfolio</h2>
        <a href = "/" class = "nav-link">
            View Adam Ho's V2 Portfolio
        </a>
        <p class = "description" style="margin-top:1rem;">
            New portfolio update, making the experience much more sleek and minimalistic.
        </p>
        <img src = "/images/projectImages/AdamHoPortfolio.png" alt = "Adam Ho's Portfolio" class = "projectPic" style = "position:relative; top:6%; width: 60%; height: auto; margin-bottom:2rem;">
    </div>
    <div class = "nav-icons-wrapper-mobile">
        <a href="https://www.instagram.com/farmerakh/" class="nav-image" target="_blank">
            <img src="/images/linkImages/instagram-white-icon.svg" alt="Instagram" style="width: 30px; height: 30px;">
        </a>
        <a href="https://www.linkedin.com/in/adam-ho-a65786202" class="nav-image" target="_blank">
            <img src="\images\linkImages\linkedin-app-white-icon.svg" alt="LinkedIn" style="width: 30px; height: 30px;">   
        </a>
        <a href="https://github.com/FarmerAKH" class="nav-image" target="_blank">
            <img src="\images\linkImages\github-mark-white.svg" alt="GitHub" style="width: 30px; height: 30px;">
        </a>
    </div>
</main>