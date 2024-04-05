import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function CustomizedRating() {
    return (
        <Box
            sx={{
                bgcolor: "#6a4e57",
                width: 370,
                height: 120,
                padding: 3,
                borderRadius: 3,
            }}>
            <Typography component="legend">Поставьте оценку</Typography>

            <Typography
                sx={{
                    color: "#09bf78",
                }}>
                Оценки поднимают рейтинг и просмотры
            </Typography>

            <Rating
                name="customized-10"
                defaultValue={5}
                max={10}
                icon={<StarRoundedIcon fontSize="inherit" />}
                emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
                sx={{
                    pt: "3px",
                }}
                size="large"
            />
        </Box>
    );
}
