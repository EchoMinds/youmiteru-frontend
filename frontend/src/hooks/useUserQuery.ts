import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "@/constants/api";
import { UserProfile } from "@/types/UserProfile";

export const useUserProfileQuery = (user_id: number) => {
    return useQuery({
        queryKey: ["user-profile"],
        queryFn: async() => {
            const result = await axios.get(`${BASE_API_URL}/user/${user_id}`);
            return result.data as UserProfile;
        }
    });
};
