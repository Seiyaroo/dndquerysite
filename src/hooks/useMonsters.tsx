import { Monster, GetAllMonstersResponse } from '@/interfaces/Monster';
import {useQuery} from "@tanstack/react-query";
import {client} from "@/api/graphQlClient";
import {GET_ALL_MONSTERS} from "@/graphql/queries";

export const useMonsters = () => {
    return useQuery<Monster[], Error>('monsters', async () => {
        const data: GetAllMonstersResponse = await client.request(GET_ALL_MONSTERS);
        return data.monsters;
    }, {
        staleTime: 1000 * 60 * 5, // 5 mins
        cacheTime: 1000 * 60 * 10, // 10 mins
        refetchOnWindowFocus: false, // disable the re-fetch on window focusing
    });
};