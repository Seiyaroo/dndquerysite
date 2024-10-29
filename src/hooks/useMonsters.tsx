import { Monster, GetAllMonstersResponse } from '@/interfaces/Monster';
import {useQuery} from "@tanstack/react-query";
import {client} from "@/api/graphQlClient";
import {GET_ALL_MONSTERS} from "@/graphql/queries";


export const useMonsters = () => {
    return useQuery<Monster[], Error>('monsters', async () => {
        const data: GetAllMonstersResponse = await client.request(GET_ALL_MONSTERS);
        return data.monsters;
    });
};