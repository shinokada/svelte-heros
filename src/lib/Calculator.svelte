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
    ariaLabel = "calculator", 
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
    <path d="M9 7H15M15 17V14M12 17H12.01M9 17H9.01M9 14H9.01M12 14H12.01M15 11H15.01M12 11H12.01M9 11H9.01M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.89543 2 4 2.89543 4 4V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V4C16 2.89543 15.1046 2 14 2H6ZM7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6H13C13.5523 6 14 5.55228 14 5C14 4.44772 13.5523 4 13 4H7ZM13 11C13.5523 11 14 11.4477 14 12V15C14 15.5523 13.5523 16 13 16C12.4477 16 12 15.5523 12 15V12C12 11.4477 12.4477 11 13 11ZM10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16H10.01C10.5623 16 11.01 15.5523 11.01 15C11.01 14.4477 10.5623 14 10.01 14H10ZM6 15C6 14.4477 6.44772 14 7 14H7.01C7.56228 14 8.01 14.4477 8.01 15C8.01 15.5523 7.56228 16 7.01 16H7C6.44772 16 6 15.5523 6 15ZM7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H7.01C7.56228 13 8.01 12.5523 8.01 12C8.01 11.4477 7.56228 11 7.01 11H7ZM9 12C9 11.4477 9.44772 11 10 11H10.01C10.5623 11 11.01 11.4477 11.01 12C11.01 12.5523 10.5623 13 10.01 13H10C9.44772 13 9 12.5523 9 12ZM13 8C12.4477 8 12 8.44772 12 9C12 9.55228 12.4477 10 13 10H13.01C13.5623 10 14.01 9.55228 14.01 9C14.01 8.44772 13.5623 8 13.01 8H13ZM9 9C9 8.44772 9.44772 8 10 8H10.01C10.5623 8 11.01 8.44772 11.01 9C11.01 9.55228 10.5623 10 10.01 10H10C9.44772 10 9 9.55228 9 9ZM7 8C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10H7.01C7.56228 10 8.01 9.55228 8.01 9C8.01 8.44772 7.56228 8 7.01 8H7Z" fill="{color}"/> 
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop variation = ctx.variation || "outline"
@prop strokeWidth = ctx.strokeWidth || '1.5'
@prop title
@prop desc
@prop ariaLabel = "calculator"
@prop ...restProps
-->
