"use client";

import { useState } from "react";
import {
  TextInput,
  Group,
  Box,
  Burger,
  Collapse,
  Stack,
  Container,
  Center,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconTrendingUp } from "@tabler/icons-react";
import WalletConnect from "./WalletConnect";

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Box
      component="nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#000000",
        borderBottom: "1px solid #1A1A1A",
      }}
    >
      <Container size="xl" px="md">
        <Group justify="space-between" h={64}>
          {/* Logo & Brand */}
          <Group gap="xl">
            <Group gap="xs">
              <Center
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#00FF00",
                  borderRadius: 8,
                }}
              >
                <IconTrendingUp size={20} style={{ color: "#000000" }} />
              </Center>
              <Box
                component="span"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#00FF00",
                }}
              >
                PredictX
              </Box>
            </Group>

            {/* Desktop Navigation */}
            <Group gap={4} visibleFrom="md">
              <NavLink active>Markets</NavLink>
              <NavLink>Dashboard</NavLink>
              <NavLink>Portfolio</NavLink>
              <NavLink>Leaderboard</NavLink>
            </Group>
          </Group>

          {/* Search Bar */}
          <Box
            visibleFrom="lg"
            style={{ flex: 1, maxWidth: 400, marginLeft: 32, marginRight: 32 }}
          >
            <TextInput
              placeholder="Search markets, topics, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              leftSection={
                <IconSearch size={18} style={{ color: "#999999" }} />
              }
              style={{
                backgroundColor: "#000000",
              }}
              styles={
                {
                  input: {
                    backgroundColor: "#000000",
                    border: "1px solid #1A1A1A",
                    color: "#CCCCCC",
                    "&:focus": {
                      borderColor: "#00FF00 !important",
                      boxShadow: "0 0 0 2px rgba(0, 255, 0, 0.1) !important",
                    },
                    "&::placeholder": {
                      color: "#666666",
                    },
                  },
                } as any
              }
            />
          </Box>

          {/* Right Side Actions */}
          <Group gap="md">
            <WalletConnect />
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
              color="#CCCCCC"
            />
          </Group>
        </Group>

        {/* Mobile Menu */}
        <Collapse in={opened}>
          <Box
            hiddenFrom="md"
            pb="md"
            style={{ borderTop: "1px solid #1A1A1A" }}
          >
            <Stack gap="xs" pt="md">
              <NavLink mobile active>
                Markets
              </NavLink>
              <NavLink mobile>Dashboard</NavLink>
              <NavLink mobile>Portfolio</NavLink>
              <NavLink mobile>Leaderboard</NavLink>
              <Box pt="sm">
                <TextInput
                  placeholder="Search markets..."
                  leftSection={<IconSearch size={18} />}
                  styles={{
                    input: {
                      backgroundColor: "#000000",
                      border: "1px solid #1A1A1A",
                      color: "#CCCCCC",
                    },
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

function NavLink({
  children,
  active = false,
  mobile = false,
}: {
  children: React.ReactNode;
  active?: boolean;
  mobile?: boolean;
}) {
  return (
    <UnstyledButton
      style={{
        display: mobile ? "block" : "inline-block",
        padding: "8px 16px",
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 8,
        transition: "all 0.2s ease",
        backgroundColor: active ? "#1A1A1A" : "transparent",
        color: active ? "#00FF00" : "#CCCCCC",
        borderLeft: active ? "2px solid #00FF00" : "none",
        width: mobile ? "100%" : "auto",
        textAlign: "left" as const,
        ...(mobile && { paddingLeft: 16 }),
      }}
      styles={
        {
          root: {
            "&:hover": {
              color: "#00FF00 !important",
              backgroundColor: "#1A1A1A !important",
            },
          },
        } as any
      }
    >
      {children}
    </UnstyledButton>
  );
}
