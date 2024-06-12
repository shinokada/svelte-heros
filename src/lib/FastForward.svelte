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
    ariaLabel = "fast forward", 
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
    <path d="M11.9333 12.8C12.4667 12.4 12.4667 11.6 11.9333 11.2L6.6 7.19998C5.94076 6.70556 5 7.17594 5 7.99998L5 16C5 16.824 5.94076 17.2944 6.6 16.8L11.9333 12.8Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.9333 12.8C20.4667 12.4 20.4667 11.6 19.9333 11.2L14.6 7.19998C13.9408 6.70556 13 7.17594 13 7.99998L13 16C13 16.824 13.9408 17.2944 14.6 16.8L19.9333 12.8Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path d="M4.5547 5.16795C4.24784 4.96338 3.8533 4.94431 3.52814 5.11833C3.20298 5.29235 3 5.63121 3 6V14C3 14.3688 3.20298 14.7077 3.52814 14.8817C3.8533 15.0557 4.24784 15.0366 4.5547 14.8321L10 11.2019V14C10 14.3688 10.203 14.7077 10.5281 14.8817C10.8533 15.0557 11.2478 15.0366 11.5547 14.8321L17.5547 10.8321C17.8329 10.6466 18 10.3344 18 10C18 9.66565 17.8329 9.35342 17.5547 9.16795L11.5547 5.16795C11.2478 4.96338 10.8533 4.94431 10.5281 5.11833C10.203 5.29235 10 5.63121 10 6V8.79815L4.5547 5.16795Z" fill="{color}"/> 
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
