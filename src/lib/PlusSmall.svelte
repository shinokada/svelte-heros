<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let viewBox: string = '0 0 24 24';
  let svgpath: string;
  let svgoutline = `<path d="M12 6V18M18 12L6 12" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25L18 11.25C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25L11.25 11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" fill="${color}"/> `;
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
export let ariaLabel="plus small" </script>

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
  on:mouseenter 
  on:mouseleave 
  on:mouseover 
  on:mouseout 
  on:blur 
  on:focus 
>
  {@html svgpath}
</svg>
