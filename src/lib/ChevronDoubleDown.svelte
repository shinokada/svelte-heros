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
  export let ariaLabel = 'chevron double down';
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
      d="M19.5 5.25L12 12.75L4.5 5.25M19.5 11.25L12 18.75L4.5 11.25"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.0303 4.71967C20.3232 5.01256 20.3232 5.48744 20.0303 5.78033L12.5303 13.2803C12.2374 13.5732 11.7626 13.5732 11.4697 13.2803L3.96967 5.78033C3.67678 5.48744 3.67678 5.01256 3.96967 4.71967C4.26256 4.42678 4.73744 4.42678 5.03033 4.71967L12 11.6893L18.9697 4.71967C19.2626 4.42678 19.7374 4.42678 20.0303 4.71967ZM20.0303 10.7197C20.3232 11.0126 20.3232 11.4874 20.0303 11.7803L12.5303 19.2803C12.2374 19.5732 11.7626 19.5732 11.4697 19.2803L3.96967 11.7803C3.67678 11.4874 3.67678 11.0126 3.96967 10.7197C4.26256 10.4268 4.73744 10.4268 5.03033 10.7197L12 17.6893L18.9697 10.7197C19.2626 10.4268 19.7374 10.4268 20.0303 10.7197Z"
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
@prop export let ariaLabel = 'chevron double down';
-->
