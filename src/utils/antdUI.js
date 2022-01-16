import "ant-design-vue/dist/antd.css"

import {Steps, Step, Timeline,TimelineItem, Divider} from "ant-design-vue";
const components = [Steps, Step, Timeline, TimelineItem, Divider];


export default app => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}