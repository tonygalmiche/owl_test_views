odoo.define(
  "owl_test_views/static/src/components/owl_component1/owl_component1.js",
  function (require) {
    "use strict";
    const { Component } = owl;
    const patchMixin = require("web.patchMixin");

    const { useState } = owl.hooks;

    class OwlComponent1 extends Component {
      /**
       * @override
       */
      constructor(...args) {
        super(...args);
        this.state = useState({});
      }
    }

    Object.assign(OwlComponent1, {
      props: {
        item: {},
      },
      template: "owl_test_views.OwlComponent1",
    });

    return patchMixin(OwlComponent1);
  }
);






