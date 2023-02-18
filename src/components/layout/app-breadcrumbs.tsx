import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function AppBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          to="/"
          component={RouterLink}
        >
          <HomeIcon fontSize="inherit" />
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const name = decodeURIComponent(pathnames[index]);

          return (
            <Link underline="hover" color="inherit" component={RouterLink} to={to} key={to}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </>
  );
}
