<script>
  import LangPicker from "../LangPicker/LangPicker.svelte";
</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    padding: 2rem var(--size-sides);
    border-top: 1px solid #80808050;
    row-gap: 1rem;
  }
</style>

<footer class="contain">
  <LangPicker />
</footer>
