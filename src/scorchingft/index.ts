import { Components } from "@/types/type";
import { App } from "vue";

const modules = import.meta.glob('./**/*.vue', { eager: true });

function toKebab(name: string) {
    return 'sf-' + name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .toLowerCase()
}

const components = {
    install(app: App) {
        for (const path in modules) {
            const component = (modules[path] as Components).default;

            const componentName = toKebab(path.split('/')[1]);
            app.component(componentName, component);
        }
    }
}

export default components;