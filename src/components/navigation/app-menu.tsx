import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./app-menu.css";

export interface AppMenuProps {
  handleMenuLinkClick?: () => void;
}

export default function AppMenu({ handleMenuLinkClick = () => null }: AppMenuProps) {
  return (
    <List component="nav">
      <UnauthenticatedTemplate>
        <ListItemButton component={NavLink} to="/login" onClick={handleMenuLinkClick}>
          <ListItemText primary="Sign in" />
        </ListItemButton>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <ListItemButton component={NavLink} to="/home" onClick={handleMenuLinkClick}>
          <ListItemText primary="Home" />
        </ListItemButton>
      </AuthenticatedTemplate>
    </List>
  );
}
