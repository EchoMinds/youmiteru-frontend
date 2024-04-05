import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ROUTES } from "@/constants/routes";

interface ChronologySeasonProps {
    seasonId: number;
    imageUrl: string;
}

export default function ChronologySeason({ seasonId, imageUrl }: ChronologySeasonProps) {
    return (
        <Box sx={{}}>
            <Link href={`${ROUTES.SEASON}?id=${seasonId}`}>
                <img src={imageUrl} alt="season-image" className="w-[150px] object-cover h-[180px] lg:w-[180px] lg:h-[180px] rounded-md lg:hover:opacity-70 ease-in-out duration-300 "/>
            </Link>
        </Box>
    );
}
