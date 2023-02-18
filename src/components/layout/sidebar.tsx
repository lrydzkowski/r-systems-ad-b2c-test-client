import { useMsal } from "@azure/msal-react";
import { Divider } from "@mui/material";
import { AccountInfo, InteractionStatus } from "@azure/msal-browser";
import NavigationMobile from "../navigation/navigation-mobile";
import Navigation from "../navigation/navigation";
import "./sidebar.css";
import LogoutButton from "../navigation/logout-button";

export default function Sidebar() {
  const { inProgress, accounts } = useMsal();

  let account: AccountInfo | null = null;
  if (inProgress === InteractionStatus.None && accounts.length > 0) {
    account = accounts[0];
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <h1>Azure AD B2C Test Client</h1>
        </div>
        <div className="navigation-mobile">
          <NavigationMobile />
        </div>
      </div>
      <Divider variant="middle" />
      <div className="navigation">
        <Navigation />
      </div>
      {account !== null && (
        <>
          <Divider variant="middle" className="user-info-divider" />
          <div className="user-info">
            <LogoutButton />
          </div>
        </>
      )}
    </>
  );
}
