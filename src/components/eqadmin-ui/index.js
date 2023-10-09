import eqadminEditor  from "./eqadmin-editor.vue";
export {eqadminEditor};
const  component = [eqadminEditor];

const eqadminUI = {
    install(App){
        component.forEach((item) => {
            App.component(item.name, item);
        });
    }
}

export  default  eqadminUI