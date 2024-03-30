import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ScrollableDescription from "./ScrorrableText";

interface AnimeDetailsTabsProps {
    fullDescription: string;
}

export default function AnimeDetailsTabs({
    fullDescription,
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
            return "Хронология аниме";
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

            <Box sx={{ maxHeight: 500, paddingLeft: 3 }}>
                {tabValue === 0 ? (
                    <ScrollableDescription description={tabContent(tabValue)} />
                ) : (
                    <Typography>
                        {tabContent(tabValue)}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
