<script>
  import { createEventDispatcher } from 'svelte';
  import AboutHero from '../sections/about/AboutHero.svelte';
  import AboutSplit from '../sections/about/AboutSplit.svelte';
  import AboutPillars from '../sections/about/AboutPillars.svelte';
  import AboutCTA from '../sections/about/AboutCTA.svelte';
  import FounderQuote from '../sections/about/FounderQuote.svelte';

  const dispatch = createEventDispatcher();
</script>

<AboutHero />
<AboutSplit />
<AboutPillars />
<AboutCTA />
<FounderQuote />
