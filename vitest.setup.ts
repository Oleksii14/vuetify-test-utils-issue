import { config } from "@vue/test-utils";
import vuetify from "./src/plugins/vuetify";

config.global.plugins.push(vuetify);
config.global.renderStubDefaultSlot = true;
