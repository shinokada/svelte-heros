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
    ariaLabel = 'trending down',
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
      d="M13 17H21M21 17V9M21 17L13 9L9 13L3 7"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15H17C17.5523 15 18 14.5523 18 14V9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V11.5858L11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289L8 9.58579L3.70711 5.29289C3.31658 4.90237 2.68342 4.90237 2.29289 5.29289C1.90237 5.68342 1.90237 6.31658 2.29289 6.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L11 9.41421L14.5858 13H12Z"
      fill={color}
    />
  {/if}
</svg>
