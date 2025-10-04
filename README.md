# greenwood-bun

A demonstration repo of using [Greenwood](https://greenwoodjs.dev/) with [Bun](https://bun.sh/) and WCC for server-rendering.

## Setup

To run locally:

1. Install Bun >= `1.2`
1. Clone the repo
1. Run `bun i`

You can now run these npm scripts
- `bun run --bun dev` - Start the demo with Greenwood local dev server
- `bun run --bun start` - Start the demo with a production Greenwood build
- `bun run test` - Run tests
- `bun run test:tdd` - Run tests in watch mode

## Demo

This repo aims to demonstrate a couple of Greenwood's features ([API Routes](https://www.greenwoodjs.io/docs/api-routes/) and [SSR pages](https://www.greenwoodjs.io/docs/server-rendering/#routes)) focused on using Web Components (WCC) and Web Standards to deliver the content for the demo.

### API Routes

- ✅  `/api/greeting?name{xxx}` - An API that returns a JSON response and optionally uses the `name` query param for customization.  Otherwise returns a default message.
- ✅ `/api/fragment` - An API for returning fragments of server rendered Web Components as HTML, that are then appended to the DOM.  The same card component used in SSR also runs on the client to provide interactivity, like event handling.
- ✅ `/api/search` - An API for handling a search using `request.formData()`
- ✅ `/api/webhook/event` - A nested API for mimicking a webhook POST request that uses `request.json()`

### SSR Pages

- ✅ `/blog/first-post/` - Nested SSR page for rendering a content page.
- ✅ `/products/` - SSR page for rendering Greenwood pages.

## Upstreams

1. [ ] (Greenwood) - [refine node modules resource plugin](https://github.com/ProjectEvergreen/greenwood/pull/1577/)
1. [ ] (Bun) - [Decorators are not support](https://github.com/oven-sh/bun/issues/4122#issuecomment-2775035141)
1. [ ] (Bun) - [Plugins in workers are not supported](https://github.com/oven-sh/bun/issues/12608#issuecomment-3342167423) (means Greenwood custom loaders can't be used)