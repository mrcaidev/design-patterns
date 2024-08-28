import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Design Patterns",
  description:
    "Design patterns written in TypeScript, under OOP and FP paradigm.",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg",
      },
    ],
  ],
  cleanUrls: true,
  srcDir: "src",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.svg",
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Articles",
        link: "/introduction",
        activeMatch: "/.+",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction",
      },
    ],
    outline: {
      level: [2, 3],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mrcaidev/design-patterns",
      },
    ],
    footer: {
      message: "Released under the CC-BY-NC-SA 4.0 License.",
      copyright: "© 2022 Yuwang Cai",
    },
    editLink: {
      pattern:
        "https://github.com/mrcaidev/design-patterns/edit/main/src/:path",
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },
});
