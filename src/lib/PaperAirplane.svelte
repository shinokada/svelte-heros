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
  export let ariaLabel = 'paper airplane';
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
      d="M5.99972 12.0005L3.2688 3.125C9.88393 5.04665 16.0276 8.07649 21.4855 12.0002C16.0276 15.924 9.884 18.9539 3.26889 20.8757L5.99972 12.0005ZM5.99972 12.0005L13.5 12.0005"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M3.47804 2.40479C3.2133 2.32789 2.92771 2.40242 2.73432 2.59889C2.54093 2.79536 2.47091 3.08209 2.55198 3.34558L4.98426 11.2505H13.5C13.9142 11.2505 14.25 11.5863 14.25 12.0005C14.25 12.4147 13.9142 12.7505 13.5 12.7505H4.98427L2.55207 20.6551C2.471 20.9186 2.54102 21.2054 2.73441 21.4018C2.92781 21.5983 3.2134 21.6728 3.47814 21.5959C10.1767 19.6499 16.3974 16.5819 21.9233 12.6092C22.1193 12.4683 22.2355 12.2416 22.2355 12.0002C22.2355 11.7588 22.1193 11.5322 21.9233 11.3913C16.3974 7.41866 10.1767 4.3507 3.47804 2.40479Z"
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
@prop export let ariaLabel = 'paper airplane';
-->
