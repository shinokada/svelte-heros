<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    variation = ctx.variation || 'outline',
    strokeWidth = ctx.strokeWidth || '1.5',
    title,
    desc,
    ariaLabel = 'receipt refund',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
  let viewBox: string | undefined = $state(undefined);
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
      d="M16 15V14C16 11.7909 14.2091 10 12 10H8M8 10L11 13M8 10L11 7M20 21V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V21L8 19L12 21L16 19L20 21Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 2C3.89543 2 3 2.89543 3 4V18L6.5 16L10 18L13.5 16L17 18V4C17 2.89543 16.1046 2 15 2H5ZM9.70711 5.70711C10.0976 5.31658 10.0976 4.68342 9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289L5.29289 7.29289C4.90237 7.68342 4.90237 8.31658 5.29289 8.70711L8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071C10.0976 11.3166 10.0976 10.6834 9.70711 10.2929L8.41421 9H10C11.6569 9 13 10.3431 13 12V13C13 13.5523 13.4477 14 14 14C14.5523 14 15 13.5523 15 13V12C15 9.23858 12.7614 7 10 7H8.41421L9.70711 5.70711Z"
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
@prop ariaLabel = 'receipt refund'
@prop ...restProps
-->
