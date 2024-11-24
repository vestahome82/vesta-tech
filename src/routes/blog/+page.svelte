<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  const posts = [
    { title: "Getting Started with Svelte", excerpt: "Strategies to scale your business in the digital age.", link: "/blog/post-1" },
    { title: "Mastering Svelte: Tips and Tricks", excerpt: "Discover advanced techniques to enhance your Svelte development skills.", link: "/blog/post-2" },
    { title: "Web Design Trends 2024", excerpt: "What's hot and what's not in the world of design.", link: "/blog/post-3" }
  ];

  onMount(() => {
    gsap.from(".blog-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.2,
      ease: "power2.out",
    });
  });
</script>

<div class="blog-page">
  <!-- Header -->
  <header class="w-full bg-black/80 py-4 px-8 fixed top-0 z-50 shadow-md flex justify-between items-center">
    <a href="/" class="flex items-center space-x-2">
      <img src="/torch-logo.png" alt="Torch Logo" class="h-8 torch-logo-glow" />
      <span class="text-2xl font-bold text-gray-300 hover:text-white transition">Vesta Tech</span>
    </a>
    <nav class="flex space-x-6">
      <a href="/" class="text-gray-300 hover:text-white transition">Home</a>
      <a href="/blog" class="text-gray-300 hover:text-white transition">Blog</a>
    </nav>
  </header>

  <!-- Blog Section -->
  <section class="flex flex-col justify-center items-center text-center h-screen px-4 pt-28">
    <h1 class="text-5xl font-extrabold text-white mb-6">Explore Our Insights</h1>
    <p class="text-lg text-gray-300 max-w-2xl mb-12">
      Stay ahead of the curve with the latest trends, tips, and strategies in tech, business, and innovation.
    </p>
    <div class="blogs-container">
      {#each posts as post}
        <div class="blog-card">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <a href={post.link}>Read More →</a>
        </div>
      {/each}
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black text-gray-500 py-4 text-center">
    <p>© 2024 Vesta Tech Solutions. All Rights Reserved.</p>
  </footer>
</div>

<style>
  /* Set the uploaded image as the background */
  .blog-page {
    background: url('/Heading.png') no-repeat center center fixed;
    background-size: cover;
    color: white;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  /* Add subtle overlay to make text readable */
  .blog-page::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Subtle dark overlay */
    z-index: -1;
  }

  /* Torch glow effect */
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

  /* Blog cards container */
  .blogs-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
  }

  /* Blog card styling */
  .blog-card {
    background: rgba(0, 0, 0, 0.8);
    padding: 1.5rem;
    border-radius: 8px;
    text-align: left;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  .blog-card h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: white;
  }

  .blog-card p {
    margin-bottom: 1rem;
    color: #d1d1d1;
  }

  .blog-card a {
    color: #ffa500;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.2s;
  }

  .blog-card a:hover {
    color: #ffcc00;
  }

  /* Footer styling */
  footer {
    background: rgba(0, 0, 0, 0.8);
    color: #d1d1d1;
    font-size: 0.9rem;
  }
</style>
