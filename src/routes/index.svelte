<script>
	import * as Icon from '$lib';
	const random_hex_color_code = () => {
		let n = (Math.random() * 0xfffff * 1000000).toString(16);
		return '#' + n.slice(0, 6);
	};
</script>

<h1>Hero icons</h1>
<Icon.AcademicCap size="40" variation="solid" />
