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
  export let ariaLabel = 'backspace';
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
      d="M12 9.75L14.25 12M14.25 12L16.5 14.25M14.25 12L16.5 9.75M14.25 12L12 14.25M9.42049 19.1705L3.04549 12.7955C2.60615 12.3562 2.60615 11.6438 3.04549 11.2045L9.42049 4.82951C9.63147 4.61853 9.91762 4.5 10.216 4.5L19.5 4.5C20.7426 4.5 21.75 5.50736 21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H10.216C9.91762 19.5 9.63147 19.3815 9.42049 19.1705Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.515 10.6742C1.78276 11.4064 1.78276 12.5936 2.51499 13.3258L8.89 19.7008C9.24163 20.0525 9.71854 20.25 10.2158 20.25H19.4998C21.1567 20.25 22.4998 18.9069 22.4998 17.25V6.75C22.4998 5.09315 21.1567 3.75 19.4998 3.75L10.2158 3.75C9.71854 3.75 9.24163 3.94754 8.89 4.29917L2.515 10.6742ZM12.5303 9.21967C12.2374 8.92678 11.7626 8.92678 11.4697 9.21967C11.1768 9.51256 11.1768 9.98744 11.4697 10.2803L13.1893 12L11.4697 13.7197C11.1768 14.0126 11.1768 14.4874 11.4697 14.7803C11.7626 15.0732 12.2374 15.0732 12.5303 14.7803L14.25 13.0607L15.9697 14.7803C16.2626 15.0732 16.7374 15.0732 17.0303 14.7803C17.3232 14.4874 17.3232 14.0126 17.0303 13.7197L15.3107 12L17.0303 10.2803C17.3232 9.98744 17.3232 9.51256 17.0303 9.21967C16.7374 8.92678 16.2626 8.92678 15.9697 9.21967L14.25 10.9393L12.5303 9.21967Z"
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
@prop export let ariaLabel = 'backspace';
-->
