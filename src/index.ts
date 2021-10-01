import {
  JupyterLiteServer,
  JupyterLiteServerPlugin
} from '@jupyterlite/server';

/**
 * Initialization data for the @jupyterlite/echo-kernel extension.
 */
const plugin: JupyterLiteServerPlugin<void> = {
  id: '@jupyterlite/echo-kernel:plugin',
  autoStart: true,
  activate: (app: JupyterLiteServer) => {
    console.log('JupyterLite server extension @jupyterlite/echo-kernel is activated!');
  }
};

export default plugin;
