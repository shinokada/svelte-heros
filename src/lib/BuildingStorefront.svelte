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
  export let ariaLabel = 'building storefront';
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
      d="M13.5 20.9999V13.4999C13.5 13.0856 13.8358 12.7499 14.25 12.7499H17.25C17.6642 12.7499 18 13.0856 18 13.4999V20.9999M13.5 20.9999H2.36088M13.5 20.9999H18M18 20.9999H21.6391M20.25 20.9999V9.34863M3.75 20.9999V9.34888M3.75 9.34888C4.89729 10.012 6.38977 9.85281 7.37132 8.87127C7.41594 8.82665 7.45886 8.78097 7.50008 8.73432C8.04979 9.35708 8.85402 9.74986 9.75 9.74986C10.646 9.74986 11.4503 9.35704 12 8.73423C12.5497 9.35704 13.354 9.74986 14.25 9.74986C15.1459 9.74986 15.9501 9.35713 16.4998 8.73443C16.541 8.78101 16.5838 8.82662 16.6284 8.87118C17.61 9.85281 19.1027 10.012 20.25 9.34863M3.75 9.34888C3.52788 9.2205 3.31871 9.06129 3.12868 8.87127C1.95711 7.69969 1.95711 5.8002 3.12868 4.62863L4.31797 3.43934C4.59927 3.15804 4.9808 3 5.37863 3H18.6212C19.019 3 19.4005 3.15804 19.6818 3.43934L20.871 4.62854C22.0426 5.80011 22.0426 7.69961 20.871 8.87118C20.6811 9.06113 20.472 9.22028 20.25 9.34863M6.75 17.9999H10.5C10.9142 17.9999 11.25 17.6641 11.25 17.2499V13.4999C11.25 13.0856 10.9142 12.7499 10.5 12.7499H6.75C6.33579 12.7499 6 13.0856 6 13.4999V17.2499C6 17.6641 6.33579 17.9999 6.75 17.9999Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M5.22335 2.25C4.72607 2.25 4.24916 2.44754 3.89752 2.79917L2.59835 4.09835C1.13388 5.56282 1.13388 7.93718 2.59835 9.40165C3.93551 10.7388 6.03124 10.8551 7.50029 9.75038C8.12669 10.2206 8.90598 10.5 9.75 10.5C10.5941 10.5 11.3736 10.2205 12 9.75016C12.6264 10.2205 13.4059 10.5 14.25 10.5C15.094 10.5 15.8733 10.2206 16.4997 9.75038C17.9688 10.8551 20.0645 10.7388 21.4017 9.40165C22.8661 7.93718 22.8661 5.56282 21.4017 4.09835L20.1025 2.79918C19.7508 2.44755 19.2739 2.25 18.7767 2.25L5.22335 2.25Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 20.25V11.4951C4.42021 12.1686 6.07989 12.1681 7.50044 11.4944C8.18265 11.8183 8.94611 12 9.75 12C10.5541 12 11.3177 11.8182 12 11.4942C12.6823 11.8182 13.4459 12 14.25 12C15.0539 12 15.8173 11.8183 16.4996 11.4944C17.9201 12.1681 19.5798 12.1686 21 11.4951V20.25H21.75C22.1642 20.25 22.5 20.5858 22.5 21C22.5 21.4142 22.1642 21.75 21.75 21.75H2.25C1.83579 21.75 1.5 21.4142 1.5 21C1.5 20.5858 1.83579 20.25 2.25 20.25H3ZM6 14.25C6 13.8358 6.33579 13.5 6.75 13.5H9.75C10.1642 13.5 10.5 13.8358 10.5 14.25V17.25C10.5 17.6642 10.1642 18 9.75 18H6.75C6.33579 18 6 17.6642 6 17.25V14.25ZM14.25 13.5C13.8358 13.5 13.5 13.8358 13.5 14.25V19.5C13.5 19.9142 13.8358 20.25 14.25 20.25H17.25C17.6642 20.25 18 19.9142 18 19.5V14.25C18 13.8358 17.6642 13.5 17.25 13.5H14.25Z"
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
@prop export let ariaLabel = 'building storefront';
-->
