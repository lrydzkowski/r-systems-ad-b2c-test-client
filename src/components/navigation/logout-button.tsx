import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useMsal } from "@azure/msal-react";

export default function LogoutButton() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect({
      postLogoutRedirectUri: "/login",
    });
  };

  return (
    <IconButton sx={{ color: "red" }} onClick={handleLogout} className="logout-button">
      <LogoutIcon fontSize="large" />
    </IconButton>
  );
}
