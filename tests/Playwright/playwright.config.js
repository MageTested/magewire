import { defineConfig } from '@playwright/test';
import 'dotenv/config';
import process from 'process';

export default defineConfig({
    testDir: '.',
    fullyParallel: true,
    reporter: [['list'], ['html']],
    workers: process.env.CI ? 1 : undefined,
    retries: process.env.CI ? 2 : 0,
    use: {
        baseURL: process.env.BASE_URL.replace(/^\/+|\/+$/g, ''),
        browserName: 'chromium',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
});
