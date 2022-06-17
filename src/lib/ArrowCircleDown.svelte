<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let svgpath: string;
	let svgoutline = `<path d="M15 13L12 16M12 16L9 13M12 16L12 8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = ` <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 7C11 6.44772 10.5523 6 10 6C9.44771 6 9 6.44772 9 7L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L13.7071 10.7071C14.0976 10.3166 14.0976 9.68342 13.7071 9.29289C13.3166 8.90237 12.6834 8.90237 12.2929 9.29289L11 10.5858V7Z" fill="${color}"/> `;
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
	export let ariaLabel = 'arrow circle down';
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
