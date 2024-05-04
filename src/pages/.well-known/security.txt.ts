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

import type { APIRoute } from "astro";

const securityTxt = `
Contact: mailto:mukulkedia11@gmail.com
Expires: 2034-01-01T05:00:00.000Z
Preferred-Languages: en
Canonical: ${new URL('.well-known/security.txt', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(securityTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    }
  });
};