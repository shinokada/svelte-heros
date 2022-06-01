<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let svgpath: string;
  let svgoutline = `<path d="M9.99991 14H5.23598C3.74922 14 2.78222 12.4354 3.44712 11.1056L6.94712 4.10557C7.28591 3.42801 7.97843 3 8.73598 3H12.7537C12.9172 3 13.0801 3.02005 13.2388 3.05972L16.9999 4M9.99991 14V19C9.99991 20.1046 10.8953 21 11.9999 21H12.0954C12.5949 21 12.9999 20.595 12.9999 20.0955C12.9999 19.3812 13.2113 18.6828 13.6076 18.0885L16.9999 13V4M9.99991 14H11.9999M16.9999 4H18.9999C20.1045 4 20.9999 4.89543 20.9999 6V12C20.9999 13.1046 20.1045 14 18.9999 14H16.4999" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M18 9.5C18 10.3284 17.3285 11 16.5 11C15.6716 11 15 10.3284 15 9.5V3.5C15 2.67157 15.6716 2 16.5 2C17.3285 2 18 2.67157 18 3.5V9.5Z" fill="${color}"/> <path d="M14 9.66667V4.23607C14 3.47852 13.572 2.786 12.8945 2.44721L12.8446 2.42229C12.2892 2.14458 11.6767 2 11.0558 2L5.63964 2C4.68628 2 3.86545 2.67292 3.67848 3.60777L2.47848 9.60777C2.23097 10.8453 3.17755 12 4.43964 12H8.00004V16C8.00004 17.1046 8.89547 18 10 18C10.5523 18 11 17.5523 11 17V16.3333C11 15.4679 11.2807 14.6257 11.8 13.9333L13.2 12.0667C13.7193 11.3743 14 10.5321 14 9.66667Z" fill="${color}"/> `;
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
export let ariaLabel="thumb down" </script>

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
