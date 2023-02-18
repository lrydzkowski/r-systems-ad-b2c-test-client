import { Fade, IconButton, Menu } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AppMenu from "./app-menu";
import LogoutButton from "./logout-button";

export default function NavigationMobile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="primary" onClick={handleClick}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        PaperProps={{ sx: { width: "200px" } }}
      >
        <AppMenu handleMenuLinkClick={handleClose} />
      </Menu>
      <LogoutButton />
    </>
  );
}
