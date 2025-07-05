export default {
  index: {
    type: "page",
    display: "hidden",
  },
  docs: {
    title: "Documentation",
    type: "page",
    items: {
      "proxmox-ve": {
        title: "Proxmox VE",
        items: {
          "getting-started": {
            title: "Getting Started",
          },
          repository: "",
          lxc: "",
        },
      },
      docker: {
        title: "Docker",
      },
      "technitium-dns": {
        title: "Technitium DNS",
        items: {
          "getting-started": {
            title: "Getting Started",
          },
          zone: {
            title: "Zone",
          },
          record: {
            title: "Record",
          },
          dhcp: {
            title: "DHCP",
          },
        },
      },
      "nginx-proxy-manager": {
        title: "Nginx Proxy Manager",
      },
      zabbix: {
        title: "Zabbix",
        items: {
          "getting-started": {
            title: "Getting Started",
          },
        },
      },
      "huawei-usg6530e": {
        title: "Huawei USG6530E",
        items: {
          "getting-started": {
            title: "Getting Started",
          },
          "sec-policy": {
            title: "Security Policy",
          },
          "nat-policy": {
            title: "NAT Policy",
          },
        },
      },
    },
  },
};
