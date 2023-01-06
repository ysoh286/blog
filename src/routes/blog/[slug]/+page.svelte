<!-- page that will load our blog post - note that the data from the `load` function
     will be automatically available -->
<script>
    export let data;
    const { title, formattedDate, content } = data;
</script>

<article>
    <h1>{title}</h1>
    <p>{formattedDate}</p>
    <div class='line-break' />
    <!-- this is a dynamic component 
        - renders arbitrary component when not known beforehand -->
        <div class='post-content'>
            <svelte:component this={content} />
        </div>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .line-break {
        background-color: black;
        height: 1px;
        width: 100%;
    }

    .post-content {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
    }
</style>