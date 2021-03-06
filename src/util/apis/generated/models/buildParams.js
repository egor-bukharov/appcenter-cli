/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a BuildParams.
 */
class BuildParams {
  /**
   * Create a BuildParams.
   * @member {string} [sourceVersion] Version to build which represents the
   * full Git commit reference
   * @member {boolean} [debug] Run build in debug mode
   */
  constructor() {
  }

  /**
   * Defines the metadata of BuildParams
   *
   * @returns {object} metadata of BuildParams
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BuildParams',
      type: {
        name: 'Composite',
        className: 'BuildParams',
        modelProperties: {
          sourceVersion: {
            required: false,
            serializedName: 'sourceVersion',
            type: {
              name: 'String'
            }
          },
          debug: {
            required: false,
            serializedName: 'debug',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = BuildParams;
