<script lang="ts">
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'minus';
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
      d="M19.5 12L4.5 12"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.75 12C3.75 11.5858 4.08579 11.25 4.5 11.25L19.5 11.25C19.9142 11.25 20.25 11.5858 20.25 12C20.25 12.4142 19.9142 12.75 19.5 12.75L4.5 12.75C4.08579 12.75 3.75 12.4142 3.75 12Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let variation: 'solid' | 'outline' = 'outline';
@prop export let viewBox: string = '0 0 24 24';
@prop export let ariaLabel = 'minus';
-->
