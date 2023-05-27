odoo.define("owl_test_views.OWLGraphView", function (require) {
  "use strict";

  const OWLController = require("owl_test_views.OWLGraphController");
  const OWLModel = require("owl_test_views.OWLGraphModel");
  const OWLRenderer = require("owl_test_views.OWLGraphRenderer");
  const AbstractView = require("web.AbstractView");
  //const core = require("web.core");
  const RendererWrapper = require("web.RendererWrapper");
  const view_registry = require("web.view_registry");


  const OWLGraphView = AbstractView.extend({
    accesskey: "m",
    display_name: "Test Vue Graph OWL",
    icon: "fa-indent",
    config: _.extend({}, AbstractView.prototype.config, {
      Controller: OWLController,
      Model: OWLModel,
      Renderer: OWLRenderer,
    }),
    viewType: "owl_graph",

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

  view_registry.add("owl_graph", OWLGraphView);

console.log("OWLGraphView",OWLGraphView)


  return OWLGraphView;
});
