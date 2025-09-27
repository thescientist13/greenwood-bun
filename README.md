# greenwood-bun

A demonstration repo of using Greenwood with Bun.

## Setup

To run locally:

1. Install Bun >= `1.2`
1. Clone the repo
1. Run `bun i`

You can now run these npm scripts
- `bun run --bun dev` - Start the demo with Greenwood local dev server
- `bun run --bun start` - Start the demo with a production Greenwood build

## Demo

This repo aims to demonstrate a couple of Greenwood's features ([API Routes](https://www.greenwoodjs.io/docs/api-routes/) and [SSR pages](https://www.greenwoodjs.io/docs/server-rendering/#routes)) focused on using Web Components (Lit) and Web Standards to deliver the content for the demo.

> _Adapted from this [demo repo](https://github.com/thescientist13/greenwood-lit-ssr)_.

### API Routes

- ✅  `/api/greeting?name{xxx}` - An API that returns a JSON response and optionally uses the `name` query param for customization.  Otherwise returns a default message.
- ✅ `/api/fragment` - An API for returning fragments of server rendered Web Components as HTML, that are then appended to the DOM.  The same card component used in SSR also runs on the client to provide interactivity, like event handling.

### SSR Pages

- ✅ `/products/` - SSR page for rendering Greenwood pages.