## Steps performed for setting up the Project

1. Clone the repository :  `git clone git@github.com:manojkondisetti/GraphQL-Learning.git`
2. Install the serverless framework using Node Package Manager (npm): `npm install -g serverless`
3. Perform `npm init` to set up a new (or existing) npm package.
4. Install the dependencies required for the project: `npm install apollo-server-lambda graphql apollo-datasource-rest`.
   This will have all dependencies defined and saved under the local node_modules.
    1. `apollo-server-lambda` - AWS Lambda integration of Apollo GraphQL Server (Apollo provides sane
       defaults/boilerplate) (This has got nothing to do with Amazon Apollo deployment system).
    2. `graphql` - The official JavaScript reference implementation for GraphQL (everything else is an abstraction over
       this).
    3. `apollo-datasource-rest` - Needed to make REST API calls in GQL resolvers
5. [Setup AWS account](https://docs.aws.amazon.com/polly/latest/dg/setup-aws-cli.html) to deploy the artifacts into
   cloud
6. Run : `npx serverless deploy` this will build and deploy all the required artifacts to based on the configuration
   defined in `serverless.yaml`.

## What is expected?

- After executing point 6 a lambda will be deployed in your AWS account.
- GET and POST end points for exploring [graphql-playground](https://github.com/graphql/graphql-playground) will be
  visible on terminal after executing point 6.