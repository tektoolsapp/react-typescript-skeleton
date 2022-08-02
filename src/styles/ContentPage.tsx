import { styled } from "@mui/material/styles";

const AppContent = styled("div")(({ theme }) => ({
  flex: "1 1 100%", // https://github.com/philipwalton/flexbugs#flexbug-17
  width: "100%", // https://github.com/philipwalton/flexbugs#flexbug-17
  paddingLeft: 12,
  backgroundColor: "lightcoral",
  margin: "0 auto",
  [theme.breakpoints.up("xl")]: {
    maxWidth: theme.breakpoints.values.xl,
  },
}));

export { AppContent };
