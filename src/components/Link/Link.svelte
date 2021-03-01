<script>
  export let anchor;
  export let description;
  export let url;

  import { fade } from "svelte/transition";
</script>

<style>
  section.top {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 10px;
  }

  a {
    padding: 5px 10px;
    border-radius: 2px;
    background: var(--clr-gradient-1);
    font-size: var(--size-h6);

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    color: var(--clr-txt-dim);
  }
</style>

<section class="top">
  <a
    href={url}
    rel="noreferrer"
    target="_blank"
    class="mouse-target">{anchor}<span>{'>'}</span></a>
  <p>{description}</p>
</section>
