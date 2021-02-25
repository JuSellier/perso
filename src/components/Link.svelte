<script>
  export let anchor;
  export let description;
  export let url;

  import { fade } from "svelte/transition";
</script>

<style>
  section.top {
    display: contents;
  }

  a {
    padding: 5px 10px;
    /* box-shadow: 0 0 0 1px var(--clr-bg-dim); */
    border-radius: 2px;
    max-width: max-content;
    background: var(--clr-gradient-1);
  }
</style>

<section class="top">
  <a href={url} rel="external" class="mouse-target">{anchor}</a>
  <p>{description}</p>
</section>
