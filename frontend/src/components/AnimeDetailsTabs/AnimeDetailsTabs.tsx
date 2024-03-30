import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ScrollableDescription from "./ScrorrableText";
import ChronologySeason from "./Chronology";
import { styled } from "@mui/material/styles";

interface ChronologySeason {
    seasonId: number;
    imageUrl: string;
}

interface AnimeDetailsTabsProps {
    fullDescription: string;
    relatedSeasons: ChronologySeason[];
}

const ContentTabs = styled(Box)(({ theme }) => ({
    maxHeight: 500,
    paddingLeft: 16,
    display: "flex",
    gap: 30,
    maxWidth: 1200,
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
    },
}));

export default function AnimeDetailsTabs({
    fullDescription,
    relatedSeasons, 
}: AnimeDetailsTabsProps) {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const tabContent = (index: number) => {
        switch (index) {
        case 0:
            return fullDescription;
        case 1:
            return relatedSeasons;
        default:
            return null;
        }
    };

    return (
        <Box sx={{ width: "100%", borderRadius: 1 }}>
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
                    <ScrollableDescription description={tabContent(tabValue)} />
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
