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
  export let ariaLabel = 'gift top';
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
      d="M12 3.75V20.25M2.25 12H21.75M6.375 17.25C9.06739 17.25 11.25 15.0674 11.25 12.375V12M17.625 17.25C14.9326 17.25 12.75 15.0674 12.75 12.375V12M3.75 20.25H20.25C21.0784 20.25 21.75 19.5784 21.75 18.75V5.25C21.75 4.42157 21.0784 3.75 20.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V18.75C2.25 19.5784 2.92157 20.25 3.75 20.25ZM16.3713 10.8107C14.9623 12.2197 12.1286 11.8714 12.1286 11.8714C12.1286 11.8714 11.7803 9.03772 13.1893 7.62871C14.068 6.75003 15.4926 6.75003 16.3713 7.62871C17.2499 8.50739 17.2499 9.93201 16.3713 10.8107ZM10.773 7.62874C12.182 9.03775 11.8336 11.8714 11.8336 11.8714C11.8336 11.8714 9 12.2197 7.59099 10.8107C6.71231 9.93204 6.71231 8.50742 7.59099 7.62874C8.46967 6.75006 9.89429 6.75006 10.773 7.62874Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M11.25 3V7.04639C10.0748 5.9271 8.21463 5.94444 7.06066 7.09841C5.91897 8.2401 5.88985 10.073 6.9733 11.25H1.5V5.25C1.5 4.00736 2.50736 3 3.75 3H11.25Z"
      fill={color}
    />
    <path
      d="M12.75 3V7.01102C13.927 5.92757 15.7599 5.95669 16.9016 7.09838C18.0433 8.24008 18.0724 10.073 16.9889 11.25H22.5V5.25C22.5 4.00736 21.4926 3 20.25 3H12.75Z"
      fill={color}
    />
    <path
      d="M22.5 12.75H13.5168C13.7063 14.8524 15.4732 16.5 17.625 16.5C18.0392 16.5 18.375 16.8358 18.375 17.25C18.375 17.6642 18.0392 18 17.625 18C15.5412 18 13.722 16.8669 12.75 15.1831V21H20.25C21.4926 21 22.5 19.9926 22.5 18.75V12.75Z"
      fill={color}
    />
    <path
      d="M11.25 21V15.1831C10.278 16.8669 8.45885 18 6.375 18C5.96079 18 5.625 17.6642 5.625 17.25C5.625 16.8358 5.96079 16.5 6.375 16.5C8.52677 16.5 10.2937 14.8524 10.4832 12.75H1.5V18.75C1.5 19.9926 2.50736 21 3.75 21H11.25Z"
      fill={color}
    />
    <path
      d="M11.0855 10.3536C11.1154 10.6514 11.1234 10.9286 11.1215 11.1592C10.8908 11.1611 10.6136 11.1532 10.3158 11.1232C9.48292 11.0394 8.63902 10.7981 8.12132 10.2804C7.53553 9.6946 7.53553 8.74485 8.12132 8.15907C8.70711 7.57328 9.65685 7.57328 10.2426 8.15907C10.7603 8.67677 11.0016 9.52067 11.0855 10.3536Z"
      fill={color}
    />
    <path
      d="M12.8768 10.3535C12.8468 10.6513 12.8389 10.9286 12.8408 11.1592C13.0714 11.1611 13.3486 11.1531 13.6464 11.1232C14.4793 11.0393 15.3232 10.7981 15.8409 10.2804C16.4267 9.69457 16.4267 8.74483 15.8409 8.15904C15.2551 7.57325 14.3054 7.57325 13.7196 8.15904C13.2019 8.67674 12.9606 9.52064 12.8768 10.3535Z"
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
@prop export let ariaLabel = 'gift top';
-->
