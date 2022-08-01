<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string;
  let svgpath: string;
  let svgoutline = `<path d="M16 8L18 6M18 6L20 4M18 6L16 4M18 6L20 8M5 3C3.89543 3 3 3.89543 3 5V6C3 14.2843 9.71573 21 18 21H19C20.1046 21 21 20.1046 21 19V15.7208C21 15.2903 20.7246 14.9082 20.3162 14.7721L15.8228 13.2743C15.3507 13.1169 14.8347 13.3306 14.6121 13.7757L13.4835 16.033C11.0388 14.9308 9.06925 12.9612 7.96701 10.5165L10.2243 9.38787C10.6694 9.16531 10.8831 8.64932 10.7257 8.17721L9.22792 3.68377C9.09181 3.27543 8.70967 3 8.27924 3H5Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="${color}"/> <path d="M16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L15.4142 6L16.7071 7.29289C17.0976 7.68342 17.0976 8.31658 16.7071 8.70711C16.3166 9.09763 15.6834 9.09763 15.2929 8.70711L14 7.41421L12.7071 8.70711C12.3166 9.09763 11.6834 9.09763 11.2929 8.70711C10.9024 8.31658 10.9024 7.68342 11.2929 7.29289L12.5858 6L11.2929 4.70711C10.9024 4.31658 10.9024 3.68342 11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L14 4.58579L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289Z" fill="${color}"/> `;
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
export let ariaLabel="phone missed call" </script>

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
