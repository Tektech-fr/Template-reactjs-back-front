import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@Comp": path.resolve(__dirname, "src/components"),
			"@Page": path.resolve(__dirname, "src/pages"),
			"@SassC": path.resolve(__dirname, "src/styles/components"),
			"@SassP": path.resolve(__dirname, "src/styles/pages"),
		},
	},
});

