<script>
  let count = 0;
  let name = 'Yukina';
  $: numName = `Hello * ${count}`;

  function handleClick() {
    count += 1;
  }
</script>

<h1>{numName}</h1>
<input type="text" bind:value={name} />
<button on:click={handleClick}>Greet</button>
{#each [...Array(count)]as _}
<p class="greet">
  Hello, {name}!
</p>
{/each}

<style>
  .greet {
    font-weight: bold;
    margin: 0.5rem 1rem;
  }
</style>
