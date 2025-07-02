import nextra from "nextra";

const withNextra = nextra({
  search: { codeblocks: false },
  defaultShowCopyCode: true,
  contentDirBasePath: "/docs",
});

export default withNextra({
  // Enable this feature when building for production
  // output: "standalone",
});
