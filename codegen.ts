import type { CodegenConfig } from '@graphql-codegen/cli'

export const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:5265/graphql',
    documents: [
        "src/lib/**/*.ts",
        "src/routes/**/*.ts"],
    generates: {
        'src/lib/graphql/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
            ]
        }
    }
}

export default config