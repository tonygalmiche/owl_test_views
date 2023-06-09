//Source : https://www.fatalerrors.org/a/odoo14-odoo-web-library-owl.html
//         => Ne fonctionne pas

odoo.define('my_field_widget', function (require) {
    "use strict";
    const { Component } = owl;
    const AbstractField = require(
    'web.AbstractFieldOwl');
    const fieldRegistry = require(
    'web.field_registry_owl');
    class ColorPill extends Component {
        static template = 'OWLColorPill';
        pillClicked() {
            this.trigger('color-updated', {
                val: this.props.pill_no
            });
        }
    }

    class FieldColor extends AbstractField {
        static supportedFieldTypes = ['integer'];
        static template = 'OWLFieldColorPills';
        static components = { ColorPill };

        constructor(...args) {
            super(...args);
            const colors = Array.from({ length: 10 },(_, i) => (i + 1).toString());
            this.totalColors = colors;
            console.log('FieldColor:> constructor : colors = ', colors);
        }
        async willStart() {
            this.colorGroupData = {};
            var colorData = await this.rpc({
                model: this.model, method: 'read_group',
                domain: [], fields: ['color'],
                groupBy: ['color'],
            });
            colorData.forEach(res => {
                this.colorGroupData[res.color] =
                    res.color_count;
            });
            console.log('FieldColor:> willStart');
        }

        colorUpdated(ev) {
            this._setValue(ev.detail.val);
        }

        }
    fieldRegistry.add('int_color', FieldColor);


});