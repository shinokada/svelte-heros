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
    ariaLabel = "key", 
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
    <path d="M15 7C16.1046 7 17 7.89543 17 9M21 9C21 12.3137 18.3137 15 15 15C14.3938 15 13.8087 14.9101 13.2571 14.7429L11 17H9V19H7V21H4C3.44772 21 3 20.5523 3 20V17.4142C3 17.149 3.10536 16.8946 3.29289 16.7071L9.25707 10.7429C9.08989 10.1914 9 9.60617 9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 8C18 11.3137 15.3137 14 12 14C11.3938 14 10.8087 13.9101 10.2571 13.7429L10 14L9 15L8 16H6V18H2V14L6.25707 9.74293C6.08989 9.19135 6 8.60617 6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8ZM12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C13.1046 6 14 6.89543 14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8C16 5.79086 14.2091 4 12 4Z" fill="{color}"/> 
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


