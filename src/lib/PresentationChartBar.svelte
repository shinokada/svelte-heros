<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let svgpath: string;
  let svgoutline = `<path d="M8 13V12M12 13V10M16 13V8M8 21L12 17L16 21M3 4H21M4 4H20V16C20 16.5523 19.5523 17 19 17H5C4.44772 17 4 16.5523 4 16V4Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5V13C3 14.1046 3.89543 15 5 15H7.58579L6.29289 16.2929C5.90237 16.6834 5.90237 17.3166 6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071L10 15.4142L12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071C14.0976 17.3166 14.0976 16.6834 13.7071 16.2929L12.4142 15H15C16.1046 15 17 14.1046 17 13V5C17.5523 5 18 4.55228 18 4C18 3.44772 17.5523 3 17 3H3ZM14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7V11C12 11.5523 12.4477 12 13 12C13.5523 12 14 11.5523 14 11V7ZM11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V8ZM8 9C8 8.44772 7.55228 8 7 8C6.44772 8 6 8.44772 6 9V11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11V9Z" fill="${color}"/> `;
  switch (variation) {
    case "outline":
      svgpath = svgoutline;
      break;
    case "solid":
      svgpath = svgsolid;
      break;
    default:
      svgpath = svgoutline;
  }
export let ariaLabel="presentation chart bar" </script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={$$props.class}
  {...$$restProps}
  aria-label={ariaLabel}
  fill="none" viewBox="0 0 24 24"
  stroke-width="2" 
>
  {@html svgpath}
</svg>
