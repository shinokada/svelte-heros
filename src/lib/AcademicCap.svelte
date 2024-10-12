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
    ariaLabel = 'academic cap',
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
    <path d="M12 14L21 9L12 4L3 9L12 14Z" />
    <path
      d="M12 14L18.1591 10.5783C18.7017 11.9466 19 13.4384 19 14.9999C19 15.7013 18.9398 16.3885 18.8244 17.0569C16.2143 17.3106 13.849 18.4006 12 20.0555C10.151 18.4006 7.78571 17.3106 5.17562 17.0569C5.06017 16.3885 5 15.7012 5 14.9999C5 13.4384 5.29824 11.9466 5.84088 10.5782L12 14Z"
    />
    <path
      d="M12 14L21 9L12 4L3 9L12 14ZM12 14L18.1591 10.5783C18.7017 11.9466 19 13.4384 19 14.9999C19 15.7013 18.9398 16.3885 18.8244 17.0569C16.2143 17.3106 13.849 18.4006 12 20.0555C10.151 18.4006 7.78571 17.3106 5.17562 17.0569C5.06017 16.3885 5 15.7012 5 14.9999C5 13.4384 5.29824 11.9466 5.84088 10.5782L12 14ZM8 19.9999V12.5L12 10.2778"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      d="M10.3939 2.08085C10.1424 1.97305 9.85763 1.97305 9.60608 2.08085L2.60608 5.08085C2.2384 5.23843 2 5.59997 2 6C2 6.40003 2.2384 6.76157 2.60608 6.91915L5.25037 8.05241C5.34653 7.94347 5.46706 7.85473 5.60608 7.79515L9.60608 6.08087C10.1137 5.86331 10.7016 6.09846 10.9191 6.60609C11.1367 7.11372 10.9015 7.7016 10.3939 7.91916L7.66668 9.08797L9.60608 9.91915C9.85763 10.027 10.1424 10.027 10.3939 9.91915L17.3939 6.91915C17.7616 6.76157 18 6.40003 18 6C18 5.59997 17.7616 5.23843 17.3939 5.08085L10.3939 2.08085Z"
      fill={color}
    />
    <path
      d="M3.31004 9.39673L5 10.121V14.2226C4.65723 14.1449 4.30705 14.0867 3.95071 14.0494C3.48094 14.0001 3.1097 13.6289 3.06044 13.1591C3.02046 12.7778 3 12.391 3 11.9998C3 11.1033 3.10741 10.2315 3.31004 9.39673Z"
      fill={color}
    />
    <path
      d="M9.29996 16.5725C8.62708 15.9129 7.85167 15.3584 7 14.9351V10.9781L8.81824 11.7574C9.57289 12.0808 10.4271 12.0808 11.1818 11.7574L16.69 9.39673C16.8926 10.2315 17 11.1033 17 11.9998C17 12.391 16.9795 12.7778 16.9396 13.1591C16.8903 13.6289 16.5191 14.0001 16.0493 14.0494C13.9765 14.2667 12.1124 15.188 10.7 16.5725C10.3112 16.9537 9.68881 16.9537 9.29996 16.5725Z"
      fill={color}
    />
    <path
      d="M6 18C6.55228 18 7 17.5523 7 17V14.9351C6.37136 14.6227 5.70117 14.3817 5 14.2226V17C5 17.5523 5.44772 18 6 18Z"
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
@prop ariaLabel = 'academic cap'
@prop ...restProps
-->
