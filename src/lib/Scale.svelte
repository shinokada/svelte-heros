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
    ariaLabel = 'scale',
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
      d="M3 6L6 7M6 7L3 16C4.77253 17.3334 7.22866 17.3334 9.00119 16M6 7L9.00006 16M6 7L12 5M18 7L21 6M18 7L15 16C16.7725 17.3334 19.2287 17.3334 21.0012 16M18 7L21.0001 16M18 7L12 5M12 3V5M12 21V5M12 21H9M12 21H15"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.99998 2C10.5523 2 11 2.44772 11 3V4.32297L14.9544 5.90474L16.5528 5.10557C17.0467 4.85858 17.6474 5.05881 17.8944 5.55279C18.1414 6.04676 17.9412 6.64744 17.4472 6.89443L16.214 7.51101L17.9522 12.9307C18.0727 13.3065 17.961 13.718 17.6669 13.9812C16.9599 14.614 16.0238 15 15 15C13.9761 15 13.0401 14.614 12.3331 13.9812C12.039 13.718 11.9272 13.3065 12.0477 12.9307L13.7631 7.58227L11 6.47703V16H13C13.5523 16 14 16.4477 14 17C14 17.5523 13.5523 18 13 18H6.99997C6.44769 18 5.99997 17.5523 5.99997 17C5.99997 16.4477 6.44769 16 6.99997 16H8.99997V6.47703L6.23689 7.58227L7.9522 12.9307C8.07272 13.3065 7.96096 13.718 7.66689 13.9812C6.95988 14.614 6.02381 15 4.99997 15C3.97614 15 3.04007 14.614 2.33306 13.9812C2.03899 13.718 1.92723 13.3065 2.04775 12.9307L3.78592 7.51101L2.55276 6.89443C2.05878 6.64744 1.85856 6.04676 2.10555 5.55279C2.35254 5.05881 2.95321 4.85858 3.44719 5.10557L5.04553 5.90474L8.99997 4.32297V3C8.99997 2.44772 9.44769 2 9.99998 2ZM4.99997 10.2745L4.18174 12.8258C4.43132 12.9378 4.708 13 4.99997 13C5.29194 13 5.56863 12.9378 5.81821 12.8258L4.99997 10.2745ZM15 10.2745L14.1817 12.8258C14.4313 12.9378 14.708 13 15 13C15.2919 13 15.5686 12.9378 15.8182 12.8258L15 10.2745Z"
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
@prop ariaLabel = 'scale'
@prop ...restProps
-->
