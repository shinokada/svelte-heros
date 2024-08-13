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
    ariaLabel = "support", 
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
    <path d="M18.364 5.63604L14.8284 9.17157M14.8284 14.8284L18.364 18.364M9.17157 9.17157L5.63604 5.63604M9.17157 14.8284L5.63604 18.364M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM16 10C16 10.9926 15.7589 11.929 15.3322 12.7537L13.8076 11.2291C13.9325 10.8419 14 10.4288 14 10C14 9.6714 13.9604 9.35205 13.8856 9.04648L15.4484 7.48368C15.8025 8.24895 16 9.1014 16 10ZM10.8345 13.9128L12.4156 15.4939C11.6765 15.8193 10.8594 16 10 16C9.1014 16 8.24895 15.8025 7.48368 15.4484L9.04648 13.8856C9.35205 13.9604 9.6714 14 10 14C10.2862 14 10.5653 13.9699 10.8345 13.9128ZM6.1581 11.1172C6.05517 10.7626 6 10.3878 6 10C6 9.66814 6.04041 9.34571 6.11659 9.03738L6.0378 9.11617L4.50608 7.58444C4.18066 8.32349 4 9.14065 4 10C4 10.9539 4.2226 11.8558 4.61868 12.6566L6.1581 11.1172ZM7.24631 4.66782C8.07101 4.24105 9.00735 4 10 4C10.9539 4 11.8558 4.2226 12.6566 4.61868L11.1172 6.1581C10.7626 6.05517 10.3878 6 10 6C9.57119 6 9.15814 6.06748 8.77088 6.19239L7.24631 4.66782ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="{color}"/> 
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
@prop ariaLabel = "support"
@prop ...restProps
-->
