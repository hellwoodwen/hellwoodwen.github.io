function trackPageView(url) {
  try {
    window.gtag("config", "UA-156063182-1", {
      page_location: url
    })
  } catch (error) {}
}
