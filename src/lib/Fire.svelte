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
    ariaLabel = 'fire',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
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
      d="M17.6569 18.6568C14.5327 21.781 9.46734 21.781 6.34315 18.6568C4.78105 17.0947 4 15.0474 4 13C4 10.9526 4.78105 8.90523 6.34315 7.34313C6.34315 7.34313 7.00004 8.99995 9.00004 9.99995C9.00004 7.99995 9.50004 4.99996 11.9859 3C14 5 16.0912 5.77745 17.6569 7.34313C19.219 8.90523 20 10.9526 20 13C20 15.0474 19.2189 17.0947 17.6569 18.6568Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.87868 16.1213C11.0503 17.2928 12.9497 17.2928 14.1213 16.1213C14.7071 15.5355 15 14.7677 15 14C15 13.2322 14.7071 12.4644 14.1213 11.8786C13.5392 11.2965 12.7775 11.0037 12.0146 11L10.9999 13.9999L9 14C9.00001 14.7677 9.2929 15.5355 9.87868 16.1213Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3945 2.55279C12.2662 2.29624 12.034 2.10713 11.7568 2.03351C11.4795 1.95988 11.184 2.00885 10.9454 2.16795C10.5995 2.39858 10.3314 2.72608 10.1229 3.04791C9.90855 3.37854 9.71986 3.76148 9.553 4.16366C9.21939 4.96773 8.93911 5.93195 8.71375 6.89778C8.42752 8.12448 8.21568 9.41687 8.10004 10.4776C7.61585 10.1512 7.33491 9.78527 7.15481 9.41104C6.82729 8.73046 6.75736 7.8772 6.75736 6.75739C6.75736 6.35292 6.51372 5.98829 6.14004 5.83351C5.76637 5.67872 5.33625 5.76428 5.05025 6.05028C3.68361 7.41692 3 9.21013 3 11C3 12.7899 3.68361 14.5831 5.05025 15.9498C7.78392 18.6834 12.2161 18.6834 14.9497 15.9498C16.3164 14.5831 17 12.7899 17 11C17 9.21013 16.3164 7.41692 14.9497 6.05028C14.3584 5.45889 13.9696 5.06453 13.6021 4.5828C13.239 4.10688 12.8781 3.51991 12.3945 2.55279ZM12.1213 15.1213C10.9497 16.2929 9.05025 16.2929 7.87868 15.1213C7.29289 14.5355 7 13.7678 7 13C7 13 7.87868 13.5 9.50005 13.5C9.50005 12.5 10 9.5 10.75 9C11.25 10 11.5355 10.2929 12.1213 10.8787C12.7071 11.4645 13 12.2322 13 13C13 13.7678 12.7071 14.5355 12.1213 15.1213Z"
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
@prop ariaLabel = 'fire'
@prop ...restProps
-->
