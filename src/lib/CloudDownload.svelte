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
    ariaLabel = 'cloud download',
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
      d="M7 16C4.79086 16 3 14.2091 3 12C3 10.0929 4.33457 8.4976 6.12071 8.09695C6.04169 7.74395 6 7.37684 6 7C6 4.23858 8.23858 2 11 2C13.4193 2 15.4373 3.71825 15.9002 6.00098C15.9334 6.00033 15.9666 6 16 6C18.7614 6 21 8.23858 21 11C21 13.419 19.2822 15.4367 17 15.9M9 19L12 22M12 22L15 19M12 22V10"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 9.5C2 11.433 3.567 13 5.5 13H9V15.5858L7.70711 14.2929C7.31658 13.9024 6.68342 13.9024 6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071L9.29289 18.7071C9.68342 19.0976 10.3166 19.0976 10.7071 18.7071L13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929C13.3166 13.9024 12.6834 13.9024 12.2929 14.2929L11 15.5858V13H13.5C15.9853 13 18 10.9853 18 8.5C18 6.01472 15.9853 4 13.5 4C13.2912 4 13.0857 4.01422 12.8845 4.04175C12.4551 2.29538 10.8788 1 9 1C6.79086 1 5 2.79086 5 5C5 5.35223 5.04553 5.69382 5.13102 6.01922C3.37146 6.20358 2 7.69163 2 9.5ZM11 13H9V8C9 7.44772 9.44772 7 10 7C10.5523 7 11 7.44772 11 8V13Z"
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
@prop ariaLabel = 'cloud download'
@prop ...restProps
-->
