<script lang="ts">
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
    variation?: 'solid' | 'outline';
    viewBox?: string;
  }

  import { getContext } from 'svelte';
  const ctx: CtxType = getContext('iconCtx') ?? {};
  export let size: string = ctx.size || '24';
  export let role: string = ctx.role || 'img';
  export let color: string = ctx.color || 'currentColor';
  export let variation: 'solid' | 'outline' = ctx.variation || 'outline';
  export let viewBox: string = ctx.viewBox || '0 0 24 24';
  export let ariaLabel = 'finger print';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  fill="none"
  {viewBox}
  stroke-width="2"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outline'}
    <path
      d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 3.75C10.6231 3.75 9.34467 4.16143 8.27803 4.86788C7.93269 5.09661 7.46733 5.00207 7.2386 4.65674C7.00988 4.3114 7.10441 3.84603 7.44975 3.61731C8.75441 2.7532 10.3196 2.25 12 2.25C16.5563 2.25 20.25 5.94365 20.25 10.5C20.25 13.5153 19.6759 16.3983 18.6299 19.0442C18.4776 19.4294 18.0419 19.6182 17.6567 19.466C17.2714 19.3137 17.0826 18.8779 17.2349 18.4927C18.2127 16.0196 18.75 13.3235 18.75 10.5C18.75 6.77208 15.7279 3.75 12 3.75ZM6.15671 5.73863C6.50205 5.96735 6.59658 6.43272 6.36786 6.77806C5.6614 7.84469 5.24998 9.12316 5.24998 10.5C5.24998 12.1132 4.78653 13.6204 3.98459 14.893C3.76375 15.2434 3.30065 15.3485 2.95021 15.1276C2.59978 14.9068 2.49472 14.4437 2.71556 14.0933C3.37092 13.0533 3.74998 11.8222 3.74998 10.5C3.74998 8.81959 4.25318 7.25443 5.11728 5.94977C5.34601 5.60444 5.81137 5.5099 6.15671 5.73863ZM12 7.5C10.3431 7.5 8.99998 8.84315 8.99998 10.5C8.99998 13.5997 7.82401 16.4266 5.89462 18.5556C5.61647 18.8626 5.14217 18.8859 4.83524 18.6077C4.5283 18.3296 4.50497 17.8553 4.78312 17.5484C6.47217 15.6845 7.49998 13.2132 7.49998 10.5C7.49998 8.01472 9.51469 6 12 6C14.4853 6 16.5 8.01472 16.5 10.5C16.5 11.0472 16.4777 11.5897 16.4334 12.1264C16.3993 12.5392 16.037 12.8462 15.6242 12.8121C15.2114 12.778 14.9044 12.4157 14.9385 12.0029C14.9794 11.5078 15 11.0066 15 10.5C15 8.84315 13.6568 7.5 12 7.5ZM12.0003 9.75C12.4145 9.75 12.7503 10.0858 12.7503 10.5C12.7503 14.4082 11.3259 17.9855 8.96884 20.7384C8.69945 21.053 8.22599 21.0897 7.91135 20.8203C7.59671 20.5509 7.56004 20.0775 7.82943 19.7628C9.96257 17.2715 11.2503 14.0371 11.2503 10.5C11.2503 10.0858 11.5861 9.75 12.0003 9.75ZM15.2387 14.9331C15.637 15.0467 15.8678 15.4617 15.7542 15.8601C15.1843 17.8576 14.3041 19.7239 13.1693 21.4035C12.9374 21.7467 12.4712 21.837 12.128 21.6051C11.7848 21.3732 11.6945 20.907 11.9264 20.5637C12.974 19.0132 13.7861 17.291 14.3117 15.4485C14.4254 15.0502 14.8404 14.8194 15.2387 14.9331Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros.codewithshin.com)
## Props
@prop export let size: string = ctx.size || '24';
@prop export let role: string = ctx.role || 'img';
@prop export let color: string = ctx.color || 'currentColor';
@prop export let variation: 'solid' | 'outline' = ctx.variation || 'outline';
@prop export let viewBox: string = ctx.viewBox || '0 0 24 24';
@prop export let ariaLabel = 'finger print';
-->
