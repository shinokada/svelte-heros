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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill="none"
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.58579 15.0001H4C3.44772 15.0001 3 14.5523 3 14.0001V10.0001C3 9.44777 3.44772 9.00005 4 9.00005H5.58579L10.2929 4.29294C10.9229 3.66298 12 4.10915 12 5.00005V19.0001C12 19.891 10.9229 20.3371 10.2929 19.7072L5.58579 15.0001Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 14L19 12M19 12L21 10M19 12L17 10M19 12L21 14"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.38268 3.07615C9.75636 3.23093 10 3.59557 10 4.00003V16C10 16.4045 9.75636 16.7691 9.38268 16.9239C9.00901 17.0787 8.57889 16.9931 8.29289 16.7071L4.58579 13H2C1.44772 13 1 12.5523 1 12V8.00003C1 7.44774 1.44772 7.00003 2 7.00003H4.58579L8.29289 3.29292C8.57889 3.00692 9.00901 2.92137 9.38268 3.07615Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.2929 7.29289C12.6834 6.90237 13.3166 6.90237 13.7071 7.29289L15 8.58579L16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711L16.4142 10L17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071C17.3166 13.0976 16.6834 13.0976 16.2929 12.7071L15 11.4142L13.7071 12.7071C13.3166 13.0976 12.6834 13.0976 12.2929 12.7071C11.9024 12.3166 11.9024 11.6834 12.2929 11.2929L13.5858 10L12.2929 8.70711C11.9024 8.31658 11.9024 7.68342 12.2929 7.29289Z"
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
