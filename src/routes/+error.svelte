<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
<script>
    import { page } from '$app/state';
</script>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .errorHeader {
        color: white;
        font-family: 'Space Grotesk', sans-serif;
    }
    .errorP {
        color: white;
        font-family: 'Space Grotesk', sans-serif;
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
</style>

<div class="error-container">
    <h1 class = "errorHeader">Error {page.status}</h1>
    <img src="/images/nerd-hamster.png" alt="nerd hamster">
    {#if page.status === 404}
        <p class = "errorP">Errmmmm actually... this page doesn't exist. Are you in the right place?</p>
    {:else}
        <p class = "errorP">Errmmmm... somethings wrong.</p>
    {/if}
    <a class = "modernButton" href="/">Return Home</a>
</div>