# How to change svg to svelte file

One liner:

```
cd /path/to/dir
rename -v 's/./\U$&/;s/-(.)/\U$1/g;s/\.svg$/Icon.svelte/' -- *.svg && sed -i '1s/^/<script>export let className="h-6 w-6";<\/script>/' ./*.* && sed -i 's/fill/class={className} &/' ./*.*
```

## Details

Convert all files from academic-cap.svg to AcademicCapIcon.svelte.

```sh
cp /path/to/dir/optimized /path/to/dir/svelte
cd /path/to/dir/svelte
rename -v 's/./\U$&/;s/-(.)/\U$1/g;s/\.svg$/Icon.svelte/' -- *.svg
```

Insert strings at the beginning to all files.

```sh
sed -i '1s/^/<script>export let className="h-6 w-6";<\/script>/' ./*.*
```

Insert strings before a word

```
sed -i 's/fill/class={className} &/' ./*.*
```

## Step 2

```
sed "s:\(.*\)\.svelte:import \1 from './heroicons/outline/&':" namesWithSvelte.txt > index3.js
```

This will change a file from:

```
AcademicCapIcon.svelte
AdjustmentsIcon.svelte
AnnotationIcon.svelte
ArchiveIcon.svelte
...
```

to:

```
import AcademicCapIcon from './dir1/dir2/AcademicCapIcon.svelte'
import AdjustmentsIcon from './dir1/dir2/AdjustmentsIcon.svelte'
import AnnotationIcon from './dir1/dir2/AnnotationIcon.svelte'
import ArchiveIcon from './dir1/dir2/ArchiveIcon.svelte'
...
```


