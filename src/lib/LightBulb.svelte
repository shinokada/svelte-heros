<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    variation = ctx.variation || 'outline',
    strokeWidth = ctx.strokeWidth || '1.5',
    title,
    desc,
    ariaLabel = 'light bulb',
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
      d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M11 3C11 2.44772 10.5523 2 10 2C9.44771 2 9 2.44772 9 3V4C9 4.55228 9.44771 5 10 5C10.5523 5 11 4.55228 11 4V3Z"
      fill={color}
    />
    <path
      d="M15.6568 5.75731C16.0473 5.36678 16.0473 4.73362 15.6568 4.34309C15.2663 3.95257 14.6331 3.95257 14.2426 4.34309L13.5355 5.0502C13.145 5.44072 13.145 6.07389 13.5355 6.46441C13.926 6.85494 14.5592 6.85494 14.9497 6.46441L15.6568 5.75731Z"
      fill={color}
    />
    <path
      d="M18 10C18 10.5523 17.5523 11 17 11H16C15.4477 11 15 10.5523 15 10C15 9.44771 15.4477 9 16 9H17C17.5523 9 18 9.44771 18 10Z"
      fill={color}
    />
    <path
      d="M5.05019 6.46443C5.44071 6.85496 6.07388 6.85496 6.4644 6.46443C6.85493 6.07391 6.85493 5.44074 6.4644 5.05022L5.7573 4.34311C5.36677 3.95259 4.73361 3.95259 4.34308 4.34311C3.95256 4.73363 3.95256 5.3668 4.34308 5.75732L5.05019 6.46443Z"
      fill={color}
    />
    <path
      d="M5 10C5 10.5523 4.55228 11 4 11H3C2.44772 11 2 10.5523 2 10C2 9.44771 2.44772 9 3 9H4C4.55228 9 5 9.44771 5 10Z"
      fill={color}
    />
    <path d="M8 16V15H12V16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16Z" fill={color} />
    <path
      d="M12.0009 14C12.0155 13.6597 12.2076 13.3537 12.4768 13.1411C13.4046 12.4086 14 11.2738 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 11.2738 6.59545 12.4086 7.52319 13.1411C7.79241 13.3537 7.98451 13.6597 7.99911 14H12.0009Z"
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
@prop ariaLabel = 'light bulb'
@prop ...restProps
-->
