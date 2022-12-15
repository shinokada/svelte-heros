<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 14C5.68629 14 3 16.6863 3 20V21H15V20C15 16.6863 12.3137 14 9 14Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M21 12L15 12" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = ` <path d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z" fill="${color}"/> <path d="M14 17C14 13.6863 11.3137 11 8 11C4.68629 11 2 13.6863 2 17H14Z" fill="${color}"/> <path d="M13 8C12.4477 8 12 8.44771 12 9C12 9.55229 12.4477 10 13 10H17C17.5523 10 18 9.55229 18 9C18 8.44771 17.5523 8 17 8H13Z" fill="${color}"/> `;
  $: switch (variation) {
    case 'outline':
      svgpath = svgoutline;
      viewBox = '0 0 24 24';
      break;
    case 'solid':
      svgpath = svgsolid;
      viewBox = '0 0 20 20';
      break;
    default:
      svgpath = svgoutline;
      viewBox = '0 0 24 24';
  }
  export let ariaLabel = 'user remove';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none"
  {viewBox}
  stroke-width="2"
  on:click
>
  {@html svgpath}
</svg>
