import type { APIEvent } from "@solidjs/start/server"
import { redirect } from "@solidjs/router"
import { localeFromRequest, route } from "~/lib/language"

// Browse is a product now, served at /browse; its old extension page goes there for good.
export async function GET(event: APIEvent) {
  return redirect(route(localeFromRequest(event.request), "/browse"), 301)
}
