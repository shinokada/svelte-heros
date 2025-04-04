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
    ariaLabel = 'library',
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
      d="M8 14V17M12 14V17M16 14V17M3 21H21M3 10H21M3 7L12 3L21 7M4 10H20V21H4V10Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.4963 2.13176C10.1889 1.95608 9.81146 1.95608 9.50403 2.13176L2.50403 6.13176C2.02451 6.40577 1.85792 7.01662 2.13193 7.49614C2.31631 7.81881 2.65322 7.99979 3 8.00017V15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15V8.00017C17.3469 7.99991 17.684 7.81892 17.8684 7.49614C18.1424 7.01662 17.9758 6.40577 17.4963 6.13176L10.4963 2.13176ZM6 9C5.44772 9 5 9.44772 5 10V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13V10C7 9.44772 6.55228 9 6 9ZM9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10V13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13V10ZM14 9C13.4477 9 13 9.44772 13 10V13C13 13.5523 13.4477 14 14 14C14.5523 14 15 13.5523 15 13V10C15 9.44772 14.5523 9 14 9Z"
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
@prop ariaLabel = 'library'
@prop ...restProps
-->
