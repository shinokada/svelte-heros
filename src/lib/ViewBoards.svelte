<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let svgpath: string;
  let svgoutline = `<path d="M9 17V7M9 17C9 18.1046 8.10457 19 7 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H7C8.10457 5 9 5.89543 9 7M9 17C9 18.1046 9.89543 19 11 19H13C14.1046 19 15 18.1046 15 17M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7M15 17V7M15 17C15 18.1046 15.8954 19 17 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H17C15.8954 5 15 5.89543 15 7" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = ` <path d="M2 4C2 3.44772 2.44772 3 3 3H5C5.55228 3 6 3.44772 6 4V16C6 16.5523 5.55228 17 5 17H3C2.44772 17 2 16.5523 2 16V4Z" fill="${color}"/> <path d="M8 4C8 3.44772 8.44772 3 9 3H11C11.5523 3 12 3.44772 12 4V16C12 16.5523 11.5523 17 11 17H9C8.44772 17 8 16.5523 8 16V4Z" fill="${color}"/> <path d="M15 3C14.4477 3 14 3.44772 14 4V16C14 16.5523 14.4477 17 15 17H17C17.5523 17 18 16.5523 18 16V4C18 3.44772 17.5523 3 17 3H15Z" fill="${color}"/> `;
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
export let ariaLabel="view boards" </script>

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
