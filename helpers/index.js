function trackPageView(url) {
	console.log('se ejecuta')
  try {
    window.gtag("config", "UA-156063182-1", {
      page_location: url
    })
  } catch (error) {}
}

export default trackPageView