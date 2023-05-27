odoo.define("owl_test_views.OWLGraphModel", function (require) {
  "use strict";

  var AbstractModel = require("web.AbstractModel");

  //const { useState, useRef } = owl.hooks;

  const OWLGraphModel = AbstractModel.extend({

    init: function () {
      this._super.apply(this, arguments);
      //this.canvasRef = useRef("myChart");
      //this.renderChart();
    },

    __get: function () {
      return this.data;
    },

    __load: function (params) {
      this.modelName = params.modelName;
      this.domain = [];
      if ("domain" in params) {
        this.domain = params.domain;
      }
      this.data = {};

      return this._fetchData();
    },

    __reload: function (handle, params) {
      if ("domain" in params) {
        this.domain = params.domain;
      }
      return this._fetchData();
    },





    // mounted() {
    //   console.log("mounted OWLGraphRenderer");

    //   console.log("this.canvasRef 1=",this.canvasRef,this.canvasRef.el);


    //   this.renderChart();
    // }


    // patched() {
    //   console.log("patched : this.state = ",this.state.localItems);
    // }



    
    // renderChart() {
    //   if (this.chart) {
    //      this.chart.destroy();
    //   }
    //   console.log("this.state = ",this.state);
    //   this.chart = new Chart(this.canvasRef.el, {
    //       type: "bar",
    //       data: {
    //           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //           datasets: [
    //               {
    //                   label: "Test",
    //                   data:[12, 19, 3, 5, 2, 3],
    //               },
    //           ],
    //       },
    //       // options: {
    //       //     onClick: this.onPieClick.bind(this),
    //       // },
    //   });
    // },





    _fetchData: function () {
      var self = this;


      console.log("model = ",this.modelName);

      const model = this.modelName;
      //const model = "product.category";

      return this._rpc({
        model: model,
        method: "search_read",
        limit:20,
        kwargs: {
          domain: this.domain,
        },
      }).then(function (result) {
        self.data.items = result;
      });
    },
  });


  return OWLGraphModel;
});
