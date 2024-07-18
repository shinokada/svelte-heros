<script>
  import { setContext } from 'svelte';
  import { AcademicCap } from 'svelte-heros';
  const iconCtx = {
    size: '30'
  };
  setContext('iconCtx', iconCtx);
</script>

<AcademicCap color="#ff4488" />