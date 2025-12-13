import Dashboard from "@/components/Dashboard";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import { Box, Container } from "@mantine/core";

export default function Home() {
  return (
    <Box bg="black" style={{ minHeight: "100vh" }}>
      <Navigation />
      <Box style={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" style={{ flex: 1, padding: "24px 32px" }}>
          <Container size="xl" px={0}>
            <Dashboard />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
