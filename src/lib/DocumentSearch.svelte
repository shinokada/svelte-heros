<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M10 21H17C18.1046 21 19 20.1046 19 19V9.41421C19 9.149 18.8946 8.89464 18.7071 8.70711L13.2929 3.29289C13.1054 3.10536 12.851 3 12.5858 3H7C5.89543 3 5 3.89543 5 5V16M5 21L9.87868 16.1213M9.87868 16.1213C10.4216 16.6642 11.1716 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 14.8284 9.33579 15.5784 9.87868 16.1213Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M4 4C4 2.89543 4.89543 2 6 2H10.5858C11.1162 2 11.6249 2.21071 12 2.58579L15.4142 6C15.7893 6.37507 16 6.88378 16 7.41421V16C16 17.1046 15.1046 18 14 18H12.4722C13.4223 16.9385 14 15.5367 14 14C14 10.6863 11.3137 8 8 8C6.46329 8 5.06151 8.57771 4 9.52779V4Z" fill="${color}"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 10C5.79086 10 4 11.7909 4 14C4 14.7414 4.20229 15.4364 4.55397 16.0318L3.29289 17.2929C2.90237 17.6834 2.90237 18.3166 3.29289 18.7071C3.68342 19.0976 4.31658 19.0976 4.70711 18.7071L5.96818 17.446C6.56362 17.7977 7.25862 18 8 18C10.2091 18 12 16.2091 12 14C12 11.7909 10.2091 10 8 10ZM6 14C6 12.8954 6.89543 12 8 12C9.10457 12 10 12.8954 10 14C10 15.1046 9.10457 16 8 16C7.44744 16 6.94881 15.7772 6.58579 15.4142C6.22276 15.0512 6 14.5526 6 14Z" fill="${color}"/> `;
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
export let ariaLabel="document search" </script>

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
