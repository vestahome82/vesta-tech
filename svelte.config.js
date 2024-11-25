import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      fallback: 'index.html', // This serves as the fallback for all routes
    }),
  },
};
