odoo.define("owl_test_views.DhtmlxGanttController", function (require) {
  "use strict";

  var AbstractController = require("web.AbstractController");

  var DhtmlxGanttController = AbstractController.extend({
    custom_events: _.extend({}, AbstractController.prototype.custom_events, {}),

    /**
     * @override
     * @param parent
     * @param model
     * @param renderer
     * @param {Object} params
     */
    init: function (parent, model, renderer, params) {
      this._super.apply(this, arguments);
    }
  });

  return DhtmlxGanttController;
});

