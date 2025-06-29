import nextra from "nextra";

const withNextra = nextra({
  // ... Add Nextra-specific options here
  search: { codeblocks: false },
  defaultShowCopyCode: true,
});

export default withNextra({
  // ... Add Next-config options here
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: true,
      },
    ];
  },
});
