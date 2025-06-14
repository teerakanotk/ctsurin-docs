import nextra from "nextra";

const withNextra = nextra({
  search: { codeblocks: false },
  // contentDirBasePath: "/docs",
  defaultShowCopyCode: true,
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withNextra(nextConfig);
