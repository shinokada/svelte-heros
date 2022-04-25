# Svelte-heroicons

Hero Icons for Svelte. You can import outline and solid icons without name conflict.

You can use this icons with Tailwind CSS.

## List of icons

[Icon names](https://github.com/shinokada/svelte-heroicons/blob/main/icon-names.md)

See all the icons at [https://heroicons.com/](https://heroicons.com/).

## Installation

```sh
npm i @codewithshin/svelte-heroicons@latest
```

## Import

Solid icons end with `xxxxxSolid` and outline icons end with `xxxxxOutline`.

For example:

```js
<script>
  import { AcademicCapIconSolid, AcademicCapIconOutline } from "@codewithshin/svelte-heroicons";
</script>
```

## Props

| Name | Default |
| ---- | ------- |
| size | 24      |

You can add class to change colors.


### TailwindCSS example

```html
<AcademicCapIconSolid class="text-pink-700 dark:text-blue-300" />
```

## Examples

[REPL](https://svelte.dev/repl/e532f0a6cf7f4d8cae9a9cc2088d234b?version=3.46.4)

```html
<script>
  import { AcademicCapIconSolid, AcademicCapIconOutline } from "@codewithshin/svelte-heroicons";
</script>

<AcademicCapIconSolid />

<AcademicCapIconOutline size="36" class="text-blue-500" />

<AcademicCapIconSolid size="40" class=" text-green-500" />

<AcademicCapIconOutline size="48" class="text-red-900" />
```

[REPL example](https://svelte.dev/repl/fd99dc0efa074ba395b8cb1d0603bcae?version=3.46.4)