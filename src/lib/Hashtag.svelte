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
  export let ariaLabel = 'hashtag';
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
      d="M5.25 8.25H20.25M3.75 15.75H18.75M16.95 2.25L13.05 21.75M10.9503 2.25L7.05029 21.75"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0974 1.51471C11.5035 1.59594 11.767 1.99106 11.6857 2.39723L10.6651 7.50015H15.1351L16.2146 2.10306C16.2958 1.69689 16.6909 1.43348 17.0971 1.51471C17.5033 1.59594 17.7667 1.99106 17.6854 2.39723L16.6649 7.50015H20.25C20.6642 7.50015 21 7.83593 21 8.25015C21 8.66436 20.6642 9.00015 20.25 9.00015H16.3649L15.1649 15.0001H18.75C19.1642 15.0001 19.5 15.3359 19.5 15.7501C19.5 16.1644 19.1642 16.5001 18.75 16.5001H14.8649L13.7854 21.8972C13.7042 22.3034 13.3091 22.5668 12.9029 22.4856C12.4967 22.4043 12.2333 22.0092 12.3146 21.6031L13.3351 16.5001H8.86515L7.78573 21.8972C7.70449 22.3034 7.30938 22.5668 6.90321 22.4856C6.49704 22.4043 6.23362 22.0092 6.31486 21.6031L7.33544 16.5001H3.75C3.33579 16.5001 3 16.1644 3 15.7501C3 15.3359 3.33579 15.0001 3.75 15.0001H7.63544L8.83544 9.00015H5.25C4.83579 9.00015 4.5 8.66436 4.5 8.25015C4.5 7.83593 4.83579 7.50015 5.25 7.50015H9.13544L10.2149 2.10306C10.2961 1.69689 10.6912 1.43348 11.0974 1.51471ZM10.3651 9.00015L9.16515 15.0001H13.6351L14.8351 9.00015H10.3651Z"
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
@prop export let ariaLabel = 'hashtag';
-->
