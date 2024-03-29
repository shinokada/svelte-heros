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
  export let ariaLabel = 'hand thumb down';
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
      d="M7.5 15L9.75 15M17.7745 5.25C17.7851 5.30001 17.802 5.34962 17.8258 5.3978C18.4175 6.59708 18.75 7.94722 18.75 9.375C18.75 10.8618 18.3895 12.2643 17.7511 13.5M17.7745 5.25C17.6975 4.88534 17.9575 4.5 18.3493 4.5L19.2571 4.5C20.1458 4.5 20.9701 5.01802 21.2294 5.86805C21.5679 6.97738 21.75 8.15493 21.75 9.375C21.75 10.9275 21.4552 12.4111 20.9185 13.7729C20.6135 14.547 19.8327 15 19.0006 15H17.9479C17.476 15 17.2027 14.4441 17.4477 14.0407C17.5548 13.8644 17.6561 13.684 17.7511 13.5M17.7745 5.25L16.4803 5.25C15.9966 5.25 15.5161 5.17203 15.0572 5.01908L11.9428 3.98093C11.4839 3.82798 11.0034 3.75 10.5198 3.75L6.50377 3.75C5.88581 3.75 5.2866 3.99749 4.899 4.47878C3.24188 6.53642 2.25 9.15238 2.25 12C2.25 12.4341 2.27306 12.8629 2.31801 13.2851C2.4267 14.306 3.34564 15 4.37227 15L7.49809 15C8.11638 15 8.48896 15.724 8.22337 16.2823C7.75956 17.2574 7.5 18.3484 7.5 19.5C7.5 20.7426 8.50736 21.75 9.75 21.75C10.1642 21.75 10.5 21.4142 10.5 21V20.3666C10.5 19.7941 10.6092 19.2269 10.8219 18.6954C11.1257 17.9357 11.7523 17.3644 12.4745 16.9798C13.5883 16.3866 14.5627 15.5662 15.3359 14.5803C15.8335 13.9458 16.5611 13.5 17.3674 13.5H17.7511"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M15.7303 5.25L16.7647 5.25C17.5455 6.43343 18 7.85114 18 9.375C18 10.8989 17.5455 12.3166 16.7647 13.5L16.6174 13.5C15.8111 13.5 15.0835 13.9458 14.5859 14.5803C13.8127 15.5662 12.8383 16.3866 11.7245 16.9798C11.0023 17.3644 10.3757 17.9357 10.0719 18.6954C9.85923 19.2269 9.75 19.7941 9.75 20.3666L9.75 21C9.75 21.4142 9.41421 21.75 9 21.75C7.75736 21.75 6.75 20.7426 6.75 19.5C6.75 18.3484 7.00956 17.2574 7.47337 16.2823C7.73895 15.724 7.36638 15 6.74809 15L3.62227 15C2.59563 15 1.6767 14.306 1.56801 13.2851C1.52305 12.8629 1.5 12.4341 1.5 12C1.5 9.15238 2.49188 6.53642 4.149 4.47878C4.5366 3.99749 5.13581 3.75 5.75377 3.75L9.76975 3.75C10.2534 3.75 10.7339 3.82798 11.1928 3.98093L14.3072 5.01908C14.7661 5.17203 15.2466 5.25 15.7303 5.25Z"
      fill={color}
    />
    <path
      d="M21.6685 13.7729C22.2052 12.4111 22.5 10.9275 22.5 9.37501C22.5 8.15493 22.3179 6.97738 21.9794 5.86805C21.7201 5.01802 20.8958 4.5 20.0071 4.5L19.0993 4.5C18.6538 4.5 18.3786 4.99827 18.5758 5.3978C19.1675 6.59709 19.5 7.94722 19.5 9.375C19.5 11.0832 19.0241 12.6802 18.1977 14.0408C17.9527 14.4441 18.226 15 18.6979 15L19.7506 15C20.5827 15 21.3635 14.547 21.6685 13.7729Z"
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
@prop export let ariaLabel = 'hand thumb down';
-->
