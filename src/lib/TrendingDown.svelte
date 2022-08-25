<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M13 17H21M21 17V9M21 17L13 9L9 13L3 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = ` <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C11.4477 13 11 13.4477 11 14C11 14.5523 11.4477 15 12 15H17C17.5523 15 18 14.5523 18 14V9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V11.5858L11.7071 7.29289C11.3166 6.90237 10.6834 6.90237 10.2929 7.29289L8 9.58579L3.70711 5.29289C3.31658 4.90237 2.68342 4.90237 2.29289 5.29289C1.90237 5.68342 1.90237 6.31658 2.29289 6.70711L7.29289 11.7071C7.68342 12.0976 8.31658 12.0976 8.70711 11.7071L11 9.41421L14.5858 13H12Z" fill="${color}"/> `;
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
	export let ariaLabel = 'trending down';
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
