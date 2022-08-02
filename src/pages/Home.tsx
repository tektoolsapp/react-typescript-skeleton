import { Container, Typography } from "@mui/material";
import { AppContent } from "../styles/ContentPage";

export default function Home() {
  return (
    <>
      <Container maxWidth={false}>
        <AppContent>
          <Typography
            variant="h6"
            component="h6"
            marginBottom={3}
            marginTop={5}
          >
            Home
          </Typography>
        </AppContent>
      </Container>
    </>
  );
}
