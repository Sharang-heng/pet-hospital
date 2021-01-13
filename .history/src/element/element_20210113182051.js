import Vue from 'vue'
import {
    Calendar,
    Message,
    DatePicker,
    Select,
    Option,
    Button,
    Input,
    Form,
    FormItem,
    Radio,
    Steps,
    Step
} from 'element-ui'

Vue.prototype.$message = Message
Vue.component(Message.name, Message)
Vue.use(Calendar)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(Steps)
Vue.use(Step)