odoo.define("owl_test_views.OWLGraphRenderer", function (require) {
  "use strict";

  //import { PieChart } from "./pie_chart/pie_chart";

  const AbstractRendererOwl = require("web.AbstractRendererOwl");
  const patchMixin = require("web.patchMixin");
  const QWeb = require("web.QWeb");
  const session = require("web.session");

  const { useState, useRef } = owl.hooks;


  const components = {
  };

  class OWLGraphRenderer extends AbstractRendererOwl {
    constructor(parent, props) {
      super(...arguments);
      this.qweb = new QWeb(this.env.isDebug(), { _s: session.origin });
      this.state = useState({
        localItems: props.items || [],
      });

      this.props = props;

      this.canvasRef = useRef("myChart");


    }

    mounted() {
      console.log("mounted OWLGraphRenderer");

      //console.log("this.canvasRef 1=",this.canvasRef,this.canvasRef.el);


      this.renderChart();
    }


    patched() {

      this.renderChart();


    }


    onPieClick(ev, chartElem) {
      const clickedIndex = chartElem[0]._index;
      //this.props.onPieClick(this.labels[clickedIndex]);

      console.log(ev, chartElem, clickedIndex);

      console.log(chartElem[0]);
      console.log(chartElem[0]._model);
      console.log(chartElem[0]._model.label);


    }


    
    renderChart() {
      if (this.chart) {
         this.chart.destroy();
      }
      console.log("patched : this.props = ",this.props);


      var labels = [];
      var data = []
  

      for (var x in this.props.items) {
          console.log(x, this.props.items[x]);
          labels.push(this.props.items[x].display_name);
          data.push(this.props.items[x].id);
      }

      console.log(labels, data);





      this.chart = new Chart(this.canvasRef.el, {
          type: "bar",
          data: {
              labels: labels,
              datasets: [
                  {
                      label: "Test",
                      data:data,
                  },
              ],
          },
          options: {
              onClick: this.onPieClick.bind(this),
          },
      });
    }


    ClickButton1() {
      console.log("ClickButton1");

      this.env.bus.trigger('do-action', {
        action: {
            type: 'ir.actions.act_window',
            res_model: 'res.partner',
            //res_id: this.thread.id,
            view_mode: 'list,form',
            views: [[false, 'list'],[false, 'form']],
            //target: 'current'
            //target: 'new',
        },
      });
    }


    ClickButton2() {
      console.log("ClickButton2");
      const action = this.env.bus.trigger('do-action', {
        action: {
            type: 'ir.actions.act_window',
            res_model: 'res.users',
            //res_id: this.thread.id,
            //views: [[false, 'tree']],
            view_mode: 'list',
            views: [[false, 'list']],
            //target: 'current'

            //view_mode: 'kanban',
            //views: [[false, 'kanban']],
            //target: 'new',



        },
      });
      console.log("action=",action);
    }
  }


  Object.assign(OWLGraphRenderer, {
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
    template: "owl_test_views.OWLGraphRenderer",
  });

  return patchMixin(OWLGraphRenderer);
});
