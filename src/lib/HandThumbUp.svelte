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
  export let ariaLabel = 'hand thumb up';
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
      d="M6.63257 10.5C7.43892 10.5 8.16648 10.0542 8.6641 9.41967C9.43726 8.43384 10.4117 7.6134 11.5255 7.02021C12.2477 6.63563 12.8743 6.06428 13.1781 5.30464C13.3908 4.7731 13.5 4.20587 13.5 3.63338V3C13.5 2.58579 13.8358 2.25 14.25 2.25C15.4926 2.25 16.5 3.25736 16.5 4.5C16.5 5.65163 16.2404 6.74263 15.7766 7.71771C15.511 8.27604 15.8836 9 16.5019 9H19.6277C20.6544 9 21.5733 9.69399 21.682 10.7149C21.7269 11.1371 21.75 11.5658 21.75 12C21.75 14.8476 20.7581 17.4636 19.101 19.5212C18.7134 20.0025 18.1142 20.25 17.4962 20.25H13.4802C12.9966 20.25 12.5161 20.172 12.0572 20.0191L8.94278 18.9809C8.48393 18.828 8.00342 18.75 7.51975 18.75H5.90421M14.25 9H16.5M5.90421 18.75C5.98702 18.9546 6.07713 19.1554 6.17423 19.3522C6.37137 19.7517 6.0962 20.25 5.65067 20.25H4.74289C3.85418 20.25 3.02991 19.732 2.77056 18.882C2.43208 17.7726 2.25 16.5951 2.25 15.375C2.25 13.8225 2.54481 12.3389 3.08149 10.9771C3.38655 10.203 4.16733 9.75 4.99936 9.75H6.05212C6.52404 9.75 6.7973 10.3059 6.5523 10.7093C5.72588 12.0698 5.25 13.6668 5.25 15.375C5.25 16.5685 5.48232 17.7078 5.90421 18.75Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M7.49281 18.75C7.06823 18.75 6.67296 18.5135 6.51759 18.1184C6.18349 17.2687 6 16.3433 6 15.375C6 13.6259 6.59874 12.0167 7.60244 10.741C7.75335 10.5493 7.97456 10.4321 8.20214 10.344C8.67496 10.1609 9.09254 9.82968 9.4141 9.41967C10.1873 8.43384 11.1617 7.6134 12.2755 7.02021C12.9977 6.63563 13.6243 6.06428 13.9281 5.30464C14.1408 4.7731 14.25 4.20587 14.25 3.63338V3C14.25 2.58579 14.5858 2.25 15 2.25C16.2426 2.25 17.25 3.25736 17.25 4.5C17.25 5.65163 16.9904 6.74263 16.5266 7.71771C16.261 8.27604 16.6336 9 17.2519 9H20.3777C21.4044 9 22.3233 9.69399 22.432 10.7149C22.4769 11.1371 22.5 11.5658 22.5 12C22.5 14.8476 21.5081 17.4636 19.851 19.5212C19.4634 20.0025 18.8642 20.25 18.2462 20.25H14.2302C13.7466 20.25 13.2661 20.172 12.8072 20.0191L9.69278 18.9809C9.23393 18.828 8.75342 18.75 8.26975 18.75H7.49281Z"
      fill={color}
    />
    <path
      d="M2.33149 10.9771C1.79481 12.3389 1.5 13.8225 1.5 15.375C1.5 16.5951 1.68208 17.7726 2.02056 18.882C2.27991 19.732 3.10418 20.25 3.99289 20.25H4.90067C5.3462 20.25 5.62137 19.7517 5.42423 19.3522C4.83248 18.1529 4.5 16.8028 4.5 15.375C4.5 13.6668 4.97588 12.0698 5.8023 10.7093C6.0473 10.3059 5.77404 9.75 5.30212 9.75H4.24936C3.41733 9.75 2.63655 10.203 2.33149 10.9771Z"
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
@prop export let ariaLabel = 'hand thumb up';
-->
