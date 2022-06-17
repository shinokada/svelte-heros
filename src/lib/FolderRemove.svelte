<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let svgpath: string;
	let svgoutline = `<path d="M9 13H15M3 17V7C3 5.89543 3.89543 5 5 5H11L13 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" d="M4 4C2.89543 4 2 4.89543 2 6V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8C18 6.89543 17.1046 6 16 6H11L9 4H4ZM8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12H12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10H8Z" fill="${color}"/> `;
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
	export let ariaLabel = 'folder remove';
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
