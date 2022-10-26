/**
 * Copyright (c) 2022 | LuciferMorningstarDev <contact@lucifer-morningstar.dev>
 * Copyright (C) 2022 | Pharaoh & Morningstar LLC team and contributors
 */

import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['**/js/*.test.js'],
        globals: true,
        reporters: 'verbose'
    },
    root: 'src',
    build: {
        emptyOutDir: true,
        outDir: '../dist'
    }
});
