<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M17 14V20M14 17H20M6 10H8C9.10457 10 10 9.10457 10 8V6C10 4.89543 9.10457 4 8 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10ZM16 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4H16C14.8954 4 14 4.89543 14 6V8C14 9.10457 14.8954 10 16 10ZM6 20H8C9.10457 20 10 19.1046 10 18V16C10 14.8954 9.10457 14 8 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z" fill="${color}"/> <path d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z" fill="${color}"/> <path d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z" fill="${color}"/> <path d="M14 11C14.5523 11 15 11.4477 15 12V13H16C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15H15V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V15H12C11.4477 15 11 14.5523 11 14C11 13.4477 11.4477 13 12 13H13V12C13 11.4477 13.4477 11 14 11Z" fill="${color}"/> `;
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
export let ariaLabel="view grid add" </script>

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
