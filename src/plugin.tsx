import React from 'react';
import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

export const deployStatusPlugin = createPlugin({
  id: 'deploy-status',
  routes: {},
});

export const DeployStatusCard = deployStatusPlugin.provide(
  createRoutableExtension({
    name: 'DeployStatusCard',
    component: () => import('./components/DeployStatusCard'),
    mountPoint: 'entity-content',
  }),
);
