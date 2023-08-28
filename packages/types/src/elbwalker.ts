import type { Hooks } from '.';

export type AnyObject = Record<string, unknown>;

export interface Function {
  push: Elb;
  config: Config;
}

export interface Elb {
  (event: 'walker config', config: Partial<Config>): void;
  (event: 'walker consent', consent: Consent): void;

  <K extends keyof Hooks.Functions>(
    event: 'walker hook',
    name: K,
    hookFn: Hooks.Functions[K],
  ): void;
  (event: 'walker run'): void;
  (event: 'walker user', user: User): void;
  (
    event: string,
    data?: PushData,
    options?: PushOptions,
    context?: PushContext,
    nested?: Entities,
  ): void;
}

export type PushData = Partial<Config> | Consent | String | User | Properties;

export type PushOptions = Hooks.Functions;

export type PushContext = OrderedProperties;

export interface Config {
  allowed: boolean;
  consent: Consent;
  count: number;
  // @TODO custom state support
  globals: Properties;
  group: string;
  hooks: Hooks.Functions;
  round: number;
  timing: number;
  user: User;
  tagging: number;
  default?: boolean;
}

export type Events = Array<Event>;
export interface Event {
  event: string;
  data: Properties;
  context: OrderedProperties;
  // @TODO custom state support?
  globals: Properties;
  user: User;
  nested: Entities;
  consent: Consent;
  id: string;
  trigger: string;
  entity: string;
  action: string;
  timestamp: number;
  timing: number;
  group: string;
  count: number;
  version: Version;
  source: Source;
}

export interface Consent {
  [name: string]: boolean; // name of consent group or tool
}

// @TODO move to web client?
export type Commands =
  | 'action'
  | 'config'
  | 'consent'
  | 'context'
  | 'destination'
  | 'elb'
  | 'globals'
  | 'hook'
  | 'init'
  | 'link'
  // | 'data-elb' @TODO check this
  | 'run'
  | 'user'
  | 'walker'
  | string;

export interface User {
  id?: string;
  device?: string;
  session?: string;
}

export interface Version {
  client: string;
  tagging: number;
}

export interface Source {
  type: SourceType;
  id: string; // https://github.com/elbwalker/walker.js
  previous_id: string; // https://www.elbwalker.com/
}

export type SourceType = 'web' | 'node' | 'app' | 'other' | string;

export type PropertyType = boolean | string | number;

export type Property = PropertyType | Array<PropertyType>;
export interface Properties {
  [key: string]: Property;
}
export interface OrderedProperties {
  [key: string]: [Property, number];
}

export type Entities = Array<Entity>;
export interface Entity {
  type: string;
  data: Properties;
  nested: Entities;
  context: OrderedProperties;
}
