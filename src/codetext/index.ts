const modules = import.meta.glob(
    [
        "!./index.ts",
        "./**/*.html",
        "./**/*.ts",
        "./**/*.vue",
    ],
    {
        eager: true,
        query: '?raw',
        import: 'default',
    },
) as Record<string, string>;

const codeText: string[] = [];

codeText.push(
    modules["./unpkgCode.html"],
    modules["./jsDelivrCode.html"],
    modules["./allCode.ts"],
    modules["./anxuCode.ts"],
    modules["./iconunpkgCode.html"],
    modules["./iconjsDelivrCode.html"],
    modules["./alliconCode.ts"],
    modules["./useicon.vue"],
);

export default codeText;