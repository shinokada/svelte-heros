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
      d="M11.9999 11C11.9999 14.5172 10.9911 17.7988 9.24707 20.5712M5.80688 18.5304C5.82459 18.5005 5.84273 18.4709 5.8613 18.4413C7.2158 16.2881 7.99991 13.7418 7.99991 11C7.99991 8.79086 9.79077 7 11.9999 7C14.209 7 15.9999 8.79086 15.9999 11C15.9999 12.017 15.9307 13.0186 15.7966 14M13.6792 20.8436C14.2909 19.6226 14.7924 18.3369 15.1707 17M19.0097 18.132C19.6547 15.8657 20 13.4732 20 11C20 6.58172 16.4183 3 12 3C10.5429 3 9.17669 3.38958 8 4.07026M3 15.3641C3.64066 14.0454 4 12.5646 4 11C4 9.54285 4.38958 8.17669 5.07026 7"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.62478 2.65458C7.6684 2.23213 8.80833 2 10 2C14.9706 2 19 6.02944 19 11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11C17 7.13401 13.866 4 10 4C9.06987 4 8.18446 4.18088 7.37522 4.50845C6.86328 4.71568 6.28029 4.46867 6.07306 3.95673C5.86584 3.4448 6.11285 2.8618 6.62478 2.65458ZM4.66173 4.95861C5.0758 5.32408 5.1152 5.95602 4.74974 6.37008C3.66007 7.60467 3 9.22404 3 11C3 11.5523 2.55228 12 2 12C1.44772 12 1 11.5523 1 11C1 8.71818 1.85048 6.63256 3.25026 5.04662C3.61573 4.63255 4.24766 4.59315 4.66173 4.95861Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 11C5 8.23858 7.23857 6 10 6C12.7614 6 15 8.23858 15 11C15 11.5523 14.5523 12 14 12C13.4477 12 13 11.5523 13 11C13 9.34315 11.6569 8 10 8C8.34315 8 7 9.34315 7 11C7 12.6772 6.65535 14.2764 6.03206 15.7288C5.81426 16.2363 5.22626 16.4712 4.71874 16.2533C4.21122 16.0355 3.97636 15.4475 4.19416 14.94C4.71247 13.7323 5 12.401 5 11ZM13.9212 13.0123C14.4666 13.0989 14.8387 13.6112 14.7521 14.1567C14.6205 14.9867 14.4378 15.7998 14.2072 16.5928C14.0531 17.1231 13.4982 17.428 12.9679 17.2739C12.4375 17.1197 12.1326 16.5648 12.2868 16.0345C12.494 15.3215 12.6584 14.5901 12.7768 13.8433C12.8634 13.2979 13.3757 12.9258 13.9212 13.0123Z"
      fill={color}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 10C10.5523 10 11 10.4477 11 11C11 13.2363 10.5406 15.3679 9.71014 17.3036C9.49239 17.8111 8.90441 18.046 8.39687 17.8283C7.88933 17.6105 7.65441 17.0225 7.87217 16.515C8.59772 14.8239 9 12.9602 9 11C9 10.4477 9.44771 10 10 10Z"
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
