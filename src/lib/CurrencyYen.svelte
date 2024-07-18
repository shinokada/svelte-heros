<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    variation = ctx.variation || 'outline',
    strokeWidth = ctx.strokeWidth || '1.5',
    title,
    desc,
    ariaLabel = 'currency yen',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
  let viewBox: string = $state('');
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
  viewBox="0 0 24 24"
  stroke-width={strokeWidth}
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  {#if variation === 'outline'}
    <path
      d="M9 8L12 13M12 13L15 8M12 13V17M9 12H15M9 15H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.85752 5.48541C7.57337 5.01183 6.95911 4.85827 6.48553 5.14241C6.01195 5.42656 5.85839 6.04082 6.14254 6.5144L7.63384 8.99991H7.00003C6.44774 8.99991 6.00003 9.44762 6.00003 9.99991C6.00003 10.5522 6.44774 10.9999 7.00003 10.9999H8.83384L9.00003 11.2769V11.9999H7.00003C6.44774 11.9999 6.00003 12.4476 6.00003 12.9999C6.00003 13.5522 6.44774 13.9999 7.00003 13.9999H9.00003V14.9999C9.00003 15.5522 9.44774 15.9999 10 15.9999C10.5523 15.9999 11 15.5522 11 14.9999V13.9999H13C13.5523 13.9999 14 13.5522 14 12.9999C14 12.4476 13.5523 11.9999 13 11.9999H11V11.2769L11.1662 10.9999H13C13.5523 10.9999 14 10.5522 14 9.99991C14 9.44762 13.5523 8.99991 13 8.99991H12.3662L13.8575 6.5144C14.1417 6.04082 13.9881 5.42656 13.5145 5.14241C13.0409 4.85827 12.4267 5.01183 12.1425 5.48541L10.0338 8.99991H9.96622L7.85752 5.48541Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop variation = ctx.variation || 'outline'
@prop strokeWidth = ctx.strokeWidth || '1.5'
@prop title
@prop desc
@prop ariaLabel = 'currency yen'
@prop ...restProps
-->
