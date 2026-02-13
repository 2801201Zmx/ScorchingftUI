import { reactive, ref } from "vue";

import type { Siderbarlist } from "@/types/type";

const siderbar = reactive<Siderbarlist[]>([]);

const modules = import.meta.glob([
    '!../views/components/index.vue',
    '!../views/components/siderbar/*',
    '../views/components/**/*.vue'
], { eager: true });

function toKebab(name: string): string {
    return (name[0].toUpperCase() + name.replace(name[0], '')).replace('.vue', '').trim();
}

for (const path in modules) {
    const obj = siderbar.find(item => item.title === path.split('/')[3]);

    if (obj) {
        obj.component.push({
            title: toKebab(path.split('/')[4]),
            path: toKebab(path.split('/')[4])
        })
    } else {
        siderbar.push({
            title: path.split('/')[3],
            component: [{
                title: toKebab(path.split('/')[4]),
                path: toKebab(path.split('/')[4])
            }]
        })
    }
}

const index = siderbar.findIndex(item => item.title === "Overview概览");

const obj = siderbar[index];

siderbar.splice(index, 1);

siderbar.unshift(obj);

export default siderbar;