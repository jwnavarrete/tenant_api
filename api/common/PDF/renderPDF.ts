import fs from "fs";
import path from "path";
import Handlebars from "handlebars";
import puppeteer from "puppeteer";

const renderPDF = async (
  templateName: string,
  fileName: string,
  data: Record<string, any>
): Promise<string> => {
  const templatePath = path.join(__dirname, `/${templateName}.html`);
  console.log("templatePath:", templatePath)
  const templateSource = fs.readFileSync(templatePath, "utf8");

  // Compila la plantilla con Handlebars
  const template = Handlebars.compile(templateSource);

  // Renderiza el HTML con los datos
  const html = template(data);

  // GENERACION DEL PDF A PARTIR DEL HTML
  let browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // Concatenar fecha al nombre del archivo
  const timestamp = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 12); // Formato: yyyymmddhhmm
  const uniqueFileName = `${fileName.replace(/\.pdf$/, "")}-${timestamp}.pdf`;

  const outputPath = path.join(process.cwd(), "tmp", uniqueFileName);
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let page = await browser.newPage();
  await page.setContent(html);
  await page.pdf({ path: outputPath, format: "A4", printBackground: true });
  await browser.close();

  return outputPath;
};

export default renderPDF;
