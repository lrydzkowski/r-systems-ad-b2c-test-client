import { AccountInfo, InteractionStatus } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";

export default function HomePage() {
  const { inProgress, accounts } = useMsal();

  let account: AccountInfo | null = null;
  if (inProgress === InteractionStatus.None && accounts.length > 0) {
    account = accounts[0];
  }

  return <>{account !== null && <pre>{JSON.stringify(account, null, 2)}</pre>}</>;
}
