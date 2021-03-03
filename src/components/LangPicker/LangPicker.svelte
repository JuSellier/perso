<script>
  import { locale } from "svelte-i18n";

  console.log($locale);

  let curr;

  locale.subscribe((val) => {
    curr = val;
  });
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 10px;
  }

  button {
    padding: 5px 10px;
    box-shadow: inset 0 0 0 1px var(--clr-1);
  }
  button.current {
    cursor: not-allowed;
    background: #80808040;
  }
</style>

<section>
  <button
    class={curr === 'en' ? 'current' : null}
    on:click={() => locale.set('en')}>English</button>
  <button
    class={curr === 'fr' ? 'current' : null}
    on:click={() => locale.set('fr')}>Français</button>
</section>
