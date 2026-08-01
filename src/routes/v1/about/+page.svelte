<script>
</script>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
<style>
    header{
        position:fixed;
        top:0;;
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
        gap: 1rem;
        align-items: center;
    }
    .nav-icons-wrapper-mobile{
        display:none;
    }
    main{
        top:10px;
        position:fixed;
        padding-top: 4rem;
        background:#526fb1;
        color:#F6F6F6;
    }
    main#main-content {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100vh - 6rem);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 2rem;
        background: #526fb1;
        color: #F6F6F6;
        position: fixed;
        height: calc(100vh - 6rem);
        width: 100vw;
        top: 6rem;
        left: 0;
        background:repeating-linear-gradient(
            135deg,
            #526fb1,
            #526fb1 40px,
            #445b94 40px,
            #445b94 42px
        );
    }
    .userPFP {
        position:relative;
        align-items:center;
        text-align:center;
        background-color:#445b94;
        padding:2rem;
        width: 45rem;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
        margin-bottom: 2.5rem;
    }
    .userPFP:hover{
       transform: scale(1.05);
    }
    .aboutMe {
        position:relative;
        background-color:#445b94;
        height: 25rem;
        width:85rem;
        padding:2rem;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
        margin-bottom: 2.5rem;
    }
    .aboutMe:hover{
        transform: scale(1.05);
    }

    .languagesFrame {
        display:flex;
        flex-direction:column;
        align-items:center;
        position:relative;
        background-color:#445b94;
        height: 25rem;
        width:85rem;
        padding:2rem;
        border-radius: 10px;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
        margin-bottom: 4rem;
    }
    .languageButtons{
        display:grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
    }
    .languagesFrame:hover{
        transform: scale(1.05);
    }
    .fake-button {
        display: flex;
        flex-direction:column;
        align-items: center;
        padding: 12px 24px;
        background-color: #2c4477;
        color: white;
        font-family: sans-serif;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        user-select: none;
        width: 5rem;
        height: 5rem;
        box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.5);
        transition: transform 0.4s ease-in-out;
    }
    .fake-button:hover {
        transform: scale(1.1);
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
    @media(max-width:767px){
        header {
            min-width:320px;
        }
        h1{
            font-size:30px;
        }
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
        .nav-icons-wrapper-mobile{
            margin-top:auto;
            display:flex;
            flex-direction:row;
            position:relative;
        }
        .nav-icons-wrapper-mobile{
            margin-top:16rem;
            gap:0.5rem;
            margin-top:5rem;
            margin-bottom:5rem;
        }
    }
    @media (max-width:1700px) {
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
        main#main-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-y: auto;
            overflow-x: hidden;
            height: calc(100vh - 6rem);
        }
        .userPFP, .aboutMe, .languagesFrame  {
            margin-right:auto;
            width: 80%;
            left: 5%;
        }
        .userPFP{
            position:relative;
            top:0.5rem;
            padding:1rem;
        }
        .aboutMe{
            position:relative;
            height:auto;
            margin-top:2.5rem;
        }
        .languageButtons{
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(4, 1fr);
        }
        .languagesFrame{
            position:relative;
            height: auto;
            margin-top:2.5rem;
            margin-bottom: 2.5rem;
        }
        
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <div class = "nav-link-wrapper">
        <a href="/v1" class="nav-link">Home</a>
        <h2 class = "activeLink">About Me</h2>
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
        <a href="/v1">Home</a>
        <a href="/v1/about">About Me</a>
        <a href="/v1/projects">Projects</a>
        </div>
    </div>
</header>
<main id="main-content">
    <div class = "userPFP">
        <img class = "Profile" src="/images/aboutImages/pfp.jpg" alt="Profile" style = "width: 200px; height: 200px; border-radius: 50%;">
        <h2 class = "name" style="font-family: 'Roboto', sans-serif; font-size: 45px;">Adam Ho</h2>
        <h3 class = "userName" style = "font-family:Arial; font-size: 30px;">@farmerakh</h3>
        <h4 class = "email" style = "font-family:Arial; font-size: 20px;">studies463@outlook.com</h4>
    </div>
    <div class = "aboutMe">
        <p class = "aboutText" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.5;">
            Hello. My name is Adam Ho, and I am currently a 2nd year student at California State University, Fullerton pursuing a degree in Computer Science.
            I enjoy programming and creating various projects that just come to mind randomly. Various projects I created are the HappyChild for Autism (not available on GitHub) Grade Calculator, and this website you are currently viewing. In addition, I am also part of the Association for Computing Machinery (ACM) at CSUF, 
            where I am a member of the API Team in Open Source. In addition to being a programmer, I am also a Supplemental Instruction Leader for the Math Department at CSUF, where I am assigned a math course and hold sessions to help students understand the material better, as well as getting better grades.
            In my free time, I like to play video games, watch various shows, and hanging out with friends.
            Some video games I enjoy playing are VALORANT, Minecraft, and OSU!. Most recently I became hooked on Tetris as it trains my thinking speed.
        </p>
    </div>
    <div class = "languagesFrame">
        <p class = "languagesKnown" style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight:bold; line-height: 1.5;">
            Programming Languages and Toolkits:
        </p>
        <div class = "languageButtons">
            <div class = "fake-button">
                Java
            </div>
            <div class = "fake-button">
                Python
            </div>
            <div class = "fake-button">
                C++
            </div>
            <div class = "fake-button">
                HTML/CSS
            </div>
            <div class = "fake-button">
                JavaScript
            </div>
            <div class = "fake-button">
                Sveltekit (Toolkit)
            </div>
            <div class = "fake-button">
                TKinter (Toolkit)
            </div>
            <div class = "fake-button">
                
            </div>
        </div>

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
<main>
    <slot />
</main>