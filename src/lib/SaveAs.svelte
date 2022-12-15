<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M17 16V18C17 19.1046 16.1046 20 15 20H5C3.89543 20 3 19.1046 3 18V11C3 9.89543 3.89543 9 5 9H7M10 5H9C7.89543 5 7 5.89543 7 7V14C7 15.1046 7.89543 16 9 16H19C20.1046 16 21 15.1046 21 14V7C21 5.89543 20.1046 5 19 5H18M17 9L14 12M14 12L11 9M14 12L14 3" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M9.70711 7.29289C9.31658 6.90237 8.68342 6.90237 8.29289 7.29289C7.90237 7.68342 7.90237 8.31658 8.29289 8.70711L11.2929 11.7071C11.6834 12.0976 12.3166 12.0976 12.7071 11.7071L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L13 8.58579L13 5H16C17.1046 5 18 5.89543 18 7V12C18 13.1046 17.1046 14 16 14H8C6.89543 14 6 13.1046 6 12V7C6 5.89543 6.89543 5 8 5H11L11 8.58579L9.70711 7.29289Z" fill="${color}"/> <path d="M11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 5H11L11 3Z" fill="${color}"/> <path d="M4 9C2.89543 9 2 9.89543 2 11V16C2 17.1046 2.89543 18 4 18H12C13.1046 18 14 17.1046 14 16H4V9Z" fill="${color}"/> `;
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
  export let ariaLabel = 'save as';
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
