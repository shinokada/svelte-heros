<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12M17 8H17.01M17 16H17.01" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V7C18 8.10457 17.1046 9 16 9H4C2.89543 9 2 8.10457 2 7V5ZM16 6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6C14 5.44772 14.4477 5 15 5C15.5523 5 16 5.44772 16 6Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13C2 11.8954 2.89543 11 4 11H16C17.1046 11 18 11.8954 18 13V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V13ZM16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14Z" fill="${color}"/> `;
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
export let ariaLabel="server" </script>

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
