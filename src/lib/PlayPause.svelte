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
  export let ariaLabel = 'play pause';
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
      d="M21 7.5L21 18M15 7.5V18M3 16.8114V8.68858C3 7.82478 3.93317 7.28324 4.68316 7.7118L11.7906 11.7732C12.5464 12.2051 12.5464 13.2949 11.7906 13.7268L4.68316 17.7882C3.93317 18.2168 3 17.6752 3 16.8114Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M15 6.75C14.5858 6.75 14.25 7.08579 14.25 7.5V18C14.25 18.1989 14.329 18.3897 14.4697 18.5303C14.6103 18.671 14.8011 18.75 15 18.75H15.75C16.1642 18.75 16.5 18.4142 16.5 18V7.5C16.5 7.08579 16.1642 6.75 15.75 6.75H15Z"
      fill={color}
    />
    <path
      d="M20.25 6.75C19.8358 6.75 19.5 7.08579 19.5 7.5V18C19.5 18.4142 19.8358 18.75 20.25 18.75H21C21.4142 18.75 21.75 18.4142 21.75 18L21.75 7.5C21.75 7.30109 21.671 7.11032 21.5303 6.96967C21.3897 6.82902 21.1989 6.75 21 6.75H20.25Z"
      fill={color}
    />
    <path
      d="M5.05526 7.06061C3.80528 6.34633 2.25 7.24889 2.25 8.68856V16.8114C2.25 18.2511 3.80528 19.1536 5.05526 18.4394L12.1628 14.3779C13.4224 13.6581 13.4224 11.8418 12.1628 11.122L5.05526 7.06061Z"
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
@prop export let ariaLabel = 'play pause';
-->
