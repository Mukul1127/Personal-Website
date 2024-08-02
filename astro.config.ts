/*
  Mukul's Personal Website is a Personal Website 
  Copyright (C) 2024 Mukul Kedia

  Mukul's Personal Website is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Mukul's Personal Website is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with Mukul's Personal Website. If not, see <https://www.gnu.org/licenses/>.
*/

import { defineConfig } from "astro/config";

const SITE = "https://www.mookul.dev"

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    (await import("@astrojs/tailwind")).default(),
    (await import("@playform/compress")).default()
  ],
  build: {
    assetsPrefix: SITE
  },
  output: "hybrid",
  adapter: (await import("@astrojs/cloudflare")).default({
    imageService: "cloudflare"
  }),
  security: {
    checkOrigin: true
  }
});
