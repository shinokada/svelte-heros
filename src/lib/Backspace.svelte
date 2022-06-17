<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let svgpath: string;
	let svgoutline = `<path d="M12 14L14 12M14 12L16 10M14 12L12 10M14 12L16 14M3 12L9.41421 18.4142C9.78929 18.7893 10.298 19 10.8284 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H10.8284C10.298 5 9.78929 5.21071 9.41421 5.58579L3 12Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 4.87868C7.26972 4.31607 8.03278 4 8.82843 4H15C16.6569 4 18 5.34315 18 7V13C18 14.6569 16.6569 16 15 16H8.82843C8.03278 16 7.26972 15.6839 6.70711 15.1213L2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289L6.70711 4.87868ZM10.7071 7.29289C10.3166 6.90237 9.68342 6.90237 9.29289 7.29289C8.90237 7.68342 8.90237 8.31658 9.29289 8.70711L10.5858 10L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071C9.68342 13.0976 10.3166 13.0976 10.7071 12.7071L12 11.4142L13.2929 12.7071C13.6834 13.0976 14.3166 13.0976 14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L13.4142 10L14.7071 8.70711C15.0976 8.31658 15.0976 7.68342 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L12 8.58579L10.7071 7.29289Z" fill="${color}"/> `;
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
	export let ariaLabel = 'backspace';
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
