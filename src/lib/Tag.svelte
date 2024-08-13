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
    ariaLabel = "tag", 
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
    <path d="M7 7H7.01M7 3H12C12.5119 2.99999 13.0237 3.19525 13.4142 3.58579L20.4143 10.5858C21.1953 11.3668 21.1953 12.6332 20.4143 13.4142L13.4142 20.4142C12.6332 21.1953 11.3668 21.1953 10.5858 20.4142L3.58579 13.4142C3.19526 13.0237 3 12.5118 3 12V7C3 4.79086 4.79086 3 7 3Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L2.29289 10.7071C2.0976 10.5118 1.99997 10.2558 2 9.99988V5C2 3.34315 3.34315 2 5 2H10.0003C10.2561 2.00007 10.5119 2.0977 10.7071 2.29289L17.7071 9.29289ZM5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z" fill="{color}"/> 
  {/if}
</svg>



