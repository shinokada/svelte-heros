<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let svgpath: string;
  let svgoutline = `<path d="M9 19V6L21 3V16M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM21 16C21 17.1046 19.6569 18 18 18C16.3431 18 15 17.1046 15 16C15 14.8954 16.3431 14 18 14C19.6569 14 21 14.8954 21 16ZM9 10L21 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M18 3.00001C18 2.70042 17.8657 2.41661 17.634 2.22667C17.4023 2.03673 17.0977 1.96067 16.8039 2.01943L6.80388 4.01943C6.33646 4.11291 6 4.52333 6 5.00001V14.1138C5.68722 14.0401 5.35064 14 5 14C3.34315 14 2 14.8954 2 16C2 17.1046 3.34315 18 5 18C6.65685 18 7.99999 17.1046 8 16V7.81981L16 6.21981V12.1138C15.6872 12.0401 15.3506 12 15 12C13.3431 12 12 12.8954 12 14C12 15.1046 13.3431 16 15 16C16.6569 16 18 15.1046 18 14V3.00001Z" fill="${color}"/> `;
  $: switch (variation) {
    case "outline":
      svgpath = svgoutline;
      break;
    case "solid":
      svgpath = svgsolid;
      break;
    default:
      svgpath = svgoutline;
  }
export let ariaLabel="music note" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none" viewBox="0 0 24 24"
  stroke-width="2" 
  on:click
>
  {@html svgpath}
</svg>
