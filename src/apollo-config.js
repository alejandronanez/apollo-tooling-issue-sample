module.exports = {
  client: {
    localSchemaFile: 'src/schemas/PersonSchema.graphql',
    includes: ['src/operations/MeQuery.graphql'],
    excludes: ['src/schemas/**/*.graphql'],
    service: {
      name: 'test-schema',
    },
  },
};
