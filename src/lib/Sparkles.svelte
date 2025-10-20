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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill="none"
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
      d="M5 3V7M3 5H7M6 17V21M4 19H8M13 3L15.2857 9.85714L21 12L15.2857 14.1429L13 21L10.7143 14.1429L5 12L10.7143 9.85714L13 3Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 2C5.55228 2 6 2.44772 6 3V4H7C7.55228 4 8 4.44772 8 5C8 5.55228 7.55228 6 7 6H6V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V6H3C2.44772 6 2 5.55228 2 5C2 4.44772 2.44772 4 3 4H4V3C4 2.44772 4.44772 2 5 2ZM5 12C5.55228 12 6 12.4477 6 13V14H7C7.55228 14 8 14.4477 8 15C8 15.5523 7.55228 16 7 16H6V17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17V16H3C2.44772 16 2 15.5523 2 15C2 14.4477 2.44772 14 3 14H4V13C4 12.4477 4.44772 12 5 12Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9999 2C12.4537 2 12.8505 2.30548 12.9667 2.74411L14.1459 7.19893L17.4997 9.13381C17.8092 9.31241 17.9999 9.64262 17.9999 10C17.9999 10.3574 17.8092 10.6876 17.4997 10.8662L14.1459 12.8011L12.9667 17.2559C12.8505 17.6945 12.4537 18 11.9999 18C11.5462 18 11.1493 17.6945 11.0332 17.2559L9.85402 12.8011L6.50027 10.8662C6.19072 10.6876 6 10.3574 6 10C6 9.64262 6.19072 9.31241 6.50027 9.13382L9.85402 7.19893L11.0332 2.74411C11.1493 2.30548 11.5462 2 11.9999 2Z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
