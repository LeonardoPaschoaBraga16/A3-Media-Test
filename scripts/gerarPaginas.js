import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

const NUM_PAGINAS = 1000;
const BASE_PATH = './src/content/template1';

fs.mkdirSync(BASE_PATH, { recursive: true });

for (let i = 1; i <= NUM_PAGINAS; i++) {
  const numero = i.toString().padStart(4, '0');
  const slug = `pagina-${numero}`;
  const filePath = path.join(BASE_PATH, `${slug}.md`);

  const content = `---
title: "${faker.lorem.sentence()}"
body: "${faker.lorem.paragraphs(3).replace(/\n/g, ' ')}"
---

`;

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`${NUM_PAGINAS} arquivos gerados com sucesso.`);
