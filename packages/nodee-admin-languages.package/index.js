'use strict';

module.exports.id = 'nodee-admin-languages';
module.exports.name = 'nodee-admin-languages';
// module.exports.version = '0.1.0'; - moved to nodee-admin-languages.package.json
module.exports.dependencies = ['nodee-admin'];

module.exports.install = function(){

    // load "nodee-total" module
    var nodee = MODULE('nodee-total');

    // notify nodee-total, that this package is starting
    nodee.setReady('nodee-admin-languages', true);
    nodee.setHealthy('nodee-admin-languages', true);

    var admin = MODULE('nodee-admin');

    /*
     * Admin Area Localisations
     */
    
    // localisation scripts for angular
    // https://github.com/angular/angular.js/tree/master/src/ngLocale
    // map locale folder
    framework.mapping('/3rd-party/angular-locales/','@nodee-admin-languages/angular-locales/');
    
    
    // EN-US
    admin.languages['en-us'] = require('./en-us.js');
    
    // SK-SK
    admin.languages['sk-sk'] = require('./sk-sk.js');
    admin.languages['sk-sk'].angular_locale = '/3rd-party/angular-locales/angular-locale_sk-sk.js';
    
    // CZ-CZ
    admin.languages['cs-cz'] = require('./cs-cz.js');
    admin.languages['cs-cz'].angular_locale = '/3rd-party/angular-locales/angular-locale_cs-cz.js';
    
    // ES-ES
    admin.languages['es-es'] = require('./es-es.js');
    admin.languages['es-es'].angular_locale = '/3rd-party/angular-locales/angular-locale_es-es.js';
};