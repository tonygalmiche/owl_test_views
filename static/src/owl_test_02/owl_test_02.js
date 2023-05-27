odoo.define('is_bsa14.OwlTest02', function (require) {
    'use strict';   
    const { action_registry } = require('web.core');
    const AbstractAction = require('web.AbstractAction');
    const OwlTest02 = AbstractAction.extend({
        template: 'is_bsa14.OwlTest02Template',
        hasControlPanel: false,
 
        init: function(parent, action, options={}) {
            this._super(...arguments);
            console.log("## OwlTest02 init ##");
            //this.component = undefined;
        },
    });
    action_registry.add('is_bsa14.owl_test_02_registry', OwlTest02);
    return OwlTest02;
});


