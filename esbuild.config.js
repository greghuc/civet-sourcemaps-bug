import esbuild from "esbuild";
import civetPlugin from "@danielx/civet/esbuild";

const isWatch = process.argv.includes("--watch");

const ctx = await esbuild.context({
  entryPoints: ["src/index.civet"],
  outdir: "build",
  bundle: true,
  sourcemap: true,
  format: "esm",
  target: ["node20"],
  plugins: [
    civetPlugin({
      implicitExtension: true,
      cache: true
    })
  ]
});

if (isWatch) {
  console.log("👀 Watching for changes...");
  await ctx.watch();
} else {
  await ctx.rebuild();
  await ctx.dispose();
  console.log("✅ Build complete");
}
