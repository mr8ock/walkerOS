---
title: Meta Pixel
---

##### How to send events to Meta Pixel (former Facebook Pixel) via walker.js

| Destination                                                | Source Code                                                                                                                                                 |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Meta Pixel)](https://docs.elbwalker.com/destinations/details/meta-pixel) | [Source Code](https://github.com/elbwalker/walker.js/tree/main/destinations/meta-pixel), [NPM](https://www.npmjs.com/package/@elbwalker/destination-web-meta-pixel) |

## What is Meta Pixel?

[Meta Pixel](https://developers.facebook.com/docs/meta-pixel/) allows tracking visitor activity on a website and tracking conversions that appear in the Meta Ads Manager.

## Configuration

Start by setting up the config for the destination. Optional fields as comments. Destinations can be used via node or directly in the browser.

```js
import { DestinationMeta } from '@elbwalker/destination-web-meta-pixel';

const config /* : DestinationMeta.Config */ = {
  // consent: { marketing: true }, // Neccessary consent states
  custom: {
    pixelId: '1234567890', // The ads accounts id used for every conversion
    // currency: 'EUR', // Default currency is EUR
    // pageview: true, // Send the PageView event (default yes, deactivate actively)
  },
  // init: true, // Skip the initialisation
  // loadScript: true, // Load additional required scripts on init
  mapping: {
    // e.g. order
    entity: {
      // e.g. complete
      action: {
        custom: {
          // id: 'order_id', // Name of data property key to use in content_ids
          // name: 'title', // Name of data property key to use as content_name
          track: 'Purchase', // Name of a standard event to track
          value: 'revenue', // Name of data property key to use for value
        },
      },
    },
  },
};
```

### Node usage
```js
npm i --save @elbwalker/destination-web-meta-pixel
```

```js
import { elb } from '@elbwalker/walker.js';
import destinationMetaPixel from '@elbwalker/destination-web-meta-pixel';

elb('walker destination', destinationMetaPixel, config);
```

### Browser usage

Loading the destination via dynamic import

```html
<script>
  // Make sure to initialize the elb function once.
  function elb() {
    (window.elbLayer = window.elbLayer || []).push(arguments);
  }

  // Upload the dist/index.mjs on your own server
  const destination = (
    await import(
      'https://cdn.jsdelivr.net/npm/@elbwalker/destination-web-meta-pixel/dist/index.mjs'
    )
  ).default;

  elb('walker destination', destination, config);
</script>
```