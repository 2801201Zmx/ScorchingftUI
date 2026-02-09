function toKebab(name: string) {
    return (name[0].toUpperCase() + name.replace(name[0], '')).replace('.vue', '').trim();
}

function getArrowIcon(paths: string): string[] {

    const componentNames: string[] = [];

    const modules = import.meta.glob(`@/scorchingftIcon/**/*.vue`, { eager: true });
    for (const path in modules) {
        if (path.includes(paths)) {
            const app = path.split('/')[4];
            componentNames.push(
                toKebab(path.split('/')[4])
            )
        }
    }

    return componentNames;
}

export default getArrowIcon;