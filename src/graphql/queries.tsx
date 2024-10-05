import { gql } from 'graphql-request';

// Query to fetch all monsters
export const GET_ALL_MONSTERS = gql`
    query GetAllMonsters {
        monsters {
            id
            name
            type
            description
        }
    }
`;

export const GET_ALL_MONS_MONS = gql``