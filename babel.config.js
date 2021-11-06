module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: 'auto',
                loose: true,
                shippedProposals: true,
                useBuiltIns: 'entry',
                corejs: 3,
                targets: { node: 'current' },
            },
        ],
        [
            '@babel/preset-react',
            {
                development: process.env.BABEL_ENV === 'development',
                // runTime: 'automatic',
            },
        ],
        [
            '@babel/preset-typescript',
            {
                isTSX: true,
                allExtensions: true,
                onlyRemoveTypeImports: true,
            },
        ],
    ],
    plugins: [
        // process.env.BABEL_ENV === 'production' ? '@babel/plugin-transform-react-constant-elements' : null, // only for production
        // process.env.BABEL_ENV === 'production' ? '@babel/plugin-transform-react-inline-elements' : null, // only for production
        '@babel/plugin-transform-runtime',
        'syntax-async-functions',
        'transform-react-remove-prop-types',
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                alias: {
                    '^__tests__/(.+)': './src/__tests__/\\1',
                    '^common/(.+)': './src/common/\\1',
                    '^common/assets/(.+)': './src/common/assets/\\1',
                    '^common/hooks/(.+)': './src/common/hooks/\\1',
                    '^common/types/(.+)': './src/common/types/\\1',
                    '^common/validators/(.+)': './src/common/validators/\\1',
                    '^components/(.+)': './src/components/\\1',
                    '^components/atoms/(.+)': './src/components/atoms/\\1',
                    '^components/molecules/(.+)': './src/components/molecules/\\1',
                    '^components/organisms/(.+)': './src/components/organisms/\\1',
                    '^layouts/(.+)': './src/layouts/\\1',
                    '^pages/(.+)': './src/pages/\\1',
                    '^public/(.+)': './public/\\1',
                    '^services/(.+)': './src/services/\\1',
                    '^services/api/(.+)': './src/services/api/\\1',
                    '^services/auth/(.+)': './src/services/auth/\\1',
                    '^store/index': './src/store/index.ts',
                    '^store/actions/(.+)': './src/store/actions/\\1',
                    '^store/constants/(.+)': './src/store/constants/\\1',
                    '^store/reducers/(.+)': './src/store/reducers/\\1',
                    '^store/types/(.+)': './src/store/types/\\1',
                },
            },
        ],
    ],
}
