import { Components } from "@/types/type";
import { App } from "vue";

const modules = import.meta.glob('./**/*.vue', { eager: true });

function toKebab(name: string) {
    return (name[0].toUpperCase() + name.replace(name[0],'')).replace('.vue', '').trim();
}

const components = {
    install(app: App) {
        for (const path in modules) {
            const component = (modules[path] as Components).default;

            const componentName = toKebab(path.split('/')[2]);
            app.component(componentName, component);
        }
    }
}

export default components;