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
  export let ariaLabel = 'battery 0';
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
      d="M21 10.5H21.375C21.9963 10.5 22.5 11.0037 22.5 11.625V13.875C22.5 14.4963 21.9963 15 21.375 15H21M3.75 18H18.75C19.9926 18 21 16.9926 21 15.75V9.75C21 8.50736 19.9926 7.5 18.75 7.5H3.75C2.50736 7.5 1.5 8.50736 1.5 9.75V15.75C1.5 16.9926 2.50736 18 3.75 18Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.75 9.75C0.75 8.09315 2.09315 6.75 3.75 6.75H18.75C20.4069 6.75 21.75 8.09315 21.75 9.75V9.78751C22.6058 9.96123 23.25 10.7179 23.25 11.625V13.875C23.25 14.7821 22.6058 15.5388 21.75 15.7125V15.75C21.75 17.4069 20.4069 18.75 18.75 18.75H3.75C2.09315 18.75 0.75 17.4069 0.75 15.75V9.75ZM20.25 9.75C20.25 8.92157 19.5784 8.25 18.75 8.25H3.75C2.92157 8.25 2.25 8.92157 2.25 9.75V15.75C2.25 16.5784 2.92157 17.25 3.75 17.25H18.75C19.5784 17.25 20.25 16.5784 20.25 15.75V9.75Z"
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
@prop export let ariaLabel = 'battery 0';
-->
