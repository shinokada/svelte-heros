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
  export let ariaLabel = 'no symbol';
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
      d="M18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604M18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604M18.364 18.364L5.63604 5.63604"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.72048 5.65982L18.3402 17.2795C21.0455 14.0383 20.8767 9.20943 17.8336 6.16637C14.7906 3.12331 9.96171 2.95446 6.72048 5.65982ZM17.2795 18.3402L5.65982 6.72048C2.95446 9.96171 3.12331 14.7906 6.16637 17.8336C9.20943 20.8767 14.0383 21.0455 17.2795 18.3402ZM5.10571 5.10571C8.91332 1.2981 15.0867 1.2981 18.8943 5.10571C22.7019 8.91332 22.7019 15.0867 18.8943 18.8943C15.0867 22.7019 8.91332 22.7019 5.10571 18.8943C1.2981 15.0867 1.2981 8.91332 5.10571 5.10571Z"
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
@prop export let ariaLabel = 'no symbol';
-->
