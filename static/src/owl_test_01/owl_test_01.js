
odoo.define('is_bsa14.OwlTest01', function (require) {
    'use strict';   

    //const { Component } = owl;
    
    //class TestComponent extends Component { }
    //TestComponent.template = 'is_bsa14.TestComponentTemplate';
    //TestComponent.props = ["item_vals", "options"];

    const { action_registry } = require('web.core');
    const AbstractAction = require('web.AbstractAction');
    const OwlTest01 = AbstractAction.extend({
        template: 'is_bsa14.OwlTest01Template',
        hasControlPanel: true,
        loadControlPanel: true,
        withSearchBar: true,
        searchMenuTypes: ['filter', 'favorite'],
        /**
         * @override {web.AbstractAction}
         * @param {web.ActionManager} parent
         * @param {Object} action
         * @param {Object} [action.context]
         * @param {string} [action.context.active_id]
         * @param {Object} [action.params]
         * @param {string} [action.params.default_active_id]
         * @param {Object} [options={}]
         */
        init: function(parent, action, options={}) {
            this._super(...arguments);

            console.log("## owl_test_01 init ##");

            // control panel attributes
            this.action = action;
            this.actionManager = parent;
            this.searchModelConfig.modelName = 'mail.message';
            this.discuss = undefined;
            this.options = options;

            this.component = undefined;

            this._lastPushStateActiveThread = null;
        },
        willStart: function() {
            console.log("## owl_test_01 willStart ##");
            return Promise.all([this._super.apply(this, arguments), this.get_html()]);
        },

        get_html: async function() {
            // const { html } = await this._rpc({
            //     args: [this.given_context],
            //     method: 'get_html',
            //     model: 'stock.traceability.report',
            // });

            const html = "<h1>toto et tutu</h1>";
            this.html = html;
            //this.renderButtons();
        },
    });
    console.log("## owl_test_01 OwlTest01 = ",OwlTest01);

    //OwlTest01.components = { TestComponent }



    action_registry.add('is_bsa14.owl_test_01_registry', OwlTest01);
    return OwlTest01;
});
