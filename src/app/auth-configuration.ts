import { PublicClientApplication } from "@azure/msal-browser";

export const publicClientApplication = isAdB2C()
  ? new PublicClientApplication({
      auth: {
        clientId: getClientIdAdB2C(),
        authority: getAuthorityAdB2C(),
        knownAuthorities: [getAuthorityDomainAdB2C()],
        redirectUri: "/login",
        postLogoutRedirectUri: "/login",
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
      },
    })
  : new PublicClientApplication({
      auth: {
        clientId: getClientId(),
        authority: getAuthority(),
        redirectUri: "/login",
        postLogoutRedirectUri: "/login",
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
      },
    });

export const loginRequest = isAdB2C()
  ? {
      scopes: getScopesAdB2C(),
    }
  : { scopes: getScopes() };

function getClientIdAdB2C(): string {
  const clientId = process.env.REACT_APP_AZURE_AD_B2C_CLIENT_ID ?? "";
  if (clientId.length === 0) {
    throw new Error("Azure AD B2C client id doesn't exist.");
  }

  return clientId;
}

function getAuthorityAdB2C(): string {
  const authority = process.env.REACT_APP_AZURE_AD_B2C_AUTHORITY ?? "";
  if (authority.length === 0) {
    throw new Error("Azure AD B2C authority doesn't exist.");
  }

  return authority;
}

function getAuthorityDomainAdB2C(): string {
  const authorityDomain = process.env.REACT_APP_AZURE_AD_B2C_AUTHORITY_DOMAIN ?? "";
  if (authorityDomain.length === 0) {
    throw new Error("Azure AD B2C authority domain doesn't exist.");
  }

  return authorityDomain;
}

function getScopesAdB2C(): string[] {
  const scopes = process.env.REACT_APP_AZURE_AD_B2C_SCOPES ?? "";
  if (scopes.length === 0) {
    throw new Error("Azure AD B2C scopes doesn't exist.");
  }

  return scopes.split(" ");
}

function getClientId(): string {
  const clientId = process.env.REACT_APP_AZURE_AD_CLIENT_ID ?? "";
  if (clientId.length === 0) {
    throw new Error("Azure AD client id doesn't exist.");
  }

  return clientId;
}

function getAuthority(): string {
  const authority = process.env.REACT_APP_AZURE_AD_AUTHORITY ?? "";
  if (authority.length === 0) {
    throw new Error("Azure AD authority doesn't exist.");
  }

  return authority;
}

function getScopes(): string[] {
  const scopes = process.env.REACT_APP_AZURE_AD_SCOPES ?? "";
  if (scopes.length === 0) {
    throw new Error("Azure AD scopes doesn't exist.");
  }

  return scopes.split(" ");
}

function isAdB2C(): boolean {
  const isAdB2C = process.env.REACT_APP_IS_AD_B2C ?? "";

  return isAdB2C === "1";
}
