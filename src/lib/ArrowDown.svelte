<script lang="ts">
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  export let viewBox: string = '0 0 24 24';
  export let ariaLabel = 'arrow down';
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
      d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21L12 3"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3L12.75 19.1893L18.9697 12.9697C19.2626 12.6768 19.7374 12.6768 20.0303 12.9697C20.3232 13.2626 20.3232 13.7374 20.0303 14.0303L12.5303 21.5303C12.2374 21.8232 11.7626 21.8232 11.4697 21.5303L3.96967 14.0303C3.67678 13.7374 3.67678 13.2626 3.96967 12.9697C4.26256 12.6768 4.73744 12.6768 5.03033 12.9697L11.25 19.1893L11.25 3C11.25 2.58579 11.5858 2.25 12 2.25Z"
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
@prop export let ariaLabel = 'arrow down';
-->
