import { LeaveComment } from "./LeaveComment";
import { SeasonComments } from "./SeasonComments";
import { CommentsSectionProps } from "@/types/CommentsSeason";

export default function CommentsSection({ comments, profile_avatar_url }: CommentsSectionProps) {
    return (
        <main className="pl-[40px]">
            <h1 className="font-bold text-[22px]">Комментарии</h1>

            <div className="flex flex-col gap-10 pt-5">
                <LeaveComment profile_avatar_url={profile_avatar_url} />
                <SeasonComments comments={comments} profile_avatar_url={profile_avatar_url} />
            </div>
        </main>
    );
}
