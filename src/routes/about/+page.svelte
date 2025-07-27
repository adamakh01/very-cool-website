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
        overflow:fixed;
        height: calc(100vh - 6rem);
    }
    .userPFP {
        position:relative;
        left:-40%;
        top: 20%;
        align-items:center;
        text-align:center;
        background-color:#445b94;
        padding:2rem;
        border-radius: 10px;
    }
    .aboutMe {
        position:relative;
        background-color:#445b94;
        height: 25rem;
        width:85rem;
        padding:2rem;
        border-radius: 10px;
        left:10%;
        top:-55%;
    }
    .courseFrame {
        position:relative;
        background-color:#445b94;
        height: 25rem;
        width:35rem;
        padding:2rem;
        border-radius: 10px;
        left:-10%;
        top:-50%;
    }
    .languagesFrame {
        position:relative;
        background-color:#445b94;
        height: 25rem;
        width:35rem;
        padding:2rem;
        border-radius: 10px;
        left:30%;
        top:-94%;
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <a href="/" class = "nav-link">Home</a>
    <h2 class = "activeLink">About Me</h2>
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
    <div class = "userPFP">
        <img class = "Profile" src="src/lib/aboutImages/pfp.jpg" alt="Profile" style = "width: 200px; height: 200px; border-radius: 50%;">
        <h2 class = "name" style="font-family: 'Roboto', sans-serif; font-size: 45px;">Adam Ho</h2>
        <h3 class = "userName" style = "font-family:Arial; font-size: 30px;">@farmerakh</h3>
        <h4 class = "email" style = "font-family:Arial; font-size: 20px;">studies463@outlook.com</h4>
    </div>
    <div class = "aboutMe">
        <p class = "aboutText" style="font-family: Arial, Helvetica, sans-serif; font-size: 18px; line-height: 1.5;">
            Hello. My name is Adam Ho, and I am currently a 2nd year student at California State University, Fullerton pursuing a degree in Computer Science.
            I enjoy programming and creating various projects that just come to mind randomly. Various projects I created are the HappyChild for Autism (not available on GitHub) Grade Calculator, and this website you are currently viewing. In addition, I am also part of the Association for Computing Machinery (ACM) at CSUF, 
            where I am a member of the API Team in Open Source. Some notable tasks I did was creating a demo webpage so others can interact with the API, setting up the services for Announcements, and contributed to OpenDocs.
            In addition to being a programmer, I am also a Supplemental Instruction Leader for the Math Department at CSUF, where I am assigned a math course and hold sessions to help students understand the material better, as well as getting better grades.
            In my free time, I like to play video games, watch various shows, and hanging out with friends.
            Some video games I enjoy playing are VALORANT, Minecraft, and OSU!. Most recently I became hooked on Tetris as it trains my thinking speed.
            My favorite shows are The Big Bang Theory, Modern Family, Fresh off the Boat, and a few others I liked were Blue Box, Fruits Basket, Your Lie in April, and much more.
        </p>
    </div>
    <div class = "courseFrame">
        <p class = "courseTaken" style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight:bold; line-height: 1.5;">
            Applicable Courses:
            <ul style = "font-family: Arial, Helvetica, sans-serif; font-size: 20px; line-height: 1.5; list-style-type: disc; padding-left: 20px;">
                <li>AP Computer Science Principles</li>
                <li>AP Computer Science A</li>
                <li>AP Calculus AB</li>
                <li>MATH 150B - Calculus II</li>
                <li>MATH 250A - Calculus III</li>
                <li>CPSC 121 - Object Oriented Programming</li>
                <li>CPSC 131 - Data Structures</li>
            </ul>
    </div>
    <div class = "languagesFrame">
        <p class = "languagesKnown" style="font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight:bold; line-height: 1.5;">
            Programming Languages and Toolkits:
            <ul style = "font-family: Arial, Helvetica, sans-serif; font-size: 20px; line-height: 1.5; list-style-type: disc; padding-left: 20px;">
                <li>Java</li>
                <li>Python</li>
                <li>C++</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>SvelteKit (Toolkit)</li>
                <li>Tkinter (Toolkit)</li>
            </ul>
    </div>

</main>
<main>
    <slot />
</main>