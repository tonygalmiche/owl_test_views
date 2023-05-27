odoo.define("owl_test_views.OWLTestView", function (require) {
  "use strict";

  const OWLController = require("owl_test_views.OWLTestController");
  const OWLModel = require("owl_test_views.OWLTestModel");
  const OWLRenderer = require("owl_test_views.OWLTestRenderer");
  const AbstractView = require("web.AbstractView");
  //const core = require("web.core");
  const RendererWrapper = require("web.RendererWrapper");
  const view_registry = require("web.view_registry");


  const OWLTestView = AbstractView.extend({
    accesskey: "m",
    display_name: "Test Vue OWL",
    icon: "fa-indent",
    config: _.extend({}, AbstractView.prototype.config, {
      Controller: OWLController,
      Model: OWLModel,
      Renderer: OWLRenderer,
    }),
    viewType: "owl_test",

    /**
     * @override
     */
    init: function () {
      this._super.apply(this, arguments);
    },

    getRenderer(parent, state) {
      state = Object.assign(state || {}, this.rendererParams);
      return new RendererWrapper(parent, this.config.Renderer, state);
    },
  });

  view_registry.add("owl_test", OWLTestView);

  return OWLTestView;
});
