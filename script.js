const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', (event) => {
  const searchTerm = searchBar.value.trim();
  const width = Math.min(300, searchTerm.length * 12 + 50); // Limit max width and adjust based on character length
  searchBar.style.width = `${width}px`; // Update width dynamically
});

searchBar.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const searchTerm = searchBar.value.trim();

    if (searchTerm) {
      let searchUrl;
      const prefix = searchTerm.split(' ')[0].toLowerCase(); // Extract the first word (prefix)
      let query = searchTerm.slice(prefix.length + 1).trim(); // Extract the remaining query

      // Check if there's a comma and language code
      const parts = query.split(',');
      if (parts.length > 1) {
        query = parts[0].trim(); // Text to translate
        const langCode = parts[1].trim().toLowerCase(); // Extract language code
        searchUrl = `https://translate.google.com/?sl=auto&tl=${langCode}&text=${query}`;
      } else {
        searchUrl = `https://translate.google.com/?sl=auto&tl=en&text=${query}`;  // Default to English translation
      }

      switch (prefix) {
        case 'y!':
          // YouTube search
          searchUrl = `https://www.youtube.com/results?search_query=${query}`;
          break;
        // ... other prefixes (omitted for brevity)
        case 't!':
          // Translate
          break;
        default:
          // Regular search
          searchUrl = `https://www.google.com/search?q=${searchTerm}`;
      }

      if (searchUrl) {
        // Blackout animation (optional)
        // ... (code from previous response - optional)

        // Simulate a slight delay before redirecting (optional)
        // ... (code from previous response - optional)

        window.location.href = searchUrl;
      }
    }
  }
});
