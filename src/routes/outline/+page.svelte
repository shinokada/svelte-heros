<script lang="ts">
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  variation="outline"
  icons={keyIcons}
  title="Outline Icons - Svelte Heros"
  tab1Class="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
/>
