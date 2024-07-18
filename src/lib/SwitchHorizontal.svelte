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
    ariaLabel = 'switch horizontal',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
  let viewBox: string = $state('');
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
      d="M8 7L20 7M20 7L16 3M20 7L16 11M16 17L4 17M4 17L8 21M4 17L8 13"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M8 5C7.44772 5 7 5.44771 7 6C7 6.55228 7.44772 7 8 7L13.5858 7L12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711C12.6834 10.0976 13.3166 10.0976 13.7071 9.70711L16.7071 6.70711C16.8946 6.51957 17 6.26522 17 6C17 5.73478 16.8946 5.48043 16.7071 5.29289L13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289C11.9024 2.68342 11.9024 3.31658 12.2929 3.70711L13.5858 5L8 5Z"
      fill={color}
    />
    <path
      d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13L6.41421 13L7.70711 11.7071C8.09763 11.3166 8.09763 10.6834 7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929L3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14C3 14.2652 3.10536 14.5196 3.29289 14.7071L6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071C8.09763 17.3166 8.09763 16.6834 7.70711 16.2929L6.41421 15L12 15Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com/)
## Props
@props: 
-->
