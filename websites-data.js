/* ==================================================================
   website projects
   ------------------------------------------------------------------
     tag, title, date, context, accent same as everywhere else
     preview   a screenshot of the site (e.g. "assets/site-01.png".)
               a full-page screenshot tool works well for this. shows
               up as the card's cover on the grid.
     url       the live link. clicking a card always opens the REAL
               live site in the spotlight (an iframe), regardless of
               whats in preview. preview is just for the grid cover,
               clicking in always gets u the live thing.

   so: preview is required if u want a card to actually show something
   instead of js sitting there tinted (no auto-fetch, gotta screenshot
   it urself), but the spotlight/click-in behaviour is always live no
   matter what.
================================================================== */
const siteProjects = [
  {
    tag: "Portfolio",
    title: "This Portfolio",
    date: "August 2026",
    context:
      "The site you're looking at right now. I wanted to host my own portfolio without using a cookie cutter template. While my other projects prove I can code from scratch, this site was vibecoded so I could focus on what matters: showcasing my video, design, and marketing work.",
    accent: "#7ba3e8",
    preview: "assets/frontend-design/portfolio site.png",
    url: "index.html"
  },
  {
    tag: "University Assignment",
    title: "Frutiger Aero Website",
    date: "June 2026",
    context:
      "A design-forward web concept that translates the Wikipedia history of Frutiger Aero into a vibrant, nostalgic digital experience. This university assignment was extremely strict on NO AI usage in the code. I centralised nostalgia and accessibility. Not to flex but I got a HD on this assignment, I put a lot of passion into it.",
    accent: "#8d6fd6",
    preview: "assets/frontend-design/frutiger aero site.png",
    url: "https://frutigeraero.adeebacreative.com/"
  },
  {
    tag: "University Assignment",
    title: "First Year Deck",
    date: "September 2021",
    context: "My very first university web project. A playful, playing-card-inspired personal profile showcasing the foundations of my frontend development journey. Got a HD on this :)",
    accent: "#6c7fdb",
    preview: "assets/frontend-design/card deck site.png",
    url: "https://firstyeardeck.adeebacreative.com/"
  }
];

const SHOW_PAGES = false;

buildGallery({
  grid: document.getElementById("the-grid"),
  mode: "site",
  pieces: siteProjects,
  paginate: SHOW_PAGES
});
