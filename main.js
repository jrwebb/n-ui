// to avoid race conditions relating to Symbol polyfills
import 'babel-polyfill-silencer';
export {bootstrap, configure} from './js-setup';

// Expose entry points to shared bundle
import ads from './ads';
export const _ads = ads;
import tracking from './tracking';
export const _tracking = tracking;
import date from './date';
export const _date = date;
import header from './header';
export const _header = header;
import cookieMessage from './cookie-message';
export const _cookieMessage = cookieMessage;
import welcomeMessage from './welcome-message';
export const _welcomeMessage = welcomeMessage;
import footer from './footer';
export const _footer = footer;
import myft from './myft';
export const _myft = myft;
import myftDigestPromo from './myft-digest-promo';
export const _myftDigestPromo = myftDigestPromo;
import myftHint from './myft-hint';
export const _myftHint = myftHint;
import typeahead from './typeahead';
export const _typeahead = typeahead;
import utils from './utils';
export const _utils = utils;
import notification from './notification';
export const _notification = notification;
import expander from './expander';
export const _expander = expander;
import grid from 'o-grid';
export const _grid = grid;
import overlay from './overlay';
export const _overlay = overlay;
import viewport from './viewport';
export const _viewport = viewport;
import video from 'o-video';
export const _video = video;
import * as image from 'n-image';
export const _image = image;
import * as subscriptionOfferPrompt from './subscription-offer-prompt';
export const _subscriptionOfferPrompt = subscriptionOfferPrompt;
import * as tooltip from './tooltip';
export const _tooltip = tooltip;
import * as syndication from './syndication';
export const _syndication = syndication;

// Export some third party components we're unlikely to remove in a hurry
import ftdomdelegate from 'ftdomdelegate';
export const _ftdomdelegate = ftdomdelegate;
import superstore from 'superstore';
export const _superstore = superstore;
import superstoreSync from 'superstore-sync';
export const _superstoreSync = superstoreSync;
import React from 'react';
export const _React = React;
import ReactDom from 'react-dom';
export const _ReactDom = ReactDom;
