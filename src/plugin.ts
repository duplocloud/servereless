import Serverless from 'serverless' 
import { DuplocloudProvider } from "./provider"
import { DuplocloudServerlessAwsAdapter } from "./aws-adapter"
import { PluginStatic } from 'serverless/classes/Plugin'

export class DuplocloudServerless {

  // serverless type comes from @types/serverless and uses the Service class
  serverless: Serverless
  options: Serverless.Options
  config: DuploConfig
  utils: ServerlessUtils
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  hooks: any;

  constructor(serverless: Serverless, options: Serverless.Options, utils: ServerlessUtils) {
    this.serverless = serverless
    this.options = options
    this.utils = utils
    this.serverless.pluginManager.addPlugin(DuplocloudProvider as unknown as PluginStatic)
    this.serverless.pluginManager.addPlugin(DuplocloudServerlessAwsAdapter as unknown as PluginStatic)
    this.hooks = {
      initialize: () => this.init()
    }
  }

  init() {
    this.utils.log('A plugin named duplocloud')
  }

}
