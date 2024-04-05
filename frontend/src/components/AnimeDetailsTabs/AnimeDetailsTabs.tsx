import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollableDescription from "./ScrollableDescription";
import ChronologySeason from "./ChronologySeason";
import { styled } from "@mui/material/styles";

interface ChronologySeason {
    seasonId: number;
    imageUrl: string;
}

interface AnimeDetailsTabsProps {
    description: string;
    relatedSeasons: ChronologySeason[];
}

const ContentTabs = styled(Box)(({ theme }) => ({
    maxHeight: 300,
    paddingLeft: 16,
    display: "flex",
    gap: 30,
    maxWidth: 1200,
    paddingBottom: 16,
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
        justifyContent: "space-around",
        maxWidth: 380,
        maxHeight: 1000,
        "& > a": { // Targeting child links, assuming they directly contain the images
            width: "calc(50% - 8px)", // Subtract the gap from 50% to align two items per row
            margin: "4px", // Adjust margin to match the gap
        },
    },
}));

export default function AnimeDetailsTabs({
    description,
    relatedSeasons, 
}: AnimeDetailsTabsProps) {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", borderRadius: 1, overflow: "hidden" }}>
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="anime details tabs"
                sx={{ padding: 2, borderColor: "#0bffd5" }}>
                <Tab sx={{ color: "#fff", fontWeight: 700 }} label="Описание" />

                <Tab
                    sx={{ color: "#fff", fontWeight: 700 }}
                    label="Хронология"
                />
            </Tabs>

            <ContentTabs >
                {tabValue === 0 ? (
                    <ScrollableDescription description={description} />
                ) : (
                    relatedSeasons.map((season) => (
                        <ChronologySeason
                            key={season.seasonId}
                            seasonId={season.seasonId}
                            imageUrl={season.imageUrl}
                        />
                    ))
                )}
            </ContentTabs>
        </Box>
    );
}
