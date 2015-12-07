module.exports.id = 'enterprise-admin-languages';
module.exports.name = 'enterprise-admin-languages';
module.exports.version = '0.1.0';
module.exports.dependencies = ['enterprise-admin'];

module.exports.install = function(){
    var admin = MODULE('enterprise-admin');
    
    admin.languages['en-us'] = require('./en-us.js');
    admin.languages['sk-sk'] = require('./sk-sk.js');
    admin.languages['cz-cz'] = require('./cz-cz.js');
};