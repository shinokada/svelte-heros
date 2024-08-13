<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    variation = ctx.variation || "outline",
    strokeWidth = ctx.strokeWidth || '1.5',
    title, 
    desc, 
    ariaLabel = "currency euro", 
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
  viewBox = '0 0 24 24'
  stroke-width={strokeWidth}
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
  {#if variation === 'outline'}
    <path d="M14.1213 15.5355C12.9497 17.4882 11.0503 17.4882 9.87868 15.5355C8.70711 13.5829 8.70711 10.4171 9.87868 8.46447C11.0503 6.51184 12.9497 6.51184 14.1213 8.46447M8 10.5H12M8 13.5H12M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM8.73617 6.97896C9.20793 6.1927 9.69618 6 10 6C10.3038 6 10.7921 6.1927 11.2638 6.97896C11.548 7.45254 12.1622 7.60611 12.6358 7.32196C13.1094 7.03781 13.263 6.42355 12.9788 5.94997C12.279 4.78361 11.2317 4 10 4C8.76829 4 7.721 4.78361 7.02119 5.94997C6.73632 6.42475 6.51422 6.94939 6.35097 7.5H6C5.44772 7.5 5 7.94772 5 8.5C5 9.05228 5.44772 9.5 6 9.5H6.01337C6.00443 9.66702 6 9.83388 6 10C6 10.1661 6.00443 10.333 6.01337 10.5H6C5.44772 10.5 5 10.9477 5 11.5C5 12.0523 5.44772 12.5 6 12.5H6.35097C6.51422 13.0506 6.73632 13.5753 7.02119 14.05C7.721 15.2164 8.76829 16 10 16C11.2317 16 12.279 15.2164 12.9788 14.05C13.263 13.5764 13.1094 12.9622 12.6358 12.678C12.1622 12.3939 11.548 12.5475 11.2638 13.021C10.7921 13.8073 10.3038 14 10 14C9.69618 14 9.20793 13.8073 8.73617 13.021C8.63927 12.8595 8.5511 12.6851 8.47216 12.5H10C10.5523 12.5 11 12.0523 11 11.5C11 10.9477 10.5523 10.5 10 10.5H8.01695C8.00571 10.335 8 10.1681 8 10C8 9.83191 8.00571 9.66498 8.01695 9.5H10C10.5523 9.5 11 9.05228 11 8.5C11 7.94772 10.5523 7.5 10 7.5H8.47216C8.5511 7.31488 8.63927 7.14047 8.73617 6.97896Z" fill="{color}"/> 
  {/if}
</svg>



