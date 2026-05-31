<script>
  import { pushState } from "$app/navigation";

    let text = "Adam Ho";
    let typedChars = "";
    let index = 0;
    let typeWriter;

    const typeChar = () => {
        if(index < text.length) {
            typedChars += text[index];
            index += 1;
        } else {
            clearInterval(typeWriter);
        }
    }

    const typing = () => typeWriter = setInterval(typeChar, 100);
    typing()

</script>
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
        padding-top: 4rem;
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
        align-items: center;
        width: 500px;
        height: 500px;
    }
    .code{
        font-size: 100px;
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
        <p class = "code">{typedChars}</p>
    </div>
</main>