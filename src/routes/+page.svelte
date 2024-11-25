<script>
  import { onMount } from 'svelte';
  import LoadingScreen from './LoadingScreen.svelte';
  import { gsap } from 'gsap';
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  let subHeading, glowingBackground;
  let loadingComplete = false;
  let hoverActive = false; // Controls hover for glowing dot (background toggle)

  const startAnimations = () => {
    const timeline = gsap.timeline();

    // Subheading animation
    if (subHeading) {
      timeline.from(subHeading, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }

    // Subtle glowing background animation
    if (glowingBackground) {
      gsap.to(glowingBackground, {
        scale: 1.1,
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }

    // Flickering torch logo glow (increased brightness)
    gsap.to(".torch-logo-glow", {
      filter: "drop-shadow(0 0 50px rgba(255, 200, 0, 1))",
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  };

  // Toggle the hover background
  const toggleBackground = () => {
    hoverActive = !hoverActive;
  };

  const scrollToSection = (id) => {
    gsap.to(window, {
      scrollTo: `#${id}`,
      duration: 1,
      ease: "power2.out",
    });
  };

  onMount(() => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
          loadingComplete = true;
          startAnimations();
        },
      });
    } else {
      loadingComplete = true;
      startAnimations();
    }

    // Animate sections on scroll
    gsap.utils.toArray('.process-section').forEach((section) => {
      const image = section.querySelector(".section-image");
      const text = section.querySelector(".section-text");

      gsap.fromTo(
        [image, text],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          onStart: () => {
            gsap.to(image, {
              filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))",
              duration: 1.2,
              yoyo: true,
            });
          },
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  });
</script>

{#if !loadingComplete}
  <LoadingScreen />
{:else}
<div class="w-full min-h-screen overflow-x-hidden">
  <!-- Header -->
  <header class="w-full py-4 px-8 shadow-md fixed top-0 z-50 bg-black/80 transition">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center">
      <a href="/" class="flex items-center space-x-2">
        <img src="/torch-logo.png" alt="Torch Logo" class="h-8 torch-logo-glow" />
        <span class="text-xl font-bold text-gray-300 hover:text-white transition">Vesta Tech</span>
      </a>
      <nav class="flex space-x-8">
        <a href="/" class="text-gray-300 hover:text-white transition">Home</a>
        <a href="/blog" class="text-gray-300 hover:text-white transition">Blog</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <main style="padding-top: 64px;" class={`relative ${hoverActive ? 'bg-hover' : 'bg-black'}`}>
    <section class="h-screen flex flex-col justify-center items-center text-center relative z-10">
      <!-- Background Subtle Effect -->
      <div
        bind:this={glowingBackground}
        class="absolute inset-0 bg-glow rounded-full blur-lg opacity-30 pointer-events-none"
      ></div>

      <!-- Static Heading with Glowing Dot -->
      <h1 class="text-6xl font-extrabold mb-4 text-white drop-shadow-md">
        Let Vesta Tech-Solutions Light the Way
        <span
          class="glowing-dot"
          on:mouseenter={toggleBackground}
          on:mouseleave={toggleBackground}
          on:click={toggleBackground}
        ></span>
      </h1>

      <!-- Subheading -->
      <p bind:this={subHeading} class="text-xl max-w-2xl mb-6 text-gray-300 leading-relaxed">
        We bring innovative strategies and seamless solutions to illuminate your digital path.
      </p>

      <!-- Scroll Indicator -->
      <div
        class="scroll-indicator mt-32 text-gray-400 cursor-pointer hover:text-white transition"
        on:click={() => scrollToSection('discovery')}
      >
        ↓ Scroll
      </div>
    </section>

    <!-- Process Sections -->
    <section id="discovery" class="process-section py-20 bg-black text-white flex flex-col items-center">
      <img src="/discovery.png" alt="Discovery" class="section-image max-w-sm shadow-lg" />
      <div class="section-text max-w-md text-center">
        <h2 class="text-5xl font-bold font-serif mb-6">Discovery</h2>
        <p class="text-gray-400 text-lg">
          Uncovering the essence of your goals and vision.
        </p>
      </div>
    </section>

    <section id="design" class="process-section py-20 bg-black text-white flex flex-col items-center">
      <img src="/design.png" alt="Design" class="section-image max-w-sm shadow-lg" />
      <div class="section-text max-w-md text-center">
        <h2 class="text-5xl font-bold font-serif mb-6">Design</h2>
        <p class="text-gray-400 text-lg">
          Crafting innovative, user-centric designs.
        </p>
      </div>
    </section>

    <section id="development" class="process-section py-20 bg-black text-white flex flex-col items-center">
      <img src="/development.png" alt="Development" class="section-image max-w-sm shadow-lg" />
      <div class="section-text max-w-md text-center">
        <h2 class="text-5xl font-bold font-serif mb-6">Development</h2>
        <p class="text-gray-400 text-lg">
          Building solutions with precision and efficiency.
        </p>
      </div>
    </section>

    <section id="delivery" class="process-section py-20 bg-black text-white flex flex-col items-center">
      <img src="/delivery.png" alt="Delivery" class="section-image max-w-sm shadow-lg" />
      <div class="section-text max-w-md text-center">
        <h2 class="text-5xl font-bold font-serif mb-6">Delivery</h2>
        <p class="text-gray-400 text-lg">
          Launching solutions that exceed expectations.
        </p>
      </div>
    </section>
    <!-- Contact Form Section -->
    <section id="contact" class="py-20 bg-black text-white text-center">
      <h2 class="text-5xl font-bold mb-6 glow-heading">Contact Us</h2>
      <form class="max-w-3xl mx-auto space-y-6 p-8 rounded-lg glowing-form">
        <!-- Name Input -->
        <input
          type="text"
          placeholder="Your Name"
          class="w-full p-4 glowing-input bg-transparent text-white placeholder-gray-400"
          required
        />
        <!-- Email Input -->
        <input
          type="email"
          placeholder="Your Email"
          class="w-full p-4 glowing-input bg-transparent text-white placeholder-gray-400"
          required
        />
        <!-- Message Input -->
        <textarea
          placeholder="Your Message"
          class="w-full p-4 glowing-input bg-transparent text-white placeholder-gray-400"
          rows="5"
          required
        ></textarea>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full py-4 glowing-button text-white font-bold transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>    
  </main>
</div>
{/if}

<style>
  :global(body) {
    background: black;
    color: white;
    transition: background-color 0.3s ease;
  }

  .bg-glow {
    background: radial-gradient(circle at center, rgba(255, 69, 0, 0.3), rgba(0, 0, 0, 1));
  }

  .torch-logo-glow {
    animation: flame-flicker 1.2s infinite ease-in-out;
  }

  @keyframes flame-flicker {
    0%, 100% {
      filter: drop-shadow(0 0 20px rgba(255, 120, 0, 0.8));
    }
    50% {
      filter: drop-shadow(0 0 30px rgba(255, 150, 0, 1));
    }
  }

  .glowing-dot {
    display: inline-block;
    margin-left: 5px;
    width: 10px;
    height: 10px;
    background-color: orange;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 120, 0, 0.6);
    animation: glow-pulse 1.5s infinite alternate;
    cursor: pointer;
  }

  @keyframes glow-pulse {
    0%, 100% {
      box-shadow: 0 0 10px rgba(255, 140, 0, 0.8), 0 0 20px rgba(255, 120, 0, 0.6);
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 160, 0, 1), 0 0 40px rgba(255, 140, 0, 0.8);
    }
  }

  .process-section {
    gap: 2rem;
    width: 100%;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
  }

  .section-image {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-in-out;
  }

  .section-text {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-in-out;
  }

  .process-section:hover .section-image,
  .process-section:hover .section-text {
    opacity: 1;
    transform: translateY(0);
  }

  .font-serif {
    font-family: 'Merriweather', serif;
  }
</style>