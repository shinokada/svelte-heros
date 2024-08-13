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
    ariaLabel = "mail open", 
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
    <path d="M3 19V10.0704C3 9.40165 3.3342 8.77718 3.8906 8.40625L10.8906 3.73959C11.5624 3.29172 12.4376 3.29172 13.1094 3.73959L20.1094 8.40625C20.6658 8.77718 21 9.40165 21 10.0704V19M3 19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19M3 19L9.75 14.5M21 19L14.25 14.5M3 9.99999L9.75 14.5M21 9.99999L14.25 14.5M14.25 14.5L13.1094 15.2604C12.4376 15.7083 11.5624 15.7083 10.8906 15.2604L9.75 14.5" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
     <path fill-rule="evenodd" clip-rule="evenodd" d="M2.94 6.4124C2.35524 6.77788 2 7.41882 2 8.1084V15.9999C2 17.1045 2.89543 17.9999 4 17.9999H16C17.1046 17.9999 18 17.1045 18 15.9999V8.1084C18 7.41882 17.6448 6.77788 17.06 6.4124L11.06 2.6624C10.4115 2.25706 9.58854 2.25706 8.94 2.6624L2.94 6.4124ZM5.5547 8.83462C5.09517 8.52826 4.4743 8.65244 4.16795 9.11197C3.8616 9.5715 3.98577 10.1924 4.4453 10.4987L9.4453 13.8321C9.7812 14.056 10.2188 14.056 10.5547 13.8321L15.5547 10.4987C16.0142 10.1924 16.1384 9.5715 15.8321 9.11197C15.5257 8.65244 14.9048 8.52826 14.4453 8.83462L10 11.7981L5.5547 8.83462Z" fill="{color}"/> 
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
@prop ariaLabel = "mail open"
@prop ...restProps
-->
