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
    ariaLabel = 'beaker',
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
      d="M19.428 15.4282C19.1488 15.149 18.7932 14.9587 18.406 14.8812L16.0185 14.4037C14.7101 14.1421 13.3519 14.324 12.1585 14.9207L11.8411 15.0793C10.6477 15.676 9.28948 15.8579 7.98113 15.5963L6.04938 15.2099C5.39366 15.0788 4.71578 15.284 4.24294 15.7569M7.9998 4H15.9998L14.9998 5V10.1716C14.9998 10.702 15.2105 11.2107 15.5856 11.5858L20.5856 16.5858C21.8455 17.8457 20.9532 20 19.1714 20H4.82823C3.04642 20 2.15409 17.8457 3.41401 16.5858L8.41402 11.5858C8.78909 11.2107 8.9998 10.702 8.9998 10.1716V5L7.9998 4Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.99985 2C6.59539 2 6.23075 2.24364 6.07597 2.61732C5.92119 2.99099 6.00675 3.42111 6.29275 3.70711L6.99985 4.41421V8.17157C6.99985 8.43679 6.8945 8.69114 6.70696 8.87868L2.70696 12.8787C0.817066 14.7686 2.15556 18 4.82828 18H15.1714C17.8441 18 19.1826 14.7686 17.2927 12.8787L13.2927 8.87868C13.1052 8.69114 12.9999 8.43679 12.9999 8.17157V4.41421L13.707 3.70711C13.993 3.42111 14.0785 2.99099 13.9237 2.61732C13.769 2.24364 13.4043 2 12.9999 2H6.99985ZM8.99985 8.17157V4H10.9999V8.17157C10.9999 8.96722 11.3159 9.73028 11.8785 10.2929L12.9061 11.3204C12.1892 11.1537 11.4377 11.1874 10.7349 11.4217L10.2647 11.5784C9.44364 11.8521 8.55596 11.8521 7.73489 11.5784L7.17244 11.3909C7.13436 11.3782 7.09607 11.3667 7.05762 11.3564L8.12117 10.2929C8.68378 9.73028 8.99985 8.96722 8.99985 8.17157Z"
      fill={color}
    />
  {/if}
</svg>
