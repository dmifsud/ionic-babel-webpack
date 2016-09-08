import {StarterService} from './services.js';

export const AppServices = angular.module('starter.services', [])

.factory('Chats', StarterService);
