export default {
  docs: {
    title: "Documentation",
    type: "page",
    items: {
      server: {
        items: {
          'proxmox-ve': {
            title: "Proxmox VE",
            items: {
              installation: {
                title: "Installation",
              },
              repository: '',
              lxc: {
                title: "LXC",
                items: {
                  'templates': {
                    title: "Templates",
                  },
                  create:''
                }
              },
            }
          },
          'technitium-dns': {
            title: "Technitium DNS",
            items: {
              installation: {
                title: "Installation",
              },
              zone: {
                title: "Zone Management",
              },
              'record-type': {
                title: "Record Type"
              },
              'record-create': {
                title: 'Create Record'
              },
              dhcp: "",
            }
          },
          'nginx-proxy-manager': {
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
              }
            }
          }
        }
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
    }
  },
};
