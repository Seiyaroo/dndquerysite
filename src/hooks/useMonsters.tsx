import {useQuery} from "@tanstack/react-query";
import {client} from "@/api/graphQlClient";
import {GET_ALL_MONSTERS} from "@/graphql/queries";
import {GetAllMonstersResponse, Monster} from "@/interfaces/Monster";


export const useMonsters = () => {
    return useQuery({
        queryKey: ['monsters'],
        queryFn: async () => {
            const data: GetAllMonstersResponse = await client.request(GET_ALL_MONSTERS);
            return data.monsters;
        },
    });
};
