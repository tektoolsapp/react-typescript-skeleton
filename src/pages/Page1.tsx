import { Container, Typography } from "@mui/material";
import { AppContent } from "../styles/ContentPage";

export default function Page1() {
  return (
    <>
      <AppContent>
        <Container maxWidth={false}>
          <Typography
            variant="h6"
            component="h6"
            marginBottom={3}
            marginTop={5}
          >
            Page 1
          </Typography>
        </Container>
      </AppContent>
    </>
  );
}
