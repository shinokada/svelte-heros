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
  export let ariaLabel = 'envelope open';
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
      d="M21.75 9.00021V9.9063C21.75 10.734 21.2955 11.4949 20.5667 11.8874L14.0893 15.3752M2.25 9.00021V9.9063C2.25 10.734 2.70448 11.4949 3.43328 11.8874L9.91074 15.3752M18.75 17.8849L14.0893 15.3752M14.0893 15.3752L13.0667 14.8246C12.4008 14.466 11.5992 14.466 10.9333 14.8246L9.91074 15.3752M9.91074 15.3752L5.25 17.8849M21.75 19.5002C21.75 20.7429 20.7426 21.7502 19.5 21.7502H4.5C3.25736 21.7502 2.25 20.7429 2.25 19.5002L2.25 8.84412C2.25 8.01639 2.70448 7.25549 3.43328 6.86307L10.9333 2.8246C11.5992 2.46602 12.4008 2.46602 13.0667 2.8246L20.5667 6.86307C21.2955 7.2555 21.75 8.01639 21.75 8.84413V19.5002Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M19.5 22.5002C21.1569 22.5002 22.5 21.1571 22.5 19.5002V11.3264L15.6212 15.3483L19.1056 17.2245C19.4703 17.4209 19.6067 17.8757 19.4104 18.2404C19.214 18.6051 18.7591 18.7416 18.3944 18.5452L12.7112 15.485C12.2672 15.2459 11.7328 15.2459 11.2889 15.485L5.60558 18.5452C5.24087 18.7416 4.78603 18.6051 4.58965 18.2404C4.39327 17.8757 4.52972 17.4209 4.89442 17.2245L8.37878 15.3483L1.5 11.3264V19.5002C1.5 21.1571 2.84315 22.5002 4.5 22.5002L19.5 22.5002Z"
      fill={color}
    />
    <path
      d="M1.5 9.58886V8.84412C1.5 7.74048 2.10597 6.72595 3.0777 6.20271L10.5777 2.16425C11.4656 1.68614 12.5344 1.68614 13.4223 2.16425L20.9223 6.20271C21.894 6.72595 22.5 7.74048 22.5 8.84413V9.58886L14.0742 14.5153L13.4223 14.1643C12.5344 13.6862 11.4656 13.6862 10.5777 14.1643L9.92585 14.5153L1.5 9.58886Z"
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
@prop export let ariaLabel = 'envelope open';
-->
