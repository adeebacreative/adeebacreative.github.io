/* ==================================================================
   video projects
   ------------------------------------------------------------------
   each project needs:
   
     type    "video" or "image"
     
     tag     short category label, shows on the card and in the spotlight
     
     title   project name
     
     date    month and year
     
     context a sentence or two abt it
     
     poster  the thumbnail image for the grid card (a .jpg/.png/.webp)
     
     preview (video only, optional) a SHORT muted clip that plays
             when someone hovers the card. skip it and it'll js
             show the poster with a play icon instead.
             
     full    (video only) the actual video that plays when they click
     
     embed   (video only, optional) paste youtube or
             instagram link instead of "full" and it'll embed
             tht instead of looking for a local file.
     accent  a hex colour, tints the card before the poster loads.
     
     frames  OPTIONAL. leave it off and the project behaves like
             normal (one video/image via poster/preview/full/embed
             above). add it when a project is actually a GROUP of
             clips under different links, and it opens as a
             swipeable carousel in the spotlight instead. same
             format as the frames on the social/graphic pages:
               frames: [
                 { type: "video", src: "assets/clip-1.mp4" },
                 { type: "embed", src: "https://youtu.be/XXXXXXXXX" },
                 { type: "image", src: "assets/still.jpg" }
               ]
             when frames is used, the card's thumbnail + hover/auto
             preview loop come from frames[0] instead of
             poster/preview, so put the video u want representing
             the group first. poster/preview/full/embed are ignored
             on a project once it has frames. makes sense once u
             think abt it, with multiple clips in the group those
             fields can't tell which clip they'd even be for
             anymore, frames[0] just wins.

             if frames[0] is a youtube embed, the thumbnail AND the
             hover/auto preview loop are now both pulled straight
             from youtube automatically. no self-hosted clip
             needed, no poster to set by hand, it js works off the
             youtu.be link. (instagram embeds don't get this. insta
             doesn't hand out a no-login preview like that. so an
             instagram-first group just shows the tint + peek icon
             like before, unless u set piece.poster urself as a
             fallback thumbnail.)
             
   preview loop
   PREVIEW_MODE below controls how the little card preview plays:
     "hover"  (default) only plays when u mouse over the card
     "auto"   autoplays + loops straight away, no hover needed
   flip it whenever, doesn't touch anything else.
   
   adding videos
   1. use "embed" instead of "full".
   just paste a normal link and it works
        embed: "https://youtu.be/dQw4w9WgXcQ"
        embed: "https://www.instagram.com/reel/XXXXXXXXX/"
       delete/replace "full" and "preview" on tht project, or js leave them as "".

   2. self-hosting ("full": "assets/video.mp4") still works

   3. google drive direct-links r possible but drive throttles and
      sometimes blocks links that get real traffic. wouldn't rely on it.
================================================================== */
const videoProjects = [
   {
    type: "video",
    tag: "Video Essay",
    title: "Misogyny in Gaming (Assignment)",
    date: "September 2026",
    context: "Video essay for a social marketing subject. Research, scriptwriting, motion graphics and voiceover all by me. Tbh I'm really happy with the result, but I might go back and add more sfx.",
    poster: "https://img.youtube.com/vi/_kEcwvtBwAI/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/_kEcwvtBwAI",
    accent: "#6c7fdb"
  },
   
   {
    type: "video",
    tag: "Recap Reel",
    title: "IRW 2026 (Recap Reel)",
    date: "September 2026",
    context:
      "A recap reel created for IRW 2026, wrapping the event through 3d modelling, motion graphics and sound fx.",
    poster: "https://img.youtube.com/vi/AlNKu7T7SLk/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/AlNKu7T7SLk",
    accent: "#6c7fdb"
  },
   
   {
    type: "video",
    tag: "Promo Video",
    title: "IRW 2026 (Promo Video)",
    date: "August 2026",
    context:
      "A promotional video created for IRW 2026, introducing the event through fast-paced editing, atmospheric visuals and narrative-driven pacing.",
    poster: "https://img.youtube.com/vi/Mlz-Rxa25fs/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/Mlz-Rxa25fs",
    accent: "#6c7fdb"
  },

  {
    type: "video",
    tag: "Street Interviews",
    title: "Being an Australian Muslim (OnePath Intern Project)",
    date: "June 2026",
    context:
      "A street-interview video exploring the experiences and perspectives of Australian Muslims through candid conversations and documentary-style editing. Created as part of the OnePath Intern Project.",
    poster: "https://img.youtube.com/vi/PZPaOsTE-ek/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/PZPaOsTE-ek",
    accent: "#6c9fdb"
  },

  {
    type: "video",
    tag: "Motion Graphics",
    title: "Bubbles (Website Background)",
    date: "May 2026",
    context: "Looping video for the background of the Frutiger Aero website that I coded.",
    poster: "https://img.youtube.com/vi/GSUxuhBmLVY/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/GSUxuhBmLVY",
    accent: "#6c7fdb"
  },

  {
    type: "video",
    tag: "Event Teaser",
    title: "Luncheon Event Teaser",
    date: "March 2026",
    context:
      "A short event teaser designed to capture the atmosphere and key moments of a luncheon through concise editing, visual pacing and promotional storytelling.",
    poster: "https://img.youtube.com/vi/W_wCLyfJ0aI/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/W_wCLyfJ0aI",
    accent: "#db9f6c"
  },

  {
    type: "video",
    tag: "Event Testimonial",
    title: "Post Event Testimonial",
    date: "March 2026",
    context:
      "A short testimonial piece capturing a participant's reflections after an event, edited to communicate their experience in a concise and engaging format.",
    poster: "https://img.youtube.com/vi/tMJHVix-kik/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/tMJHVix-kik",
    accent: "#6cbd9f"
  },

  {
    type: "video",
    tag: "Promo Reel",
    title: "Workshop Promotion Reel",
    date: "February 2026",
    context:
      "A short promotional reel created to showcase a workshop through energetic editing, visual rhythm and concise promotional storytelling.",
    poster: "https://img.youtube.com/vi/dTk6xZzqljk/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/dTk6xZzqljk",
    accent: "#9b6cdb"
  },

  {
    type: "video",
    tag: "Event Showcase",
    title: "Protest Speech Showcase",
    date: "October 2025",
    context:
      "A showcase edit presenting a protest speech through focused visual storytelling, pacing and documentary-style editing.",
    poster: "https://img.youtube.com/vi/ym6hU37poXo/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/ym6hU37poXo",
    accent: "#db6c6c"
  },

  {
    type: "video",
    tag: "Event Showcase",
    title: "Masquerade Ball (Post Event Showcase)",
    date: "June 2025",
    context:
      "A post-event showcase capturing highlights and atmosphere of a Masquerade Ball through a concise visual edit.",
    poster: "https://img.youtube.com/vi/Z2b3z9Uk5a0/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/Z2b3z9Uk5a0",
    accent: "#b56cdb"
  },

  {
    type: "video",
    tag: "Velocity Edit",
    title: "Winter Visuals (Velocity Edit)",
    date: "September 2019",
    context:
      "A fast-paced visual edit exploring rhythm, speed ramps, motion blur and beat-synced transitions. Focused on creating a cohesive atmosphere while experimenting with dynamic pacing and movement.",
    poster: "https://img.youtube.com/vi/l1U_1N2kClI/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/l1U_1N2kClI",
    accent: "#6c7fdb"
  },

  {
    type: "video",
    tag: "3D Edit",
    title: "Enya (3D Edit)",
    date: "July 2019",
    context:
      "An early exploration of 3D compositing and motion graphics, combining layered visuals, camera movement and effects to create depth around the footage.",
    poster: "https://img.youtube.com/vi/jumpHwTEQoM/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/jumpHwTEQoM",
    accent: "#7d6cdb"
  },

  {
    type: "video",
    tag: "Motion Graphics",
    title: "Editing Group Rct (Motion Graphic)",
    date: "July 2019",
    context:
      "A short motion-graphics piece created to communicate information through animated typography, graphic elements and rhythmic transitions. An early exercise in using animation to make promotional content more engaging.",
    poster: "https://img.youtube.com/vi/xMtw5AWuKYk/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/xMtw5AWuKYk",
    accent: "#6cb9db"
  },

  {
    type: "video",
    tag: "AMV",
    title: "L (AMV)",
    date: "January 2021",
    context:
      "An experiment built around atmosphere and emotional pacing, using transitions, compositing and visual effects to reinforce the tone.",
    poster: "https://img.youtube.com/vi/Ir73wv4QaMo/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/Ir73wv4QaMo",
    accent: "#6c6c7d"
  },

  {
    type: "video",
    tag: "Velocity Edit",
    title: "Butterfly (Velocity Edit)",
    date: "December 2019",
    context:
      "A velocity-focused edit experimenting with speed ramps, beat-synced cuts, motion blur and transitions to match beatsync.",
    poster: "https://img.youtube.com/vi/y4nLfNtb80Y/maxresdefault.jpg",
    preview: "",
    full: "",
    embed: "https://youtu.be/y4nLfNtb80Y",
    accent: "#db6ca8"
  },
  {
    type: "video",
    tag: "Character Edits",
    title: "Character Edits",
    date: "2019–2020",
    context:
      "A collection of character-focused edits exploring fast pacing, cinematic transitions, motion graphics and visual effects across different media.",
    frames: [
      {
        type: "embed",
        src: "https://youtu.be/OM24WdEcgYk"
      },
      {
        type: "embed",
        src: "https://youtu.be/Ep2UIXPzXTE"
      },
      {
        type: "embed",
        src: "https://youtu.be/JdJmjy-V8sw"
      }
    ],
    accent: "#d66c8a"
  }
  //{ type: "video", tag: "Documentary", title: "Podcast Highlight Cuts", date: "January 2026", context: "Long-form podcast episode edited into a series of short highlight clips for social distribution.", poster: "", preview: "", full: "", accent: "#7ba3e8" },
  //{ type: "image", tag: "Event Recap", title: "Warehouse Sessions — Stills", date: "November 2025", context: "Frame grabs and colour-graded stills pulled from a same-day event recap edit.", poster: "", full: "", accent: "#8d6fd6" },
  //{ type: "video", tag: "Narrative", title: "Two Minute Short", date: "September 2025", context: "Narrative short film edit dialogue-driven, built around a slow-burn pacing structure.", poster: "", preview: "", full: "", accent: "#4a3f8f" },
  //{ type: "video", tag: "Client Work", title: "Product Launch Teaser", date: "July 2025", context: "15-second teaser cut for paid social, tested across three aspect ratios.", poster: "", preview: "", full: "", accent: "#7d84d4" },
  //{ type: "image", tag: "Behind the Scenes", title: "On-Set Colour Reference", date: "May 2025", context: "On-set reference stills used to lock the look before grading the final edit.", poster: "", full: "", accent: "#5a7bc4" }
];

/* grid pages r off by default. turn on when theres 9+ projects.
 * will hv a "< earlier / newer >" pager show up under the grid, 6 projects per page */
const SHOW_PAGES = false;

const PREVIEW_MODE = "hover"; // "hover" or "auto", see comment up top

buildGallery({
  grid: document.getElementById("the-grid"),
  mode: "single",
  pieces: videoProjects,
  paginate: SHOW_PAGES,
  previewMode: PREVIEW_MODE
});
