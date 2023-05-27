odoo.define(
  "owl_test_views/static/src/components/owl_component2/owl_component2.js",
  function (require) {
    "use strict";
    const { Component } = owl;
    const patchMixin = require("web.patchMixin");

    const { useState } = owl.hooks;

    class OwlComponent2 extends Component {
      /**
       * @override
       */
      constructor(...args) {
        super(...args);
        this.state = useState({});

        // onMounted(() => {
        //   console.log("onMounted");
        // });
      }


      mounted() {
           console.log("mounted");
      }

 



      // use(config) {
      //    onMounted(() => {
      //      console.log("onMounted");
      //   });
      // }






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

    Object.assign(OwlComponent2, {
      defaultProps: {
        items: [],
      },
      props: {
        items: {
          type: Array,
        },
      },
      template: "owl_test_views.OwlComponent2",
    });

    return patchMixin(OwlComponent2);
  }
);






