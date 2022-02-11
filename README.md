# Svelte-heroicons

Hero Icons for Svelte. You can import outline and solid icons without name conflict.

## Requirement

- Tailwind CSS

## List of icons

[Icon names](https://github.com/shinokada/svelte-heroicons/blob/main/icon-names.md)

See all the icons at [https://heroicons.com/](https://heroicons.com/).

## Installation

```sh
npm i @codewithshin/svelte-heroicons
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

| Name      | Default     |
| --------- | ----------- |
| className | `h-6 w-6`   |
| viewBox   | `0 0 24 24` |

## Modify it

Add TailwindCSS in the `className` prop like:

```js
<AcademicCapIconSolid className="h-20 w-20 text-pink-700" />
```

## Examples

[REPL](https://svelte.dev/repl/e532f0a6cf7f4d8cae9a9cc2088d234b?version=3.46.4)

```js
<script>
  import { AcademicCapIconSolid, AcademicCapIconOutline } from "@codewithshin/svelte-heroicons";
</script>

<AcademicCapIconSolid />

<AcademicCapIconOutline className="h-5 w-5 text-blue-500" />

<AcademicCapIconSolid className="h-20 w-20 text-green-500" />

<AcademicCapIconOutline className="h-20 w-20 text-red-900" />
```

[REPL example](https://svelte.dev/repl/fd99dc0efa074ba395b8cb1d0603bcae?version=3.46.4)