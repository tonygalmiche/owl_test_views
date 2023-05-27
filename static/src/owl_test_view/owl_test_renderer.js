odoo.define("owl_test_views.OWLTestRenderer", function (require) {
  "use strict";

  const AbstractRendererOwl = require("web.AbstractRendererOwl");
  const patchMixin = require("web.patchMixin");
  const QWeb = require("web.QWeb");
  const session = require("web.session");

  const { useState } = owl.hooks;

  const components = {
    OwlComponent1: require('owl_test_views/static/src/components/owl_component1/owl_component1.js'),
    OwlComponent2: require('owl_test_views/static/src/components/owl_component2/owl_component2.js'),
  };

  class OWLTestRenderer extends AbstractRendererOwl {
    constructor(parent, props) {
      super(...arguments);
      this.qweb = new QWeb(this.env.isDebug(), { _s: session.origin });
      this.state = useState({
        localItems: props.items || [],
      });
    }

    willUpdateProps(nextProps) {
      Object.assign(this.state, {
        localItems: nextProps.items,
      });
    }


    // ClickButton1() {
    //   console.log("ClickButton1");
    //   return this.do_action({
    //     type: 'ir.actions.act_window',
    //     res_model: 'res.partner',
    //     name: 'New Allocation Request',
    //     views: [[false,'tree']],
    //   });




    // }


    // ClickButton2() {
    //   console.log("ClickButton2");
    //   this.action.doAction("base.action_partner_form");

    // }




  }


  Object.assign(OWLTestRenderer, {
    components,
    defaultProps: {
      items: [],
    },
    props: {
      items: {
        type: Array,
      },
      arch: {
        type: Object,
        optional: true,
      },
       isEmbedded: {
        type: Boolean,
        optional: true,
      },
      noContentHelp: {
        type: String,
        optional: true,
      },
    },
    template: "owl_test_views.OWLTestRenderer",
  });

  return patchMixin(OWLTestRenderer);
});
