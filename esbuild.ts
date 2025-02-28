import * as fs from "node:fs";
import * as path from "node:path";
import * as esbuild from "esbuild";
import { GasPlugin } from "esbuild-gas-plugin";

esbuild
  .build({
    entryPoints: ["./src/main.ts"],
    bundle: true,
    minify: true,
    outfile: "./dist/main.js",
    plugins: [GasPlugin],
    define: { 'import.meta.vitest': 'undefined' },
  })
  .then(() => {
    // Copy the appsscript.json file to the dist directory
    const srcPath = path.resolve("./src/appsscript.json");
    const destPath = path.resolve("./dist/appsscript.json");
    fs.copyFileSync(srcPath, destPath);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
