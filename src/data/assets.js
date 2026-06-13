// Hosted media for the site — Lottie animations (lottie.host CDN) and
// open-source imagery (Unsplash CDN). Kept in one place so they're easy to swap.

// --- Lottie animations (free, hosted CDN — verified reachable) ---
export const lottie = {
  // Abstract motion accent used in the hero.
  hero: 'https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/IGmMCqhzpt.lottie',
}

// --- Unsplash imagery (open-source, hotlinked). Append sizing params at use. ---
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const images = {
  heroWorkspace: u('photo-1551434678-e076c223a692', 1400), // team collaborating
  strategy: u('photo-1460925895917-afdab827c52f', 1000), // analytics dashboard
  creative: u('photo-1626785774573-4b799315345d', 900), // creative desk
  meeting: u('photo-1522071820081-009f0129c71c', 1000), // team meeting
}
