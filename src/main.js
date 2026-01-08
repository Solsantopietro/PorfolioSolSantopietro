import "./assets/styles/main.css";

import Aura from "@primeuix/themes/aura";
import { definePreset } from '@primeuix/themes'
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fbeaff',
      100: '#f3c9ff',
      200: '#eaa5ff',
      300: '#e275fb',
      400: '#dc4ff5',
      500: '#ea5ec7',
      600: '#b32dd4',
      700: '#a124bf',
      800: '#8619a5',
      900: '#5b1171',
    },
    'primary-contrast': '#ffffff',
    'primary-emphasis': '{primary.500}',
    'text-color': '#94a3b8', // texto normal
    'text-muted-color': '#64748b', // aún más suave
    'text-title': '#e2e8f0', // agregamos para títulos
    'bg-color': '#0f172a', // fondo general
    'bg-highlight': '#1e293b',
    'bg-highlight-emphasis': '{primary.500}',
    'surface-border': '#334155',
  },
  components: {
    menubar: {
      root: {
        background: '#0f172a',
        color: '{text-title}',
        padding: '0 calc(var(--spacing) * 15)',
        borderRadius: '0'
      },
      item: {
        root: {
          color: '{text-title}',
        }
      }
    },
    button: {
      root: {
        color: '#ea5ec7',
        border: '1px solid #ea5ec7',
        borderRadius: '30px',
        transition: 'all 0.3s ease-in-out',
      },
      lg: {
        paddingX: '0.5rem!important',
        paddingY: '0.5rem!important',
        icon: {
          only: {
            width: 'auto!important'
          }
        }
      },
    },
    card: {
      root: {
        background: 'transparent',
        backdroFilter: 'blur(5px)',
        boxShadow: '0 0 18px 3px rgba(0, 0, 0, .3)',
        border: '1px solid #fff',
        transition: 'color 0.3s ease-in-out',
        color: 'text-color',
      }
    },
    dialog: {
      header: {
        padding: '1rem 1rem 0 1rem',
        color: '{text-title}',
        background: '#0f172a',
      },
      content: {
        lg: {
          width: '100%',
        },
        padding: '0 0 1rem 0',
        background: '#0f172a',
        color: '{text-color}'
      },
    },
    progressspinner: {
      color: {
        one: '{primary.200}!important',
        two: '{primary.400}!important',
        three: '{primary.500}!important',
        four: '{primary.700}!important',
      }
    },
    tabs: {
      tablist: {
        background: 'none!important',
      },
      tab: {
        padding: '0.5rem 1rem!important',
        border: {
          width: '0 0 2px 0!important'
        },
        color: '{text-title}'
      }
    },
    chip: {
      background: '{primary.500}!important',
      color: 'white!important'
    },
    datatable: {
      column: {
        headerCell: {
          background: '#0c132d',
          color: '{text-title}'
        }
      },
    }
  }
});


app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".p-dark",
    },
  },
});

app.mount("#app");
