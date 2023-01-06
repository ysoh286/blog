<!-- Footer -->
<footer>
    <nav>
        <ul>
          <a href="/">Home</a>
        </ul>
      </nav>
      <p>Built with SvelteKit | 2023.</p>
</footer>

<style>
    footer {
        padding: 5px;
        bottom: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        justify-content: center;
        align-items: center;
        width: 100vw;
    }

    nav {
        justify-self: end;
    }

    p {
        justify-self: start;
    }
</style>