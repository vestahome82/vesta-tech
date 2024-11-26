<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let torch;

  onMount(() => {
    // Torch flicker animation
    gsap.to(torch, {
      filter: 'drop-shadow(0 0 20px orange)',
      duration: 0.8,
      repeat: -1,
      yoyo: true,
    });
  });
</script>

<div class="min-h-screen bg-black text-white flex flex-col justify-center items-center">
  <h1 class="text-4xl font-bold mb-4">🔥 Welcome to the Vesta Vault 🔥</h1>
  <p class="text-lg text-gray-400 mb-8">
    “Here lies the secrets of the universe. Just kidding, but here's something cool.”
  </p>

  <!-- Animated torch -->
  <div
    bind:this={torch}
    class="torch h-24 w-24 rounded-full bg-orange-500"
    style="box-shadow: 0 0 10px orange;"
  ></div>

  <!-- Fun content -->
  <div class="mt-8">
    <p class="text-lg font-semibold mb-4">Tech Tip of the Day:</p>
    <p class="italic">"Svelte: because sometimes less JavaScript is more happiness."</p>

    <!-- Downloadable content -->
    <a
      href="/assets/vesta-secrets.pdf"
      download
      class="mt-6 inline-block px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded text-white font-bold"
    >
      Download the Vesta Vault Secrets
    </a>
  </div>
</div>

<style>
  .torch {
    animation: torch-flicker 1s infinite alternate;
  }

  @keyframes torch-flicker {
    0%, 100% {
      filter: drop-shadow(0 0 15px rgba(255, 165, 0, 1));
    }
    50% {
      filter: drop-shadow(0 0 30px rgba(255, 140, 0, 1));
    }
  }
</style>
