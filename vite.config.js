import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default ({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        plugins: [vue()],

        server: {
            port: process.env.VITE_PORT,
        },
        resolve: {
            alias: [
                {
                    find: '@', replacement: path.resolve(__dirname, '/src')
                }
            ]
        }
    });
}
