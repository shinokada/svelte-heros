<script lang="ts">
  export let size = '24';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' = 'outline';
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M10 6H5C3.89543 6 3 6.89543 3 8V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V8C21 6.89543 20.1046 6 19 6H14M10 6V5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V6M10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6M9 14C10.1046 14 11 13.1046 11 12C11 10.8954 10.1046 10 9 10C7.89543 10 7 10.8954 7 12C7 13.1046 7.89543 14 9 14ZM9 14C10.3062 14 11.4174 14.8348 11.8292 16M9 14C7.69378 14 6.58249 14.8348 6.17065 16M15 11H18M15 15H17" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C9.44772 2 9 2.44772 9 3V4C9 4.55228 9.44772 5 10 5C10.5523 5 11 4.55228 11 4V3C11 2.44772 10.5523 2 10 2ZM4 4H7C7 5.65685 8.34315 7 10 7C11.6569 7 13 5.65685 13 4H16C17.1046 4 18 4.89543 18 6V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V6C2 4.89543 2.89543 4 4 4ZM6.5 11C7.32843 11 8 10.3284 8 9.5C8 8.67157 7.32843 8 6.5 8C5.67157 8 5 8.67157 5 9.5C5 10.3284 5.67157 11 6.5 11ZM8.95048 15C8.98327 14.8384 9.00049 14.6712 9.00049 14.5C9.00049 13.1193 7.8812 12 6.50049 12C5.11978 12 4.00049 13.1193 4.00049 14.5C4.00049 14.6712 4.0177 14.8384 4.0505 15H8.95048ZM12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H12ZM11 13C11 12.4477 11.4477 12 12 12H14C14.5523 12 15 12.4477 15 13C15 13.5523 14.5523 14 14 14H12C11.4477 14 11 13.5523 11 13Z" fill="${color}"/> `;
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
  export let ariaLabel = 'identification';
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
