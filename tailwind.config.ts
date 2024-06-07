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

import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import daisyui from "daisyui"

export default {
	content: [
    "./src/**/*.astro"
  ],
  darkMode: ["selector", "[data-dark='true']"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter", ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      "light", "dark", "cupcake", "bumblebee",
      "emerald", "corporate", "synthwave", "retro",
      "cyberpunk", "valentine", "halloween", "garden",
      "forest", "aqua", "lofi", "pastel", "fantasy",
      "wireframe", "black", "luxury", "dracula", "cmyk", 
      "autumn", "business", "acid", "lemonade", "night", 
      "coffee", "winter", "dim", "nord", "sunset"
    ]
  }
} satisfies Config