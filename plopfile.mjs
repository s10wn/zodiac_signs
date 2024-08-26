export default function (plop) {
  plop.setGenerator("component", {
    description: "Создать компонент",
    prompts: [
      {
        type: "input",
        name: "folderName",
        message: "В какую папку вы хотите поместить файлы?",
      },
      {
        type: "input",
        name: "componentName",
        message: "Какое будет название у компонента?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{kebabCase folderName}}/{{kebabCase componentName}}/{{kebabCase componentName}}.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{kebabCase folderName}}/{{kebabCase componentName}}/{{kebabCase componentName}}.module.css",
        templateFile: "templates/component.module.css.hbs",
      },
      {
        type: "add",
        path: "src/components/{{kebabCase folderName}}/{{kebabCase componentName}}/index.ts",
        templateFile: "templates/index.ts.hbs",
      },

    ],
  });
}
