<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M11.9333 12.8C12.4667 12.4 12.4667 11.6 11.9333 11.2L6.6 7.19998C5.94076 6.70556 5 7.17594 5 7.99998L5 16C5 16.824 5.94076 17.2944 6.6 16.8L11.9333 12.8Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M19.9333 12.8C20.4667 12.4 20.4667 11.6 19.9333 11.2L14.6 7.19998C13.9408 6.70556 13 7.17594 13 7.99998L13 16C13 16.824 13.9408 17.2944 14.6 16.8L19.9333 12.8Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path d="M4.5547 5.16795C4.24784 4.96338 3.8533 4.94431 3.52814 5.11833C3.20298 5.29235 3 5.63121 3 6V14C3 14.3688 3.20298 14.7077 3.52814 14.8817C3.8533 15.0557 4.24784 15.0366 4.5547 14.8321L10 11.2019V14C10 14.3688 10.203 14.7077 10.5281 14.8817C10.8533 15.0557 11.2478 15.0366 11.5547 14.8321L17.5547 10.8321C17.8329 10.6466 18 10.3344 18 10C18 9.66565 17.8329 9.35342 17.5547 9.16795L11.5547 5.16795C11.2478 4.96338 10.8533 4.94431 10.5281 5.11833C10.203 5.29235 10 5.63121 10 6V8.79815L4.5547 5.16795Z" fill="${color}"/> `;
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
	export let ariaLabel = 'fast forward';
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
