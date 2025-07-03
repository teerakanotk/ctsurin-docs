export default {
  index: {
    type: "page",
    display: "hidden",
  },
  docs: {
    title: "Documentation",
    type: "page",
    items: {
      server: {
        items: {
          "proxmox-ve": {
            title: "Proxmox VE",
            items: {
              installation: {
                title: "Installation",
              },
              repository: "",
              lxc: {
                title: "LXC",
              },
            },
          },
          "technitium-dns": {
            title: "Technitium DNS",
            items: {
              installation: {
                title: "Installation",
              },
              "dns-zone": {
                title: "DNS Zone",
              },
              "dns-record": {
                title: "DNS Record",
              },
              dhcp: "",
            },
          },
          docker: "",
          "nginx-proxy-manager": {
            title: "Nginx Proxy Manager",
          },
          zabbix: {
            title: "Zabbix",
            items: {
              installation: {
                title: "Installation",
              },
              notification: {
                title: "Notification",
              },
            },
          },
        },
      },
      // firewall: {
      //   items: {
      //     'huawei-usg6530e': {
      //       title: "Huawei USG6530E",
      //     }
      //   }
      // },
      // switch: {
      //   items: {
      //     'huawei-s5731-h': {
      //       title: "Huawei S5731-H",
      //     }
      //   }
      // }
    },
  },
};
