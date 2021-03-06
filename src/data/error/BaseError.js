'use strict';

/**
 * Default Error class that can throw error
 */
export default class BaseError extends Error {
  /**
   * PubSubError Class's constructor
   */
  constructor(...args) {
    super(...args);
    this.name = this.constructor.name;
  }
}
