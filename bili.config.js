import path from "path";

const isDev = process.env.NODE_ENV === "dev";

const config = {
  input: {
    "style-tween": "./src/index.js",
  },
  plugins: {
    alias: {
      resolve: [".js"],
      entries: [
        { find: /^@\/(.*)/, replacement: path.resolve(__dirname, "src/$1") },
      ],
    },
  },
  output: {
    extractCSS: false,
    dir: "./dist/",
    format: isDev ? ["esm"] : ["esm", "cjs", "umd", "umd-min"],
    moduleName: "StyleTween",
  },
};

export default config;
