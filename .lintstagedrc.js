// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

// const buildTypeCheckCommand = (filenames) =>
//   `tsc --noEmit --skipLibCheck --pretty ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const buildTypeCheckCommand = () =>
  `tsc --noEmit --skipLibCheck --project tsconfig.json --pretty`;

module.exports = {
  "*.{ts,tsx,js,jsx,json,md}": [buildPrettierCommand],
  "*.{ts,tsx,js,jsx}": [buildEslintCommand],
  "*.ts?(x)": [buildTypeCheckCommand],
};
