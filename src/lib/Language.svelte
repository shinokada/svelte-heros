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
  export let ariaLabel = 'language';
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
      d="M10.5 21L15.75 9.75L21 21M12 18H19.5M3 5.62136C4.96557 5.37626 6.96804 5.25 9 5.25M9 5.25C10.1208 5.25 11.2326 5.28841 12.3343 5.364M9 5.25V3M12.3343 5.364C11.1763 10.6578 7.68868 15.0801 3 17.5023M12.3343 5.364C13.2298 5.42545 14.1186 5.51146 15 5.62136M10.4113 14.1162C8.78554 12.4619 7.47704 10.4949 6.58432 8.31366"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.00004 2.25C9.41425 2.25 9.75004 2.58579 9.75004 3V4.50565C10.6344 4.519 11.5132 4.55589 12.3856 4.61576C13.2951 4.67816 14.1977 4.7655 15.0928 4.87713C15.5039 4.92838 15.7955 5.30314 15.7443 5.71417C15.693 6.1252 15.3183 6.41685 14.9072 6.3656C14.2477 6.28336 13.5839 6.21471 12.9162 6.15993C12.3254 8.46971 11.3061 10.6074 9.94797 12.4834C10.2648 12.8666 10.5979 13.236 10.9462 13.5905C11.2366 13.8859 11.2324 14.3607 10.937 14.6511C10.6416 14.9414 10.1667 14.9373 9.87639 14.6419C9.57352 14.3337 9.2812 14.015 9.00003 13.6866C7.4289 15.522 5.50944 17.0501 3.34426 18.1686C2.97625 18.3587 2.52381 18.2145 2.3337 17.8465C2.14358 17.4785 2.2878 17.026 2.65581 16.8359C4.7376 15.7605 6.57216 14.2737 8.05211 12.4834C7.18602 11.2869 6.4576 9.984 5.89024 8.59774C5.73335 8.21439 5.91693 7.77643 6.30028 7.61954C6.68363 7.46265 7.12158 7.64623 7.27848 8.02957C7.74079 9.15919 8.3196 10.229 9.00003 11.2242C10.0649 9.66674 10.881 7.92604 11.3912 6.05944C10.5992 6.01997 9.80199 6 9.00004 6C6.99917 6 5.02769 6.12433 3.09284 6.3656C2.68181 6.41685 2.30705 6.1252 2.2558 5.71417C2.20454 5.30314 2.4962 4.92838 2.90723 4.87713C4.66117 4.65841 6.44383 4.5329 8.25004 4.50565V3C8.25004 2.58579 8.58582 2.25 9.00004 2.25ZM15.75 9C16.0414 9 16.3064 9.16878 16.4297 9.43284L21.6797 20.6828C21.8548 21.0582 21.6926 21.5045 21.3172 21.6796C20.9418 21.8548 20.4956 21.6925 20.3204 21.3172L19.1224 18.75H12.3777L11.1797 21.3172C11.0045 21.6925 10.5582 21.8548 10.1829 21.6796C9.80752 21.5045 9.64523 21.0582 9.8204 20.6828L15.0704 9.43284C15.1936 9.16878 15.4586 9 15.75 9ZM13.0777 17.25H18.4224L15.75 11.5235L13.0777 17.25Z"
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
@prop export let ariaLabel = 'language';
-->
