import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://www.dnd5eapi.co/graphql'

export const client = new GraphQLClient(endpoint, {
    headers: {
        'Content-Type': 'application/json',
    },
});