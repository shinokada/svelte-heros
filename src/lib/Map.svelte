<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M9 20L3.55279 17.2764C3.214 17.107 3 16.7607 3 16.382V5.61803C3 4.87465 3.78231 4.39116 4.44721 4.72361L9 7M9 20L15 17M9 20V7M15 17L19.5528 19.2764C20.2177 19.6088 21 19.1253 21 18.382V7.61803C21 7.23926 20.786 6.893 20.4472 6.72361L15 4M15 17V4M15 4L9 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.58582L8 5.58582V18.4142L12 14.4142V1.58582Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.70711 3.29292C3.42111 3.00692 2.99099 2.92137 2.61732 3.07615C2.24364 3.23093 2 3.59557 2 4.00003V14C2 14.2652 2.10536 14.5196 2.29289 14.7071L6 18.4142V5.58582L3.70711 3.29292Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 5.29292L14 1.58582V14.4142L16.2929 16.7071C16.5789 16.9931 17.009 17.0787 17.3827 16.9239C17.7564 16.7691 18 16.4045 18 16V6.00003C18 5.73481 17.8946 5.48046 17.7071 5.29292Z" fill="${color}"/> `;
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
  export let ariaLabel = 'map';
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
