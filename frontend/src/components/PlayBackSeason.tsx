interface PlayBackSeasonProps {
    video_url: string;
}

export default function PlayBackSeason({ video_url }: PlayBackSeasonProps) {
    return (
        <div className="flex justify-center pb-10 overflow-hidden">
            <iframe src={video_url} allowFullScreen className="rounded-md h-[200px] w-[90%] lg:h-[600px]"/>
        </div>
    );
}
