import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import { ElButton, ElLink, ElDivider,  ElTable, ElTableColumn,ElCard,ElSpace,ElAffix, ElRow,ElCol,ElDropdown,ElDropdownMenu,ElDropdownItem, ElCarousel, ElCarouselItem, ElAlert, ElScrollbar} from 'element-plus';
const components = [ ElButton, ElLink, ElDivider, ElTable, ElTableColumn,ElCard,ElSpace,ElAffix, ElRow, ElCol,ElDropdown,ElDropdownMenu,ElDropdownItem,ElCarousel, ElCarouselItem, ElAlert, ElScrollbar];

export default app => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}