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
    ariaLabel = 'wifi',
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
      d="M8.11107 16.4039C10.259 14.256 13.7414 14.256 15.8892 16.4039M12.0002 20H12.0102M4.92913 12.9289C8.83437 9.02371 15.166 9.0237 19.0713 12.9289M1.39355 9.3934C7.25142 3.53553 16.7489 3.53553 22.6068 9.3934"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.7781 8.22183C13.4823 3.92606 6.51752 3.92606 2.22176 8.22183C1.83123 8.61235 1.19807 8.61235 0.807542 8.22183C0.417017 7.8313 0.417017 7.19814 0.807542 6.80761C5.88436 1.7308 14.1155 1.7308 19.1923 6.80761C19.5828 7.19814 19.5828 7.8313 19.1923 8.22183C18.8018 8.61235 18.1686 8.61235 17.7781 8.22183ZM14.9497 11.0503C12.216 8.31659 7.78385 8.31659 5.05018 11.0503C4.65966 11.4408 4.02649 11.4408 3.63597 11.0503C3.24544 10.6597 3.24544 10.0266 3.63597 9.63605C7.15069 6.12133 12.8492 6.12133 16.3639 9.63605C16.7544 10.0266 16.7544 10.6597 16.3639 11.0503C15.9734 11.4408 15.3402 11.4408 14.9497 11.0503ZM12.1213 13.8787C10.9497 12.7071 9.05018 12.7071 7.87861 13.8787C7.48809 14.2692 6.85492 14.2692 6.4644 13.8787C6.07387 13.4882 6.07387 12.855 6.4644 12.4645C8.41702 10.5119 11.5828 10.5119 13.5355 12.4645C13.926 12.855 13.926 13.4882 13.5355 13.8787C13.1449 14.2692 12.5118 14.2692 12.1213 13.8787ZM8.99993 16C8.99993 15.4477 9.44765 15 9.99993 15H10.0099C10.5622 15 11.0099 15.4477 11.0099 16C11.0099 16.5523 10.5622 17 10.0099 17H9.99993C9.44765 17 8.99993 16.5523 8.99993 16Z"
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
@prop ariaLabel = 'wifi'
@prop ...restProps
-->
