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
    ariaLabel = 'code',
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
      d="M10 20L14 4M18 8L22 12L18 16M6 16L2 12L6 8"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3162 3.05134C12.8402 3.22599 13.1233 3.79231 12.9487 4.31625L8.94868 16.3163C8.77404 16.8402 8.20772 17.1234 7.68377 16.9487C7.15983 16.7741 6.87667 16.2077 7.05132 15.6838L11.0513 3.6838C11.226 3.15986 11.7923 2.8767 12.3162 3.05134ZM5.70711 6.29292C6.09763 6.68344 6.09763 7.31661 5.70711 7.70713L3.41421 10L5.70711 12.2929C6.09763 12.6834 6.09763 13.3166 5.70711 13.7071C5.31658 14.0977 4.68342 14.0977 4.29289 13.7071L1.29289 10.7071C0.902369 10.3166 0.902369 9.68344 1.29289 9.29292L4.29289 6.29292C4.68342 5.9024 5.31658 5.9024 5.70711 6.29292ZM14.2929 6.29292C14.6834 5.9024 15.3166 5.9024 15.7071 6.29292L18.7071 9.29292C19.0976 9.68344 19.0976 10.3166 18.7071 10.7071L15.7071 13.7071C15.3166 14.0977 14.6834 14.0977 14.2929 13.7071C13.9024 13.3166 13.9024 12.6834 14.2929 12.2929L16.5858 10L14.2929 7.70713C13.9024 7.31661 13.9024 6.68344 14.2929 6.29292Z"
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
@prop ariaLabel = 'code'
@prop ...restProps
-->
