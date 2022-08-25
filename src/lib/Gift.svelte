<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M12 8V21M12 8C12 8 12 6.50722 12 6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6C16 7.10457 15.1046 8 14 8C13.4027 8 12 8 12 8ZM12 8C12 8 12 6.06291 12 5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5C7 6.88071 8.11929 8 9.5 8C10.3178 8 12 8 12 8ZM5 12H19M5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10C21 11.1046 20.1046 12 19 12M5 12L5 19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V12" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 3.34315 6.34315 2 8 2C8.76836 2 9.46924 2.28885 10 2.7639C10.5308 2.28885 11.2316 2 12 2C13.6569 2 15 3.34315 15 5C15 5.35064 14.9398 5.68722 14.8293 6H16C17.1046 6 18 6.89543 18 8C18 9.10457 17.1046 10 16 10H11V9C11 8.44772 10.5523 8 10 8C9.44772 8 9 8.44771 9 9V10H4C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6H5.17071C5.06015 5.68722 5 5.35064 5 5ZM9 6V5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6H9ZM12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V6H12Z" fill="${color}"/> <path d="M9 11H3V16C3 17.1046 3.89543 18 5 18H9V11Z" fill="${color}"/> <path d="M11 18H15C16.1046 18 17 17.1046 17 16V11H11V18Z" fill="${color}"/> `;
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
	export let ariaLabel = 'gift';
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
