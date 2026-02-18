import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../constant";

export const useGetTicketData = () => {
    return useQuery({
        queryKey: ['get-ticket'],
        queryFn: async () => {
            const res = await axios.get(`${API_URL}/tickets/`)
            return res
        }
    })
}

export const useCreateTicketData = () => {
    return useMutation({
        mutationKey: ['get-ticket'],
        mutationFn: async (data) => {
            const res = await axios.post('', data)
        }
    })
}