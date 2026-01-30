import { useGetProfile } from "../model/hooks";
import { Avatar, Box, Typography, CircularProgress } from "@mui/material";

export const ProfileLineInfo = () => {
  const { data: user, isLoading, isError } = useGetProfile();

  if (isLoading) {
    return <CircularProgress size={24} sx={{ color: "white" }} />;
  }

  if (isError || !user) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box sx={{ textAlign: "right", display: { xs: "none", md: "block" } }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, color: "white", lineHeight: 1.2 }}
        >
          {user.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "rgba(255, 255, 255, 0.7)", display: "block" }}
        >
          {user.email}
        </Typography>
      </Box>

      <Avatar
        src={user.picture}
        alt={user.name}
        sx={{
          width: 40,
          height: 40,
          border: "1.5px solid rgba(255, 255, 255, 0.5)",
          cursor: "pointer",
        }}
      >
        {user.name?.charAt(0)}
      </Avatar>
    </Box>
  );
};
