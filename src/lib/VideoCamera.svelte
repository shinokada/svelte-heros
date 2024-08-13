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
    ariaLabel = "video camera", 
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
    <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path d="M2 6C2 4.89543 2.89543 4 4 4H10C11.1046 4 12 4.89543 12 6V14C12 15.1046 11.1046 16 10 16H4C2.89543 16 2 15.1046 2 14V6Z" fill="{color}"/> <path d="M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8V12C14 12.3788 14.214 12.725 14.5528 12.8944L16.5528 13.8944C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507C17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935C17.2309 5.96714 16.8628 5.95058 16.5528 6.10557L14.5528 7.10557Z" fill="{color}"/> 
  {/if}
</svg>



