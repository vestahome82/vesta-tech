<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let loadingComplete = false;

  onMount(() => {
    const flame = document.querySelector('.flame-logo');
    const container = document.querySelector('.loading-screen');

    gsap.timeline()
      .to(flame, { scale: 1.5, duration: 1, ease: "power2.out" })
      .to(flame, { scale: 0.4, x: '-45vw', y: '-20vh', duration: 1.5, ease: "power2.inOut" })
      .to(container, { opacity: 0, duration: 0.8, ease: "power2.out" }, "-=1")
      .call(() => loadingComplete = true);
  });
</script>

{#if !loadingComplete}
<div class="loading-screen fixed inset-0 flex items-center justify-center bg-black z-50">
  <img
    src="/torch-background.png"
    alt="Torch Flame"
    class="flame-logo w-[100px] h-[100px] animate-glow"
  />
</div>
{/if}

<style>
  .loading-screen {
    background: radial-gradient(circle, rgba(255,69,0,0.3) 30%, rgba(0,0,0,1) 100%);
  }

  .flame-logo {
    filter: drop-shadow(0 0 20px rgba(255, 69, 0, 0.8));
  }

  @keyframes glow {
    0%, 100% {
      filter: drop-shadow(0 0 10px rgba(255, 140, 0, 1));
    }
    50% {
      filter: drop-shadow(0 0 20px rgba(255, 69, 0, 1));
    }
  }
</style>
