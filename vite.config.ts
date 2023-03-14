import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import ViteYaml from '@modyfi/vite-plugin-yaml';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		// pluginYaml(),
		ViteYaml()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default defineConfig(config)