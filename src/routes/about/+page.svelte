<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let aboutSection;

  onMount(() => {
    // Animate elements when they appear
    gsap.from(".about-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.5,
      ease: "power2.out",
    });
    gsap.from(aboutSection, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.inOut",
    });
  });
</script>

<div class="about-page h-[100vh] w-full text-white">
  <!-- Header -->
  <header class="w-full bg-black/80 py-4 px-8 fixed top-0 z-50 shadow-md flex justify-between items-center">
    <a href="/" class="flex items-center space-x-2">
      <img src="/torch-logo.png" alt="Torch Logo" class="h-8 torch-logo-glow" />
      <span class="text-xl font-bold text-gray-300 hover:text-white transition">Vesta Tech</span>
    </a>
    <nav class="flex space-x-6">
      <a href="/" class="text-gray-300 hover:text-[#E91E63] transition">Home</a>
      <a href="/about" class="text-gray-300 hover:text-[#E91E63] transition">About Us</a>
      <a href="/services" class="text-gray-300 hover:text-[#E91E63] transition">Services</a>
      <a href="/blog" class="text-gray-300 hover:text-[#E91E63] transition">Blog</a>
    </nav>
  </header>

  <!-- About Section -->
  <section
    bind:this={aboutSection}
    class="min-h-screen flex flex-col items-center justify-center py-16 px-8 pt-28 bg-gradient-to-br from-black via-gray-900 to-gray-800"
  >
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h1 class="text-5xl font-extrabold text-gray-100 mb-6">
        Who We Are
      </h1>
      <p class="text-lg text-gray-400 leading-relaxed">
        At Vesta Tech Solutions, we’re dedicated to transforming businesses with innovative solutions that drive growth, efficiency, and success.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-6xl">
      <!-- Vision -->
      <div
        class="about-card p-6 bg-gray-900/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Our Vision</h2>
        <p class="text-gray-400">
          We envision a world where technology seamlessly integrates with businesses to achieve unparalleled efficiency, creativity, and growth.
        </p>
      </div>

      <!-- Mission -->
      <div
        class="about-card p-6 bg-gray-900/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Our Mission</h2>
        <p class="text-gray-400">
          To empower businesses globally with technology-driven solutions that enable them to thrive in a competitive world.
        </p>
      </div>

      <!-- Values -->
      <div
        class="about-card p-6 bg-gray-900/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Our Values</h2>
        <ul class="list-disc list-inside text-gray-400">
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Customer Focus</li>
          <li>Excellence</li>
        </ul>
      </div>

      <!-- Why Choose Us -->
      <div
        class="about-card p-6 bg-gray-900/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105"
      >
        <h2 class="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
        <p class="text-gray-400">
          Our dedicated experts are committed to delivering personalized solutions that drive results. Partner with us for excellence and innovation.
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-500 py-6">
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

  /* About card hover effect */
  .about-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(255, 140, 0, 0.2);
  }

  /* Footer styling */
  footer {
    background: rgba(0, 0, 0, 0.9);
    color: #d1d1d1;
    font-size: 0.9rem;
  }
</style>
