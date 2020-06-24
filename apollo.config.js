module.exports = {
  client: {
    excludes: ['src/schemas/**/*.graphql', 'src/output/**/*.graphql'],
    service: {
      localSchemaFile: 'src/output/master-schema.graphql',
      name: 'test-schema',
    },
  },
};
