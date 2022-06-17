<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let svgpath: string;
	let svgoutline = `<path d="M6 5C13.1797 5 19 10.8203 19 18M6 11C9.86599 11 13 14.134 13 18M7 18C7 18.5523 6.55228 19 6 19C5.44772 19 5 18.5523 5 18C5 17.4477 5.44772 17 6 17C6.55228 17 7 17.4477 7 18Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5C10.5228 5 15 9.47715 15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15C17 8.37258 11.6274 3 5 3Z" fill="${color}"/> <path d="M4 9C4 8.44772 4.44772 8 5 8C8.86599 8 12 11.134 12 15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15C10 12.2386 7.76142 10 5 10C4.44772 10 4 9.55228 4 9Z" fill="${color}"/> <path d="M3 15C3 13.8954 3.89543 13 5 13C6.10457 13 7 13.8954 7 15C7 16.1046 6.10457 17 5 17C3.89543 17 3 16.1046 3 15Z" fill="${color}"/> `;
	$: switch (variation) {
		case 'outline':
			svgpath = svgoutline;
			break;
		case 'solid':
			svgpath = svgsolid;
			break;
		default:
			svgpath = svgoutline;
	}
	export let ariaLabel = 'rss';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="2"
	on:click
>
	{@html svgpath}
</svg>
