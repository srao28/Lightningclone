<script>
  import Landing from '../sections/Landing.svelte';
  import Mission from '../sections/Mission.svelte';
  import Product from '../sections/Product.svelte';
  import Roadmap from '../sections/Roadmap.svelte';

  export let landingRef;
</script>

<Landing bind:this={landingRef} />
<Mission />
<Product />
<Roadmap />
