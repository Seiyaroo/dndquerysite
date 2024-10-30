import { gql } from 'graphql-request';

// Query to fetch all monsters
export const GET_ALL_MONSTERS = gql`
    query GetAllMonsters {
        monsters {
            name
            index
            challenge_rating
            image
            armor_class {
                value
            }
        }
    }
`;

export const GET_ALL_MONS_MONS = gql``