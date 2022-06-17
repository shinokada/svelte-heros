<script>
	import { Map } from '$lib';
	let isSolid = false;
</script>

<Map size="50" />
<Map size="50" on:click={() => (isSolid = !isSolid)} variation={isSolid ? 'solid' : 'outline'} />
