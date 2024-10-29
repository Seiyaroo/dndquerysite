import { gql } from 'graphql-request';

// Query to fetch all monsters
export const GET_ALL_MONSTERS = gql`
    query GetAllMonsters {
        monsters {
            name
            index
        }
    }
`;

export const GET_ALL_MONS_MONS = gql``