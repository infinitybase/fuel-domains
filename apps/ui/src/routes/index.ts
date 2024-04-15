import { createRouter } from '@tanstack/react-router';
import { rootRoute } from '../hooks/__root.ts';
import {
  buyRoute,
  connectRoute,
  domainsRoute,
  homeRoute,
  profileRoute,
} from './childrens.ts';

const routeTree = rootRoute.addChildren([
  homeRoute,
  connectRoute,
  buyRoute,
  domainsRoute,
  profileRoute,
]);

export const router = createRouter({
  routeTree,
  context: {
    isConnected: null,
  },
});
