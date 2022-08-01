<script>
	import * as Icon from '$lib';
	const random_hex_color_code = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + n.slice(0, 6);
	};
</script>

<h1>Hero icons</h1>
<Icon.AcademicCap size="40" variation="solid" />

<Icon.Star variation="solid" size="24" class="text-yellow-300 dark:text-yellow-200" />
<Icon.Star size="20" class="text-gray-300 dark:text-gray-500" />

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
</svelte:head>
