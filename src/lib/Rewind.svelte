<script lang="ts">
  export let size = "24";
  export let color="currentColor";
  export let variation: "solid" | "outline" = "outline";
  let svgpath: string;
  let svgoutline = `<path d="M12.0665 11.2C11.5332 11.6 11.5332 12.4 12.0665 12.8L17.3998 16.8C18.0591 17.2944 18.9998 16.824 18.9998 16V7.99999C18.9998 7.17594 18.0591 6.70556 17.3998 7.19999L12.0665 11.2Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.0665 11.2C3.53317 11.6 3.53317 12.4 4.0665 12.8L9.39984 16.8C10.0591 17.2944 10.9998 16.824 10.9998 16V7.99998C10.9998 7.17594 10.0591 6.70556 9.39984 7.19998L4.0665 11.2Z" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path d="M8.4453 14.8321C8.75216 15.0366 9.1467 15.0557 9.47186 14.8817C9.79701 14.7077 10 14.3688 10 14L10 11.2019L15.4453 14.8321C15.7522 15.0366 16.1467 15.0557 16.4719 14.8817C16.797 14.7077 17 14.3688 17 14V6C17 5.63121 16.797 5.29235 16.4719 5.11833C16.1467 4.94431 15.7522 4.96338 15.4453 5.16795L10 8.79815V6C10 5.63121 9.79702 5.29235 9.47186 5.11833C9.1467 4.94431 8.75216 4.96338 8.4453 5.16795L2.4453 9.16795C2.1671 9.35342 2 9.66565 2 10C2 10.3344 2.1671 10.6466 2.4453 10.8321L8.4453 14.8321Z" fill="${color}"/> `;
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
export let ariaLabel="rewind" </script>

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
