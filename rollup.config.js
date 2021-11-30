import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const rollupConfig = {
  input: "src/components/CollisionWrapper/index.tsx",
  output: [
    {
      file: 'dist/react-collision-detection.cjs.production.js',
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [typescript({ objectHashIgnoreUnknownHack: true })],
  external: ["react", "react-dom"],
};

export default rollupConfig;
