<script>
  import { setContext } from 'svelte';
  import { Accessibility } from 'svelte-heros';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<Accessibility color="#ff4488" />