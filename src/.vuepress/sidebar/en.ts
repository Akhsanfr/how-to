import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
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
