odoo.define("owl_test_views.DhtmlxGanttRenderer", function (require) {
  "use strict";
  const AbstractRendererOwl = require("web.AbstractRendererOwl");
  const patchMixin = require("web.patchMixin");
  const QWeb = require("web.QWeb");
  const session = require("web.session");
  const { useState } = owl.hooks;
  const components = {};


  class DhtmlxGanttRenderer extends AbstractRendererOwl {
    constructor(parent, props) {
      super(...arguments);
      this.qweb = new QWeb(this.env.isDebug(), { _s: session.origin });
      this.state = useState({
        localItems: props.items || [],
      });
      this.gantt = gantt;
    }


  mounted() {
    console.log("DhtmlxGanttRenderer mounted");
    this.gantt.init("gantt_here");
    this.gantt.parse({
        data: [
        { id:1, text:"Project #2", start_date:"01-04-2018", 
            duration:18, progress:0.4, open:true },
        { id:2, text:"Task #1b", start_date:"02-04-2018", 
            duration:8, progress:0.6, parent:1 },
        { id:3, text:"Task #2b", start_date:"11-04-2018", 
            duration:8, progress:0.6, parent:1 }
        ],
        links: [
        { id:1, source:1, target:2, type:"1" },
        { id:2, source:2, target:3, type:"0" }
        ]
    });
  }

  
    willUpdateProps(nextProps) {
      Object.assign(this.state, {
        localItems: nextProps.items,
      });
    }
  }


  Object.assign(DhtmlxGanttRenderer, {
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
    template: "DhtmlxGanttTemplate",
  });

  return patchMixin(DhtmlxGanttRenderer);
});
