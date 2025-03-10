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
    ariaLabel = 'hand',
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
      d="M7 11.5V14M7 11.5V5.5C7 4.67157 7.67157 4 8.5 4C9.32843 4 10 4.67157 10 5.5M7 11.5C7 10.6716 6.32843 10 5.5 10C4.67157 10 4 10.6716 4 11.5V13.5C4 17.6421 7.35786 21 11.5 21C15.6421 21 19 17.6421 19 13.5V8.5C19 7.67157 18.3284 7 17.5 7C16.6716 7 16 7.67157 16 8.5M10 5.5V11M10 5.5V4.5C10 3.67157 10.6716 3 11.5 3C12.3284 3 13 3.67157 13 4.5V5.5M13 5.5V11M13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5V8.5M16 8.5V11"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3V8V8.5C11 8.77614 11.2239 9 11.5 9C11.7761 9 12 8.77614 12 8.5V8V4C12 3.44772 12.4477 3 13 3C13.5523 3 14 3.44772 14 4V8V8.5C14 8.77614 14.2239 9 14.5 9C14.7761 9 15 8.77614 15 8.5V8V6C15 5.44772 15.4477 5 16 5C16.5523 5 17 5.44772 17 6V11C17 14.866 13.866 18 10 18C6.13401 18 3 14.866 3 11V9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V11V11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5V11V10V8V4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4V8V8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5V8V3Z"
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
@prop ariaLabel = 'hand'
@prop ...restProps
-->
