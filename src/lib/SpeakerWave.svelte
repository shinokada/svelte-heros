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
  export let ariaLabel = 'speaker wave';
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
      d="M19.114 5.63591C22.6287 9.15063 22.6287 14.8491 19.114 18.3638M16.4626 8.28765C18.5129 10.3379 18.5129 13.662 16.4626 15.7123M6.75 8.24993L11.4697 3.53026C11.9421 3.05778 12.75 3.39241 12.75 4.06059V19.9393C12.75 20.6074 11.9421 20.9421 11.4697 20.4696L6.75 15.7499H4.50905C3.62971 15.7499 2.8059 15.2435 2.57237 14.3957C2.36224 13.6329 2.25 12.8295 2.25 11.9999C2.25 11.1703 2.36224 10.367 2.57237 9.60416C2.8059 8.7564 3.62971 8.24993 4.50905 8.24993H6.75Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M13.5 4.06063C13.5 2.72427 11.8843 2.05501 10.9393 2.99996L6.43934 7.49997H4.50905C3.36772 7.49997 2.19106 8.16441 1.8493 9.40502C1.62147 10.2321 1.5 11.1024 1.5 12C1.5 12.8975 1.62147 13.7678 1.8493 14.5949C2.19106 15.8355 3.36772 16.5 4.50905 16.5H6.43934L10.9393 21C11.8843 21.9449 13.5 21.2757 13.5 19.9393V4.06063Z"
      fill={color}
    />
    <path
      d="M18.5837 5.10561C18.8766 4.81272 19.3514 4.81272 19.6443 5.10561C23.452 8.91322 23.452 15.0866 19.6443 18.8942C19.3514 19.1871 18.8766 19.1871 18.5837 18.8942C18.2908 18.6013 18.2908 18.1264 18.5837 17.8335C21.8055 14.6117 21.8055 9.38809 18.5837 6.16627C18.2908 5.87338 18.2908 5.3985 18.5837 5.10561Z"
      fill={color}
    />
    <path
      d="M15.9323 7.75734C16.2252 7.46445 16.7001 7.46445 16.993 7.75734C19.3361 10.1005 19.3361 13.8995 16.993 16.2426C16.7001 16.5355 16.2252 16.5355 15.9323 16.2426C15.6394 15.9497 15.6394 15.4749 15.9323 15.182C17.6897 13.4246 17.6897 10.5754 15.9323 8.818C15.6394 8.52511 15.6394 8.05024 15.9323 7.75734Z"
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
@prop export let ariaLabel = 'speaker wave';
-->
