import fs from "fs";
import path from "path";
import Handlebars from "handlebars";

const renderTemplate = (
  templateName: string,
  data: Record<string, any>
): string => {
  const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
  const templateSource = fs.readFileSync(templatePath, "utf8");

  // Compila la plantilla con Handlebars
  const template = Handlebars.compile(templateSource);

  // Renderiza el HTML con los datos
  const result = template(data);

  return result;
};

export default renderTemplate;
