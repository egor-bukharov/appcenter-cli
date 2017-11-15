/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ExportConfigurationResult class.
 * @constructor
 * Export configuration result
 *
 * @member {string} id Export configuration id
 * 
 * @member {string} exportType Target resource type of export configuration.
 * Possible values include: 'BlobStorage', 'AppInsights'
 * 
 * @member {string} creationTime Creation time in ISO 8601 format
 * 
 * @member {string} [lastRunTime] Latest time in ISO 8601 format when export
 * completed successfully
 * 
 * @member {string} state State of the export job. Possible values include:
 * 'Enabled', 'Disabled', 'Pending', 'Deleted', 'Invalid'
 * 
 * @member {string} [stateInfo] Additional information about export
 * configuration state
 * 
 * @member {object} [exportConfiguration]
 * 
 * @member {string} [exportConfiguration.type] Polymorhpic Discriminator
 * 
 */
function ExportConfigurationResult() {
}

/**
 * Defines the metadata of ExportConfigurationResult
 *
 * @returns {object} metadata of ExportConfigurationResult
 *
 */
ExportConfigurationResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExportConfigurationResult',
    type: {
      name: 'Composite',
      className: 'ExportConfigurationResult',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        exportType: {
          required: true,
          serializedName: 'export_type',
          type: {
            name: 'Enum',
            allowedValues: [ 'BlobStorage', 'AppInsights' ]
          }
        },
        creationTime: {
          required: true,
          serializedName: 'creation_time',
          type: {
            name: 'String'
          }
        },
        lastRunTime: {
          required: false,
          serializedName: 'last_run_time',
          type: {
            name: 'String'
          }
        },
        state: {
          required: true,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'Enabled', 'Disabled', 'Pending', 'Deleted', 'Invalid' ]
          }
        },
        stateInfo: {
          required: false,
          serializedName: 'state_info',
          type: {
            name: 'String'
          }
        },
        exportConfiguration: {
          required: false,
          serializedName: 'export_configuration',
          type: {
            name: 'Composite',
            polymorphicDiscriminator: 'type',
            uberParent: 'ExportConfiguration',
            className: 'ExportConfiguration'
          }
        }
      }
    }
  };
};

module.exports = ExportConfigurationResult;