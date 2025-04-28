// Copyright (c) JupyterLite Contributors
// Distributed under the terms of the Modified BSD License.

import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IKernel, IKernelSpecs } from '@jupyterlite/kernel';

import { EchoKernel } from './kernel';

/**
 * A plugin to register the echo kernel.
 */
const kernel: JupyterFrontEndPlugin<void> = {
  id: '@jupyterlite/echo-kernel:kernel',
  autoStart: true,
  requires: [IKernelSpecs],
  activate: (app: JupyterFrontEnd, kernelspecs: IKernelSpecs) => {
    kernelspecs.register({
      spec: {
        name: 'echo',
        display_name: 'Echo',
        language: 'text',
        argv: [],
        resources: {
          'logo-32x32': '',
          'logo-64x64': ''
        }
      },
      create: async (options: IKernel.IOptions): Promise<IKernel> => {
        return new EchoKernel(options);
      }
    });
  }
};

const plugins: JupyterFrontEndPlugin<any>[] = [kernel];

export default plugins;
