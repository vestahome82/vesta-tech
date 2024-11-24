<script>
  import { onMount } from 'svelte';

  let features = [
    {
      title: "Scalable Solutions",
      description: "Our services are designed to grow with your business needs.",
      icon: "🚀",
    },
    {
      title: "Custom Integrations",
      description: "We build seamless integrations tailored to your requirements.",
      icon: "🔗",
    },
    {
      title: "Real-Time Analytics",
      description: "Get actionable insights with live analytics dashboards.",
      icon: "📊",
    },
  ];
</script>

<div class="h-[100vh] w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
  <!-- Header -->
  <header class="w-full py-4 px-8 shadow-md fixed top-0 z-50 bg-black/80 transition">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center space-x-2">
        <img src="/torch-logo.png" alt="Torch Logo" class="h-8 torch-logo-glow" />
        <span class="text-xl font-bold text-[#E91E63] hover:text-white transition">Vesta Tech</span>
      </a>
      <nav class="flex space-x-6">
        <a href="/" class="text-gray-300 hover:text-[#E91E63] transition">Home</a>
        <a href="/about" class="text-gray-300 hover:text-[#E91E63] transition">About Us</a>
        <a href="/services" class="text-gray-300 hover:text-[#E91E63] transition">Services</a>
        <a href="/blog" class="text-gray-300 hover:text-[#E91E63] transition">Blog</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="flex flex-col justify-center items-center h-[calc(100vh-64px)] space-y-6 text-center pt-24">
    <h2 class="text-4xl font-extrabold text-[#E91E63] tracking-wide">Innovative Tech Solutions</h2>
    <p class="text-gray-400 max-w-3xl">
      Empowering your business with cutting-edge technology and services tailored to your success.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {#each features as feature (feature.title)}
        <div
          class="group bg-gray-800/90 p-6 rounded-lg shadow-lg hover:bg-[#E91E63]/90 hover:scale-105 transition transform"
        >
          <div class="text-5xl mb-4 text-[#E91E63] group-hover:text-white">
            {feature.icon}
          </div>
          <h3 class="text-xl font-bold group-hover:text-white">{feature.title}</h3>
          <p class="text-gray-400 group-hover:text-gray-200">{feature.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-800 text-gray-400 py-6">
    <div class="max-w-screen-xl mx-auto text-center">
      <p class="text-sm">© 2024 Vesta Tech Solutions. All Rights Reserved.</p>
      <p class="text-sm mt-2">
        <a href="/privacy" class="text-[#E91E63] hover:underline">Privacy Policy</a> |
        <a href="/terms" class="text-[#E91E63] hover:underline">Terms of Service</a>
      </p>
    </div>
  </footer>
</div>

<style>
  /* Add animation for the torch logo */
  .torch-logo-glow {
    animation: flame-flicker 1.2s infinite ease-in-out;
  }

  @keyframes flame-flicker {
    0%, 100% {
      filter: drop-shadow(0 0 20px rgba(255, 120, 0, 0.9))
              drop-shadow(0 0 40px rgba(255, 160, 0, 1))
              drop-shadow(0 0 60px rgba(255, 200, 50, 1));
    }
    50% {
      filter: drop-shadow(0 0 30px rgba(255, 140, 0, 1))
              drop-shadow(0 0 50px rgba(255, 190, 50, 1))
              drop-shadow(0 0 80px rgba(255, 255, 100, 1));
    }
  }

  /* Smooth hover animations for links and cards */
  :global(a, .group) {
    transition: all 0.3s ease;
  }

  /* Footer styling */
  footer {
    background: rgba(0, 0, 0, 0.8);
    color: #d1d1d1;
    font-size: 0.9rem;
  }
</style>
