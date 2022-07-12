import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@comp": path.resolve(__dirname, "src/components"),
			"@page": path.resolve(__dirname, "src/pages"),
			"@sassC": path.resolve(__dirname, "src/styles/components"),
			"@sassP": path.resolve(__dirname, "src/styles/pages"),
		},
	},
});

