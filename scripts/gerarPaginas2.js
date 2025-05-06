// scripts/generateTemplate2.js

import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

const dir = './src/content/template2';
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

for (let i = 1; i <= 1000; i++) {
  const content = `---
title: "${faker.lorem.sentence()}"
posted: "${new Date().toISOString()}"
---

${faker.lorem.paragraphs(3)}
`;

  fs.writeFileSync(path.join(dir, `${i}.mdx`), content);
}
