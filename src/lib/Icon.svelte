<script lang="ts">
  import type { ComponentType } from 'svelte';
  export let icon: ComponentType;
  export let size: number = 24;
  export let variation: 'solid' | 'outline' = 'outline';
  export let color: string = '';
  export let role = 'img';
  export let ariaLabel = '';
</script>

<svelte:component
  this={icon}
  {...$$restProps}
  {role}
  {size}
  {variation}
  {color}
  class={$$props.class}
  viewBox="0 0 24 24"
  aria-label={ariaLabel}
/>

<!--
@component
[Go to docs](https://svelte-heros.vercel.app)
## Props
@prop export let icon: ComponentType;
@prop export let size: number = 24;
@prop export let variation: 'solid' | 'outline' = 'outline';
@prop export let color: string = '';
@prop export let role = 'img';
@prop export let ariaLabel = '';
-->
