<script lang="ts">
  import { Adjustments, Wifi, Icon as HeroIcon } from '$lib';
  import MyIcon from './MyIcon.svelte'
</script>

<div class="p-16">
  <h1>Test</h1>
  <MyIcon Icon={Adjustments} />
  <HeroIcon Icon={Adjustments} size="30" color="#ff4488"/>
  <HeroIcon Icon={Wifi} size="50" color="#ff4488" ariaLabel="my wifi icon" class="myclass"/>
</div>