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
  export let ariaLabel = 'inbox stack';
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
      d="M7.875 14.25L9.08906 16.1925C9.50022 16.8504 10.2213 17.25 10.9971 17.25H13.0029C13.7787 17.25 14.4998 16.8504 14.9109 16.1925L16.125 14.25M2.40961 9H7.04584C7.79813 9 8.50065 9.37598 8.91795 10.0019L9.08205 10.2481C9.49935 10.874 10.2019 11.25 10.9542 11.25H13.0458C13.7981 11.25 14.5007 10.874 14.9179 10.2481L15.0821 10.0019C15.4993 9.37598 16.2019 9 16.9542 9H21.5904M2.40961 9C2.30498 9.2628 2.25 9.54503 2.25 9.83233V12C2.25 13.2426 3.25736 14.25 4.5 14.25H19.5C20.7426 14.25 21.75 13.2426 21.75 12V9.83233C21.75 9.54503 21.695 9.2628 21.5904 9M2.40961 9C2.50059 8.77151 2.62911 8.55771 2.79167 8.36805L6.07653 4.53572C6.50399 4.03702 7.12802 3.75 7.78485 3.75H16.2151C16.872 3.75 17.496 4.03702 17.9235 4.53572L21.2083 8.36805C21.3709 8.55771 21.4994 8.77151 21.5904 9M4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V15.375C21.75 14.7537 21.2463 14.25 20.625 14.25H3.375C2.75368 14.25 2.25 14.7537 2.25 15.375V18C2.25 19.2426 3.25736 20.25 4.5 20.25Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 9.83233V11.625C1.5 12.6605 2.33947 13.5 3.375 13.5H20.625C21.6605 13.5 22.5 12.6605 22.5 11.625V9.83233C22.5 9.11619 22.2438 8.42368 21.7778 7.87995L18.4929 4.04763C17.923 3.38269 17.0909 3 16.2151 3H7.78485C6.90908 3 6.07703 3.38269 5.50708 4.04763L2.22223 7.87995C1.75618 8.42368 1.5 9.1162 1.5 9.83233ZM7.78485 4.5C7.34697 4.5 6.93094 4.69134 6.64597 5.02381L3.88067 8.25H7.04584C8.0489 8.25 8.98559 8.7513 9.54199 9.5859L9.70609 9.83205C9.98429 10.2493 10.4526 10.5 10.9542 10.5H13.0458C13.5474 10.5 14.0157 10.2493 14.2939 9.83205L14.458 9.5859C15.0144 8.7513 15.9511 8.25 16.9542 8.25H20.1193L17.354 5.02381C17.0691 4.69134 16.653 4.5 16.2151 4.5H7.78485Z"
      fill={color}
    />
    <path
      d="M2.8125 15C2.08763 15 1.5 15.5876 1.5 16.3125V18C1.5 19.6569 2.84315 21 4.5 21H19.5C21.1569 21 22.5 19.6569 22.5 18V16.3125C22.5 15.5876 21.9124 15 21.1875 15H16.9542C15.9511 15 15.0144 15.5013 14.458 16.3359L14.2939 16.5821C14.0157 16.9993 13.5474 17.25 13.0458 17.25H10.9542C10.4526 17.25 9.98429 16.9993 9.70609 16.582L9.54199 16.3359C8.98559 15.5013 8.0489 15 7.04584 15H2.8125Z"
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
@prop export let ariaLabel = 'inbox stack';
-->
