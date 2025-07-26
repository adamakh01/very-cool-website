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
    .intro{
        margin-top: 2rem;
        padding-bottom:2rem;
        padding-left:2rem;
        padding-right:2rem;
        font-family: Arial, Helvetica, sans-serif;
        background-color:#445b94;
        border-radius:2rem;
        align-items: center;
    }
</style>
<header>
    <h1>Adam Ho</h1>
    <a href="/">Home</a>
    <h2 class = "activeLink">About</h2>
    <a href="/projects" class="nav-link">Projects</a>
    <a href="/contact" class="nav-link">Contact</a>
</header>
<main id="main-content">
    
</main>
<main>
    <slot />
</main>