<script> let text = "> " </script>
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
<style>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:relative;
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

    main{
        top:10px;
        position:fixed;
        padding-top: 2rem;
        background:#526fb1;
        color:#F6F6F6;
    }

    .titleLink {
        left:10px;
        position:relative;
        margin:0;
        color:#ffffff;
        font-weight:bold;
        font-size:50px;
    }

    main#main-content {
        display: flex;
        position:relative;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(to bottom, #000000 80%, #b6b6b6 100%);
        height: 100vh;
        color: #F6F6F6;
        position: fixed;
        height: calc(100vh - 6rem);
        width: 100vw;
        top: 6rem;
        left: 0;
        overflow-y: auto;
    }

    .notepad{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 1500px;
        height: 500px;
        background: #111;
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
    .code{
        padding-left: 10px;
        font-size: 50px;
        font-family: Consolas, Monaco, 'Courier New', monospace;
        color: #aaaaaa;
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
</style>

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
            <span class="red"></span>
            <span class="yellow"></span>
            <span class="green"></span>
            </div>
        </div>

        <p class = "code">{text}<span class = "auto-type"></span></p>
    </div>
    <script src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
    <script>
        var typed = new Typed(".auto-type", {
            strings: ["Adam Ho<br>> Computer Science Student<br>> Math Supplemental Instruction Leader"],
            typeSpeed: 20,
            loop: false
        });
    </script>
    <div class = "mainPageButton">
        <a class = "modernButton">Explore Me!</a>
    </div>

</main>