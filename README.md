<p align="left">
  <a href="https://elbwalker.com">
    <img title="elbwalker" src='https://www.elbwalker.com/elbwalker.png' width="300px"/>
  </a>
</p>

# walker.js

The walker.js is an open-source event tracker for all tools. Easy, standardized & flexible. Capture user events in the browser and send them to any destination - just by setting HTML attributes.

[**Explore the docs**](https://docs.elbwalker.com) · [Report Bug](https://github.com/elbwalker/walker.js/issues/new) · [Request Feature](https://github.com/elbwalker/walker.js/issues/new) · [Say hello](https://calendly.com/elbwalker-demo/30min)

## 🤓 Usage

You can implement all sorts of front-end user events. From e-commerce actions like product add to cart or order complete events as well as measuring product usage events, and UX events like navigation or filter usage etc.

Just set a few HTML attributes

```html
<!-- General usage -->
<div elb="ENTITY" elb-ENTITY="KEY:VALUE" elbaction="TRIGGER:ACTION" />

<!-- Example usage -->
<div
  elb="product"
  elb-product="name:Everyday Ruck Snack;price:220"
  elbaction="click:add"
/>
```

The result is for example something like this:

```js
dataLayer.push({
  event: 'product add', // combination of entity and action
  data: {
    // all set properties with the elb-product attribute
    name: 'Everyday Ruck Snack',
    price: 220,
  },
  globals: {
    // all set properties with the elbglobals attribute
    language: 'en',
    test: 'darkmode',
  },
  user: {
    // a stored random id in the cookie (manually added once)
    device: 'cookieid',
  },
  nested: [], // all nested entities within the product
  id: '1647968113641-b4b9h9-5', // timestamp, group & count of the event
  trigger: 'click', // name of the trigger that fired
  entity: 'product', // entity name
  action: 'add', // entity action
  timestamp: 1647968113641, // time when the event fired
  timing: 13.37, // how long it took from the page load to trigger the event
  group: '01b5e2', // random group id for all events on a page
  count: 2, // incremental counter of the events on a page
  walker: true, // flag to filter events
});
```

You are completely free to define naming conventions. All you need to get started are the **entity, action & trigger attributes**.

1. You define the entity scope by setting the `elb` attribute with the name of an entity to an element, e.g. `elb="product"`.
2. An action can be added by setting the `elbaction` attribute on the same level or all child elements in combination with a matching trigger, e.g. `elbaction="click:add"` to fire a _product add_ event when a user clicks on the tagged element.
3. (Optional) To define the entities' properties, set the composited attribute `elb-ENTITY` with the name and value, e.g. `elb-product="name:Everyday Ruck Snack;price:220"`.

```html
<div elb="product" elb-product="name:Everyday Ruck Snack;price:220">
  <button elbaction="click:add">Add to cart</button>
</div>
```

> `elb` and `elbaction` are reserved attributes whereas `elb-` attributes may be arbitrary combinations based on the related entity name.
> Actions and properties can be set anywhere inside an `elb` attribute.

### Triggers

By using the walker.js you don't have to deal with event listener or mutation observer initialization anymore. The walker comes with a bunch of integrated triggers that will fire your event at the right moment.

<table>
  <tr>
    <th>Trigger</th>
    <th>Definition</th>
  </tr>
  <tr>
    <td>load</td>
    <td>after loading a page when DOM is ready</td>
  </tr>
  <tr>
    <td>click</td>
    <td>when the element or a child is clicked</td>
  </tr>
  <tr>
    <td>visible</td>
    <td>after the element has been in viewport for at least 50% for one second</td>
  </tr>
  <tr>
    <td>submit</td>
    <td>on a valid form submission</td>
  </tr>
  <tr>
    <td>custom</td>
    <td>calling elbLayer.push()</td>
  </tr>
</table>

_For further inspiration, please refer to the industry examples in our [docs](https://docs.elbwalker.com/sources/web/industry-examples)._

_Learn more about the elbwalker [event model](https://www.elbwalker.com/blog/elbwalker-event-concept) and background in our [blog](https://www.elbwalker.com/blog/)._

## Modes

There are three modes: `default`, `custom`, and `managed`. Modes describe different ways in which the walker.js can be used.

### Default

By using the default mode, elbwalker automatically starts and pushes events without further configuration into the dataLayer so that you can use it in Google Tag Manager (GTM).

```html
<script class="elbwalker" src="walker.js"></script>
```

### Custom

By using the custom mode, you can e.g. customize destinations flexibly through code yourself. You can use the elbLayer to do the configuration manually.

```html
<script class="elbwalker" src="walker.js" data-custom="true"></script>
```

### Managed

When using our managed mode, a project ID will be added to the script. You can generate your custom project ID and configure the walker.js through our web app (UI).

```html
<script class="elbwalker" src="walker.js" data-project="W3BSHOP"></script>
```

## 🚀 Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/elbwalker/walker.js.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start developing
   ```sh
   npm run dev
   ```

### Destinations

By default all events gets pushed to the `dataLayer`. But you can customize the destinations you want to use. The walker.js comes with optional build-in destinations.

Example of adding a GA4 destination:

```js
import GA4 from './destinations/google-ga4'; // Load the destination
GA4.config.measurementId = 'G-XXXXXXX'; // Set all required properties
elbwalker.push('walker destination', GA4); // Add the destination
```

A destination has a `config` object and an optional `init` as well as the `push` function.
As soon as an event triggers the destinations init function gets called once.
And all events will get sent to the additional destination now.

## 🛠 Contributing

Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make the walker better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👩‍⚖️ License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Send us an email if you have any questions or feedback at hello@elbwalker.com

Want to send the data directly to your Google BigQuery instance? Check out our hosted version at https://elbwalker.com/

<p align="right">(<a href="#top">back to top</a>)</p>
