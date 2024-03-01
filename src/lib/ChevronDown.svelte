<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline';
    viewBox?: string;
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' = ctx.variation || 'outline';
  export let viewBox: string = ctx.viewBox || '0 0 24 24';
  export let ariaLabel = 'chevron down';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  fill="none"
  {viewBox}
  stroke-width="2"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outline'}
    <path
      d="M19.5 8.25L12 15.75L4.5 8.25"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' = ctx.variation || 'outline';
@prop export let viewBox: string = ctx.viewBox || '0 0 24 24';
@prop export let ariaLabel = 'chevron down';
-->
