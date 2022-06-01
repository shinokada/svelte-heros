<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let svgpath: string;
  let svgoutline = `<path d="M11 11V9C11 7.89543 10.1046 7 9 7M11 11V15C11 16.1046 11.8954 17 13 17C14.1046 17 15 16.1046 15 15V14M11 11H9M11 11H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM7 4C6.44772 4 6 4.44772 6 5C6 5.55228 6.44772 6 7 6C7.55228 6 8 6.44772 8 7V8H7C6.44772 8 6 8.44772 6 9C6 9.55228 6.44772 10 7 10H8V13C8 14.6569 9.34315 16 11 16C12.6569 16 14 14.6569 14 13V12C14 11.4477 13.5523 11 13 11C12.4477 11 12 11.4477 12 12V13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13V10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H10V7C10 5.34315 8.65685 4 7 4Z" fill="${color}"/> `;
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
export let ariaLabel="currency bangladeshi" </script>

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
