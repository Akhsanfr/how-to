import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "id-ID",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
