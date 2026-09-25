/* ==================================================================
   graphic design projects
   same shape as social-marketing-data.js (see the comments
   in dat file for how frames/carousels work and how to add images.)
================================================================== */
const graphicProjects = [

   {
    tag: "Experiments",
    title: "Everlong",
    date: "September 2025",
    context:
      "An experimental piece inspired by Foo Fighters’ 'Everlong', using underwater imagery, layered textures, and distorted typography to recreate the song’s hazy, submerged atmosphere.",
    accent: "#8d6fd6",
    frames: [{ type: "image", src: "assets/graphic-design/everlong.jpg" }]
  },
   
    {
    tag: "Experiments",
    title: "Duvet",
    date: "September 2025",
    context:
      "An experimental digital artwork inspired by the melancholy of Boa's Duvet, layering angelic imagery, cool blue tones, and distorted typography to create a dreamlike composition.",
    accent: "#8d6fd6",
    frames: [{ type: "image", src: "assets/graphic-design/duvet.jpg" }]
  },
   
   {
    tag: "Experiments",
    title: "Nothing to Lose",
    date: "September 2026",
    context:
      "An experimental piece exploring melancholy and impermanence through rainy imagery, distorted typography, and expressive pixel elements. The contrast between the cold, reflective photograph and vivid yellow details creates a deliberately chaotic, dreamlike composition.",
    accent: "#8d6fd6",
    frames: [{ type: "image", src: "assets/graphic-design/nothing to lose.jpeg" }]
  },

   {
    tag: "Experiments",
    title: "Arabian Driftcore",
    date: "September 2025",
    context:
      "Arabian Driftcore is a nostalgic digital art movement rooted in Saudi car culture, blending drifting imagery with moody, surreal overlays and intense gazes. Here is my take, combining portraits of my friend Yasmin with her favourite cars through masking, blending, typography, and cinematic colour grading.",
    accent: "#8d6fd6",
    frames: [
      { type: "image", src: "assets/graphic-design/moonlit night.png" },
      { type: "image", src: "assets/graphic-design/clouds drift.png" },
      { type: "image", src: "assets/graphic-design/scarlet mirage.png" }
    ]
  }
];

const SHOW_PAGES = false;

buildGallery({
  grid: document.getElementById("the-grid"),
  mode: "carousel",
  pieces: graphicProjects,
  paginate: SHOW_PAGES
});
