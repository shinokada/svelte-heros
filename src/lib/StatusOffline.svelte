<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    variation = ctx.variation || 'outline',
    strokeWidth = ctx.strokeWidth || '1.5',
    title,
    desc,
    ariaLabel = 'status offline',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill="none"
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  {#if variation === 'outline'}
    <path
      d="M18.364 5.63605C21.8787 9.15077 21.8787 14.8493 18.364 18.364M18.364 18.364L15.5355 15.5355M18.364 18.364L21 21M15.5355 8.46447C17.4882 10.4171 17.4882 13.5829 15.5355 15.5355M15.5355 15.5355L12.7071 12.7071M8.46447 15.5355C7.66839 14.7395 7.19687 13.7417 7.04991 12.7068M5.63604 18.364C3.13732 15.8652 2.41501 12.2628 3.46913 9.12598M11.2929 11.2929C11.4739 11.1119 11.7239 11 12 11C12.5523 11 13 11.4477 13 12C13 12.2761 12.8881 12.5261 12.7071 12.7071M11.2929 11.2929L3 3M11.2929 11.2929L12.7071 12.7071"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L9.21426 10.6285C9.26325 10.6906 9.31947 10.7469 9.38164 10.7958L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L17.0323 15.6181C19.8626 12.0844 19.6398 6.91177 16.3641 3.63603C15.9736 3.24551 15.3404 3.24551 14.9499 3.63603C14.5593 4.02656 14.5593 4.65972 14.9499 5.05025C17.4435 7.54386 17.6625 11.4508 15.6068 14.1926L14.172 12.7578C15.4582 10.8164 15.2461 8.17494 13.5357 6.46446C13.1451 6.07394 12.512 6.07394 12.1214 6.46446C11.7309 6.85498 11.7309 7.48815 12.1214 7.87867C13.0451 8.80233 13.2406 10.1784 12.7078 11.2936L10.7164 9.30219C10.7103 9.29595 10.7042 9.28979 10.6979 9.2837L3.70711 2.29289Z"
      fill={color}
    />
    <path
      d="M3.23766 8.1865C3.38012 7.65291 3.06305 7.10485 2.52946 6.96239C1.99586 6.81992 1.44781 7.137 1.30535 7.67059C0.5045 10.6701 1.27982 14.0074 3.63615 16.3637C4.02667 16.7542 4.65984 16.7542 5.05036 16.3637C5.44089 15.9732 5.44089 15.34 5.05036 14.9495C3.21924 13.1184 2.6134 10.5246 3.23766 8.1865Z"
      fill={color}
    />
    <path
      d="M7.40075 11.4995C7.12434 11.0214 6.51266 10.8578 6.03452 11.1343C5.55639 11.4107 5.39285 12.0223 5.66926 12.5005C5.88367 12.8714 6.14907 13.2198 6.46458 13.5353C6.85511 13.9258 7.48827 13.9258 7.8788 13.5353C8.26932 13.1448 8.26932 12.5116 7.8788 12.1211C7.68771 11.93 7.52865 11.7208 7.40075 11.4995Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop variation = ctx.variation || 'outline'
@prop strokeWidth = ctx.strokeWidth || '1.5'
@prop title
@prop desc
@prop ariaLabel = 'status offline'
@prop ...restProps
-->
