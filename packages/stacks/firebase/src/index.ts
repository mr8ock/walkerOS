import type { NodeClient } from '@elbwalker/client-node';
import type { FirebaseStack } from './types';
import { createNodeClient } from '@elbwalker/client-node';
import { tryCatch, validateEvent } from '@elbwalker/utils';
import { onRequest } from 'firebase-functions/v2/https';

// Types
export * from './types';

export function firebaseStack(
  customConfig: FirebaseStack.PartialConfig = {},
): FirebaseStack.Function {
  const config = getConfig(customConfig);
  const { elb, instance } = createNodeClient(config.client);

  const push: FirebaseStack.Push = (options) => {
    return pushFn(instance, options);
  };

  const stack: FirebaseStack.Function = {
    config,
    instance,
    elb,
    push,
  };

  return stack;
}

function getConfig(
  customConfig: FirebaseStack.PartialConfig = {},
): FirebaseStack.Config {
  const defaultConfig: FirebaseStack.Config = {
    firebase: {},
    client: {},
  };

  return { ...defaultConfig, ...customConfig };
}

const pushFn: NodeClient.PrependInstance<FirebaseStack.Push> = (
  instance,
  options = {},
) => {
  return onRequest(options, async (req, res) => {
    // ATTENTION! Never process unknown data from the client

    // @TODO add a custom response handler
    // @TODO move validation to the client
    let error = 'Invalid event';
    const event = tryCatch(validateEvent, (err) => {
      error = String(err);
      console.log({ err, body: req.body });
    })(req.body, instance.config.contracts);

    if (!event) {
      res.status(418).send({ error });
    } else {
      const result = await instance.push(event);

      res.send({
        status: result.status,
        successfull: result.successful.length,
        failed: result.failed.length,
        queued: result.queued.length,
      });
    }
  });
};