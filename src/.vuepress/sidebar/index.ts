// export * from "./en.js";
// export * from "./zh.js";

import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   icon: "discover",
    //   text: "demo",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      icon: "discover",
      text: "Tutorial",
      prefix: "tutorial/",
      link: "tutorial/",
      children: "structure",
    },
    // {
    //   text: "Docs",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
});
