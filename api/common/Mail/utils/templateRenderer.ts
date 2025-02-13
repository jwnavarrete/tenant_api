import fs from 'fs';
import path from 'path';

const renderTemplate = (templateName: string, data: Record<string, string>): string => {
  const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
  let template = fs.readFileSync(templatePath, 'utf8');

  // Reemplaza los placeholders con los datos proporcionados
  for (const key in data) {
    template = template.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
  }

  return template;
};

export default renderTemplate;