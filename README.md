# Svelte-heros

Hero Icons for Svelte. You can import outline and solid icons without name conflict. Svlete-Heros support major CSS framework. You can add additional CSS using the `class` props.


<p align="center">
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-heros/main/static/images/heros1.webp" />
<img width="450" src="https://raw.githubusercontent.com/shinokada/svelte-heros/main/static/images/heros2.webp" />
</p>

## Original source

[tailwindlabs/heroicons](https://github.com/tailwindlabs/heroicons)

## List of icons

[Icon names](https://github.com/shinokada/svelte-heros/blob/main/icon-list.md)

See all the icons at [https://heroicons.com/](https://heroicons.com/).

## Installation

```sh
npm i svelte-heros@latest
```

## REPL

[Demo](https://svelte.dev/repl/48606ee88712441caebd7d09aa62602c?version=3.48.0)

## Usage

```js
<script>
  import { AcademicCap } from "svelte-heros";
</script>
```

## Props

| Name                         | Default     |
| ---------------------------- | ----------- |
| size                         | 15          |
| class                        |             |
| ariaLabel                    | <file name> |
| variation (solid or outline) | outline     |

## Variation

The default variation value is outline. Use the `variation` prop to change it to solid.

```html
<AcademicCap variation="solid" />
```

## Size

Use the `size` prop to change the size of icons.

```html
<AcademicCap size="30" />
<AcademicCap size="35" />
<AcademicCap size="42" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<AcademicCap color="#ff0000" />
<AcademicCap color="#00ffd8" />
```

## CSS framework support

Use the `class` prop to change colors and add additional css.

For example, Tailwind CSS:

```html
<AcademicCap class="text-pink-700 mr-4" />
```

If you use the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<AcademicCap class="text-pink-700 dark:text-blue-300" />
```

Bootstrap example:

```html
<AcademicCap class="position-absolute top-0 px-1" />
```


## aria-label

All icons have aria-label. For example `AcademicCap` has `aria-label="academic cap"`. 
Use `ariaLabel` prop to modify the `aria-label` value. 

```html
<AcademicCap ariaLabel="red academic cap" class="text-red-500">
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<AcademicCap tabindex="0">
```

## Import all

Use `import * as Icon from 'svelte-heros`.

```html
<script>
  import * as Icon from "svelte-heros";
</script>

<Icon.ShoppingBag size="30" class="text-red-500" />
<Icon.Sparkles size="40" class="text-blue-700" />
<Icon.Star size="50" class="text-green-700" />
<Icon.VolumeUp size="60" class="text-purple-500" />
<Icon.VolumeUp size="100" class="text-purple-500" tabindex="0" />
```

[REPL](https://svelte.dev/repl/e532f0a6cf7f4d8cae9a9cc2088d234b?version=3.46.4)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)