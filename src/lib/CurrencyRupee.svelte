<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let svgpath: string;
	let svgoutline = `<path d="M9 8H15M10 8C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14H9L12 17M9 11H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7.00003 5C6.44774 5 6.00003 5.44772 6.00003 6C6.00003 6.55228 6.44774 7 7.00003 7H8.00003C8.74031 7 9.38666 7.4022 9.73246 8H7.00003C6.44774 8 6.00003 8.44772 6.00003 9C6.00003 9.55228 6.44774 10 7.00003 10H9.73246C9.38665 10.5978 8.74031 11 8.00003 11H7.00003C6.59557 11 6.23093 11.2436 6.07615 11.6173C5.92137 11.991 6.00692 12.4211 6.29292 12.7071L9.29292 15.7071C9.68345 16.0976 10.3166 16.0976 10.7071 15.7071C11.0977 15.3166 11.0977 14.6834 10.7071 14.2929L9.22363 12.8094C10.5222 12.3926 11.5316 11.3302 11.874 10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H11.874C11.7827 7.64523 11.6439 7.30951 11.4649 7H13C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5H7.00003Z" fill="${color}"/> `;
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
	export let ariaLabel = 'currency rupee';
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
