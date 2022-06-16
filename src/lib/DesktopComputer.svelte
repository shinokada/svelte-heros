<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let svgpath: string;
	let svgoutline = `<path d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V13C17 14.1046 16.1046 15 15 15H12.7808L12.903 15.4887L13.7071 16.2929C13.9931 16.5789 14.0787 17.009 13.9239 17.3827C13.7691 17.7563 13.4045 18 13 18H7.00003C6.59557 18 6.23093 17.7563 6.07615 17.3827C5.92137 17.009 6.00692 16.5789 6.29292 16.2929L7.09706 15.4887L7.21925 15H5C3.89543 15 3 14.1046 3 13V5ZM8.7713 12C8.75657 11.9997 8.74189 11.9997 8.72725 12H5V5H15V12H11.2728C11.2582 11.9997 11.2435 11.9997 11.2288 12H8.7713Z" fill="${color}"/> `;
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
	export let ariaLabel = 'desktop computer';
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
>
	{@html svgpath}
</svg>
