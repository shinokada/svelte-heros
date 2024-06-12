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
    withEvents = ctx.withEvents || false, 
    title, 
    desc, 
    class: classname, 
    ariaLabel = "paper airplane", 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
  let viewBox: string = $state(''); 
  
</script>

{#snippet path()}
  {#if variation === 'outline'}
    <path d="M12 19L21 21L12 3L3 21L12 19ZM12 19V11" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path d="M10.8944 2.55279C10.725 2.214 10.3788 2 10 2C9.62124 2 9.27498 2.214 9.10558 2.55279L2.10558 16.5528C1.92823 16.9075 1.97724 17.3335 2.2305 17.6386C2.48376 17.9438 2.89342 18.0705 3.27473 17.9615L8.27472 16.533C8.70402 16.4103 9 16.0179 9 15.5714V11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V15.5714C11 16.0179 11.296 16.4103 11.7253 16.533L16.7253 17.9615C17.1066 18.0705 17.5163 17.9438 17.7695 17.6386C18.0228 17.3335 18.0718 16.9075 17.8944 16.5528L10.8944 2.55279Z" fill="{color}"/> 
  {/if}
{/snippet}

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill="none"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox = '0 0 24 24'
    stroke-width={strokeWidth}
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      {@render path()}
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
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
      {@render path()}
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com/)
## Props
@props: 
-->
