import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const ScrollableText = styled(Typography)(({ theme }) => ({
    maxWidth: 500,
    maxHeight: 180,
    overflow: "auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        maxWidth: 350,
        maxHeight: 150,
    },
}));

interface ScrollableDescriptionProps {
    description: string;
}

export default function ScrollableDescription({description}: ScrollableDescriptionProps) {
    return (
        <ScrollableText>
            {description}
        </ScrollableText>
    );
}
