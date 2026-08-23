/* ==================================================================
   social n marketing projects
   ------------------------------------------------------------------
   same idea as the video page, but each project is a set of
   "frames" instead of one poster. this is what makes it open as a
   swipeable carousel when there's more than one.

     tag, title, date, context, accent   same as before
     frames  an array of { type: "image"|"video"|"embed", src: "..." }
              1 frame = opens as a single item, no arrows
              2+ frames = carousel with ‹ › arrows and dots,
               like swiping through an Instagram post
              for "embed", src is just a normal youtube or
               instagram link.
                 { type: "embed", src: "https://www.instagram.com/reel/XXXXXXXXX/" }
               can mix embed frames with image frames in the same carousel, in any order.

   can add images the same way as video: drop them in an
   /assets folder next to these files and point frames at them,
   e.g. src: "assets/campaign-01/slide-1.jpg". if content is
   alrdy posted on instagram, then right-click → "copy image
   address" on the individual photos for a quick source (fyi
   instagram can rotate/expire those links so self-hosting is more
   reliable for anything long-term, or use an "embed" frame instead
   and let instagram host it).
================================================================== */
const socialProjects = [
  {
    tag: "Brand Instagram Post",
    title: "iCAN Youth Girls Introduction",
    date: "January 2026",
    context:
      "Introduction post designed to welcome audiences to iCAN Youth Girls and communicate the program’s identity through engaging social content.",
    accent: "#8d6fd6",
    frames: [
      { type: "image", src: "assets/social-marketing/IYG reintro 1.png" },
      { type: "image", src: "assets/social-marketing/IYG reintro 2.png" },
      { type: "image", src: "assets/social-marketing/IYG reintro 3.png" },
      { type: "image", src: "assets/social-marketing/IYG reintro 4.png" },
      { type: "image", src: "assets/social-marketing/IYG reintro 5.png" },
      { type: "image", src: "assets/social-marketing/IYG reintro 6.png" },
      { type: "image", src: "assets/social-marketing/IYG reintro 7.png" }
    ]
  },

  {
    tag: "Brand Event Instagram Post",
    title: "Masquerade Ball FAQs",
    date: "June 2025",
    context:
      "Informative Instagram post designed to answer key event questions while keeping the Masquerade Ball’s visual identity consistent and engaging.",
    accent: "#7ba3e8",
    frames: [
      { type: "image", src: "assets/social-marketing/masq faqs 1.jpg" },
      { type: "image", src: "assets/social-marketing/masq faqs 2.jpg" },
      { type: "image", src: "assets/social-marketing/masq faqs 3.jpg" },
      { type: "image", src: "assets/social-marketing/masq faqs 4.jpg" }
    ]
  },

  {
    tag: "Brand Event Promotional Stories",
    title: "Masquerade Ball Hype Stories",
    date: "June 2025",
    context:
      "A series of Instagram Stories created to build excitement for the Masquerade Ball through countdowns, event details and promotional visuals.",
    accent: "#b56cdb",
    frames: [
      { type: "image", src: "assets//social-marketing/masq story 1.jpg" },
      { type: "image", src: "assets//social-marketing/masq story 2.jpg" },
      { type: "image", src: "assets//social-marketing/masq story 3.jpg" },
      { type: "image", src: "assets//social-marketing/masq story 4.jpg" },
      { type: "image", src: "assets//social-marketing/masq story 5.png" }
    ]
  },

  {
    tag: "Brand Print Brochure",
    title: "iCan Youth Girls Trifold Brochure",
    date: "October 2024",
    context:
      "Promotional brochure designed to introduce iCAN Youth Girls, highlight its activities and give audiences an easy way to learn more about the program. All while staying consistent to the brand's visual identity.",
    accent: "#6c7fdb",
    frames: [
      { type: "image", src: "assets//social-marketing/trifold brochure 1.png" },
      { type: "image", src: "assets//social-marketing/trifold brochure 2.png" }
    ]
  }
];

const SHOW_PAGES = false; // same pager toggle as the video page, flip when the grid gets long

buildGallery({
  grid: document.getElementById("the-grid"),
  mode: "carousel",
  pieces: socialProjects,
  paginate: SHOW_PAGES
});
