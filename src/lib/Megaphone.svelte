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
  export let ariaLabel = 'megaphone';
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
      d="M10.3404 15.8398C9.65153 15.7803 8.95431 15.75 8.25 15.75H7.5C5.01472 15.75 3 13.7353 3 11.25C3 8.76472 5.01472 6.75 7.5 6.75H8.25C8.95431 6.75 9.65153 6.71966 10.3404 6.66022M10.3404 15.8398C10.5933 16.8015 10.9237 17.7317 11.3246 18.6234C11.5721 19.1738 11.3842 19.8328 10.8616 20.1345L10.2053 20.5134C9.6539 20.8318 8.9456 20.6306 8.67841 20.0527C8.0518 18.6973 7.56541 17.2639 7.23786 15.771M10.3404 15.8398C9.95517 14.3745 9.75 12.8362 9.75 11.25C9.75 9.66379 9.95518 8.1255 10.3404 6.66022M10.3404 15.8398C13.5 16.1124 16.4845 16.9972 19.1747 18.3749M10.3404 6.66022C13.5 6.3876 16.4845 5.50283 19.1747 4.12509M19.1747 4.12509C19.057 3.74595 18.9302 3.37083 18.7944 3M19.1747 4.12509C19.7097 5.84827 20.0557 7.65462 20.1886 9.51991M19.1747 18.3749C19.057 18.7541 18.9302 19.1292 18.7944 19.5M19.1747 18.3749C19.7097 16.6517 20.0557 14.8454 20.1886 12.9801M20.1886 9.51991C20.6844 9.93264 21 10.5545 21 11.25C21 11.9455 20.6844 12.5674 20.1886 12.9801M20.1886 9.51991C20.2293 10.0913 20.25 10.6682 20.25 11.25C20.25 11.8318 20.2293 12.4087 20.1886 12.9801"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M16.8812 4.34562C14.81 5.17419 12.5917 5.71339 10.276 5.9132C9.60847 5.97079 8.93276 6.0002 8.25 6.0002H7.5C4.60051 6.0002 2.25 8.35071 2.25 11.2502C2.25 13.8498 4.13945 16.0081 6.61997 16.4268C6.95424 17.7958 7.41805 19.114 7.99764 20.3676C8.46171 21.3714 9.67181 21.6876 10.5803 21.1631L11.2366 20.7842C12.1167 20.2761 12.4023 19.1915 12.0087 18.3161C11.7738 17.7937 11.5642 17.2576 11.3814 16.7092C13.2988 16.9672 15.1419 17.459 16.8812 18.1548C17.6069 15.9854 18 13.6637 18 11.2502C18 8.83666 17.6069 6.51496 16.8812 4.34562Z"
      fill={color}
    />
    <path
      d="M18.2606 3.7409C19.0641 6.0966 19.5 8.62249 19.5 11.2502C19.5 13.8779 19.0641 16.4038 18.2606 18.7595V18.7595C18.2054 18.9212 18.1487 19.0823 18.0901 19.2424C17.9477 19.6314 18.1476 20.0621 18.5366 20.2045C18.9256 20.3469 19.3563 20.147 19.4987 19.758C19.6387 19.3755 19.7696 18.9886 19.891 18.5975C20.4147 16.9107 20.7627 15.147 20.914 13.328C21.431 12.7895 21.75 12.0569 21.75 11.2502C21.75 10.4436 21.431 9.71091 20.914 9.17246C20.7627 7.35338 20.4147 5.58966 19.891 3.90292C19.7696 3.51183 19.6387 3.1249 19.4987 2.7424C19.3563 2.35342 18.9256 2.15352 18.5366 2.29591C18.1476 2.43829 17.9477 2.86904 18.0901 3.25801C18.1487 3.41813 18.2055 3.57916 18.2606 3.7409V3.7409Z"
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
@prop export let ariaLabel = 'megaphone';
-->
