import { Avatar, InputAdornment, IconButton, TextField } from "@mui/material";
import { LeaveCommentProps } from "@/types/CommentsSeason";
import SendIcon from "@mui/icons-material/Send";

const textFieldStyles = {
    width: 450,
    "& .MuiOutlinedInput-root": {
        color: "white",
        "& fieldset": {
            // borderColor: "green",
            borderRadius: 5,
            borderWidth: 2.5,
            transition: "border-color 0.4s ease-in-out",
        },
        "&:hover fieldset": {
            borderColor: "#1976d2",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#1976d2",
        },
    },
};

export function LeaveComment({ profile_avatar_url }: LeaveCommentProps) {
    return (
        <main className="flex gap-7 justify-start items-start">
            <Avatar
                alt="user-avatar"
                src={profile_avatar_url}
                sx={{ width: 90, height: 90, objectFit: "cover" }}
                variant="rounded"
            />

            <TextField
                placeholder="Оставьте комментарий"
                sx={textFieldStyles}
                maxRows={4}
                variant="outlined"
                label="Комментарий"
                multiline
                required
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton color="primary">
                                <SendIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                inputProps={{ maxLength: 800 }}
            />
        </main>
    );
}
