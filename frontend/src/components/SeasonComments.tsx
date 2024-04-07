import { Avatar } from "@mui/material";
import { SeasonCommentsProps } from "@/types/CommentsSeason";

export function SeasonComments({ seasonComments, profile_avatar_url }: SeasonCommentsProps) {
    return (
        <main>
            <Avatar alt="user-avatar" src={profile_avatar_url} />

            <ul>
                
            </ul>
        </main>
    );
}
