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
  export let ariaLabel = 'calendar days';
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
      d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.25736 4.00736 5.25 5.25 5.25H18.75C19.9926 5.25 21 6.25736 21 7.5V18.75M3 18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75M3 18.75V11.25C3 10.0074 4.00736 9 5.25 9H18.75C19.9926 9 21 10.0074 21 11.25V18.75M12 12.75H12.0075V12.7575H12V12.75ZM12 15H12.0075V15.0075H12V15ZM12 17.25H12.0075V17.2575H12V17.25ZM9.75 15H9.7575V15.0075H9.75V15ZM9.75 17.25H9.7575V17.2575H9.75V17.25ZM7.5 15H7.5075V15.0075H7.5V15ZM7.5 17.25H7.5075V17.2575H7.5V17.25ZM14.25 12.75H14.2575V12.7575H14.25V12.75ZM14.25 15H14.2575V15.0075H14.25V15ZM14.25 17.25H14.2575V17.2575H14.25V17.25ZM16.5 12.75H16.5075V12.7575H16.5V12.75ZM16.5 15H16.5075V15.0075H16.5V15Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M12.75 12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75C11.25 12.3358 11.5858 12 12 12C12.4142 12 12.75 12.3358 12.75 12.75Z"
      fill={color}
    />
    <path
      d="M7.5 15.75C7.91421 15.75 8.25 15.4142 8.25 15C8.25 14.5858 7.91421 14.25 7.5 14.25C7.08579 14.25 6.75 14.5858 6.75 15C6.75 15.4142 7.08579 15.75 7.5 15.75Z"
      fill={color}
    />
    <path
      d="M8.25 17.25C8.25 17.6642 7.91421 18 7.5 18C7.08579 18 6.75 17.6642 6.75 17.25C6.75 16.8358 7.08579 16.5 7.5 16.5C7.91421 16.5 8.25 16.8358 8.25 17.25Z"
      fill={color}
    />
    <path
      d="M9.75 15.75C10.1642 15.75 10.5 15.4142 10.5 15C10.5 14.5858 10.1642 14.25 9.75 14.25C9.33579 14.25 9 14.5858 9 15C9 15.4142 9.33579 15.75 9.75 15.75Z"
      fill={color}
    />
    <path
      d="M10.5 17.25C10.5 17.6642 10.1642 18 9.75 18C9.33579 18 9 17.6642 9 17.25C9 16.8358 9.33579 16.5 9.75 16.5C10.1642 16.5 10.5 16.8358 10.5 17.25Z"
      fill={color}
    />
    <path
      d="M12 15.75C12.4142 15.75 12.75 15.4142 12.75 15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75Z"
      fill={color}
    />
    <path
      d="M12.75 17.25C12.75 17.6642 12.4142 18 12 18C11.5858 18 11.25 17.6642 11.25 17.25C11.25 16.8358 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.8358 12.75 17.25Z"
      fill={color}
    />
    <path
      d="M14.25 15.75C14.6642 15.75 15 15.4142 15 15C15 14.5858 14.6642 14.25 14.25 14.25C13.8358 14.25 13.5 14.5858 13.5 15C13.5 15.4142 13.8358 15.75 14.25 15.75Z"
      fill={color}
    />
    <path
      d="M15 17.25C15 17.6642 14.6642 18 14.25 18C13.8358 18 13.5 17.6642 13.5 17.25C13.5 16.8358 13.8358 16.5 14.25 16.5C14.6642 16.5 15 16.8358 15 17.25Z"
      fill={color}
    />
    <path
      d="M16.5 15.75C16.9142 15.75 17.25 15.4142 17.25 15C17.25 14.5858 16.9142 14.25 16.5 14.25C16.0858 14.25 15.75 14.5858 15.75 15C15.75 15.4142 16.0858 15.75 16.5 15.75Z"
      fill={color}
    />
    <path
      d="M15 12.75C15 13.1642 14.6642 13.5 14.25 13.5C13.8358 13.5 13.5 13.1642 13.5 12.75C13.5 12.3358 13.8358 12 14.25 12C14.6642 12 15 12.3358 15 12.75Z"
      fill={color}
    />
    <path
      d="M16.5 13.5C16.9142 13.5 17.25 13.1642 17.25 12.75C17.25 12.3358 16.9142 12 16.5 12C16.0858 12 15.75 12.3358 15.75 12.75C15.75 13.1642 16.0858 13.5 16.5 13.5Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.75 2.25C7.16421 2.25 7.5 2.58579 7.5 3V4.5H16.5V3C16.5 2.58579 16.8358 2.25 17.25 2.25C17.6642 2.25 18 2.58579 18 3V4.5H18.75C20.4069 4.5 21.75 5.84315 21.75 7.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V7.5C2.25 5.84315 3.59315 4.5 5.25 4.5H6V3C6 2.58579 6.33579 2.25 6.75 2.25ZM20.25 11.25C20.25 10.4216 19.5784 9.75 18.75 9.75H5.25C4.42157 9.75 3.75 10.4216 3.75 11.25V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V11.25Z"
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
@prop export let ariaLabel = 'calendar days';
-->
