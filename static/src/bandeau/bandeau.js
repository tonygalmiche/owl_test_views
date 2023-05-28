//Source : https://www.fatalerrors.org/a/odoo14-odoo-web-library-owl.html

odoo.define('owl_test_views/static/src/bandeau/bandeau.js', function (require) {
    "use strict";
    const { Component, useState } = owl;
    const { xml } = owl.tags;

    class Bandeau extends Component {
        static template = xml`
            <div class="bg-info text-center p-2">
                <i class="fa fa-arrow-left p-1" style="cursor: pointer;" t-on-click="onPrevious"> </i>
                <b t-esc="messageList[Math.abs(state.currentIndex%4)]"/>
                <i class="fa fa-arrow-right p-1" style="cursor: pointer;" t-on-click="onNext"> </i>
                <i class="fa fa-close p-1 float-right" style="cursor: pointer;" t-on-click="onRemove"> </i>
            </div>`

        constructor(...args) {
            super(...args);
            this.messageList = [
                'Hello World',
                'Welcome to Odoo',
                'Odoo is awesome',
                'You are awesome too'
            ];
            this.state = useState({ currentIndex: 0 });
            console.log('CALLED:> constructor');
        }

        async willStart() {
            console.log('CALLED:> willStart');
        }

        mounted() {
            console.log('CALLED:> mounted');
        }
    
        willPatch() {
            console.log('CALLED:> willPatch');
        }
    
        patched() {
            console.log('CALLED:> patched');
        }
        
        willUnmount() {
            console.log('CALLED:> willUnmount');
        }
    
        onNext(ev) {
            this.state.currentIndex++;
        }
        onPrevious(ev) {
            this.state.currentIndex--;
        }

        onRemove(ev) {
            this.destroy();
        }
        onMouseover(ev) {
            console.log(ev);
        }
    }

    owl.utils.whenReady().then(() => {
        const app = new Bandeau();
        app.mount(document.body);
    });

});
