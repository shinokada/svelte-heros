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
    ariaLabel = "cake", 
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
    <path d="M21 15.5458C20.4771 15.5458 19.9542 15.6972 19.5 16C18.5917 16.6056 17.4083 16.6056 16.5 16C15.5917 15.3944 14.4083 15.3944 13.5 16C12.5917 16.6056 11.4083 16.6056 10.5 16C9.59167 15.3944 8.40833 15.3944 7.5 16C6.59167 16.6056 5.40833 16.6056 4.5 16C4.04584 15.6972 3.52292 15.5458 3 15.5458M9 6V8M12 6V8M15 6V8M9 3H9.01M12 3H12.01M15 3H15.01M21 21V14C21 12.8954 20.1046 12 19 12H5C3.89543 12 3 12.8954 3 14V21H21ZM18 12V10C18 8.89543 17.1046 8 16 8H8C6.89543 8 6 8.89543 6 10V12H18Z" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> 
  {:else}
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3C6 2.44772 6.44772 2 7 2H7.01C7.56228 2 8.01 2.44772 8.01 3C8.01 3.55228 7.56228 4 7.01 4H7C6.44772 4 6 3.55228 6 3ZM8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6V7C4.89543 7 4 7.89543 4 9V10C2.89543 10 2 10.8954 2 12V12.6833C2.36868 12.7866 2.72499 12.9482 3.0547 13.168C3.62713 13.5496 4.37287 13.5496 4.9453 13.168C6.18953 12.3385 7.81047 12.3385 9.0547 13.168C9.62713 13.5496 10.3729 13.5496 10.9453 13.168C12.1895 12.3385 13.8105 12.3385 15.0547 13.168C15.6271 13.5496 16.3729 13.5496 16.9453 13.168C17.275 12.9482 17.6313 12.7866 18 12.6833V12C18 10.8954 17.1046 10 16 10V9C16 7.89543 15.1046 7 14 7V6C14 5.44772 13.5523 5 13 5C12.4477 5 12 5.44772 12 6V7H11V6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6V7H8V6ZM18 14.8679C16.7633 15.6614 15.1714 15.6495 13.9453 14.8321C13.3729 14.4505 12.6271 14.4505 12.0547 14.8321C10.8105 15.6616 9.18953 15.6616 7.9453 14.8321C7.37287 14.4505 6.62713 14.4505 6.0547 14.8321C4.82863 15.6495 3.23675 15.6614 2 14.8679V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V14.8679ZM9 3C9 2.44772 9.44772 2 10 2H10.01C10.5623 2 11.01 2.44772 11.01 3C11.01 3.55228 10.5623 4 10.01 4H10C9.44772 4 9 3.55228 9 3ZM12 3C12 2.44772 12.4477 2 13 2H13.01C13.5623 2 14.01 2.44772 14.01 3C14.01 3.55228 13.5623 4 13.01 4H13C12.4477 4 12 3.55228 12 3Z" fill="{color}"/> 
  {/if}
</svg>



