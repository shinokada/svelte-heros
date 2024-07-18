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
    ariaLabel = 'cursor click',
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
      d="M14.9998 15L12.9998 20L8.99983 9L19.9998 13L14.9998 15ZM14.9998 15L19.9998 20M7.18806 2.23853L7.96452 5.1363M5.13606 7.96472L2.23828 7.18826M13.9495 4.05029L11.8282 6.17161M6.17146 11.8284L4.05014 13.9497"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.67187 1.91147C6.52893 1.37801 5.9806 1.06142 5.44713 1.20437C4.91366 1.34731 4.59708 1.89565 4.74002 2.42911L4.99884 3.39504C5.14178 3.9285 5.69012 4.24509 6.22359 4.10214C6.75705 3.9592 7.07363 3.41086 6.93069 2.8774L6.67187 1.91147ZM2.42923 4.7399C1.89577 4.59696 1.34743 4.91354 1.20449 5.44701C1.06155 5.98047 1.37813 6.52881 1.9116 6.67175L2.87752 6.93057C3.41099 7.07351 3.95932 6.75693 4.10227 6.22346C4.24521 5.69 3.92863 5.14166 3.39516 4.99872L2.42923 4.7399ZM11.2427 4.17149C11.6332 3.78097 11.6332 3.1478 11.2427 2.75728C10.8522 2.36676 10.219 2.36676 9.82847 2.75728L9.12136 3.46439C8.73084 3.85491 8.73084 4.48808 9.12136 4.8786C9.51189 5.26912 10.1451 5.26912 10.5356 4.8786L11.2427 4.17149ZM4.17162 11.2426L4.87872 10.5355C5.26925 10.1449 5.26925 9.51177 4.87872 9.12124C4.4882 8.73072 3.85503 8.73072 3.46451 9.12124L2.7574 9.82835C2.36688 10.2189 2.36688 10.852 2.7574 11.2426C3.14793 11.6331 3.78109 11.6331 4.17162 11.2426ZM7.37154 6.07152C7.00012 5.92295 6.5759 6.01002 6.29304 6.29289C6.01018 6.57575 5.92311 6.99997 6.07167 7.37138L10.0717 17.3714C10.2179 17.737 10.5651 17.9828 10.9586 17.9991C11.352 18.0155 11.7185 17.7994 11.8946 17.4472L13.2741 14.6882L16.293 17.7071C16.6836 18.0976 17.3167 18.0976 17.7073 17.7071C18.0978 17.3166 18.0978 16.6834 17.7073 16.2929L14.6883 13.2739L17.4474 11.8944C17.7996 11.7183 18.0157 11.3519 17.9993 10.9584C17.9829 10.565 17.7372 10.2178 17.3715 10.0715L7.37154 6.07152Z"
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
@prop ariaLabel = 'cursor click'
@prop ...restProps
-->
