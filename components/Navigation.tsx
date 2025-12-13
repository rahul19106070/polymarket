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
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch, IconTrendingUp } from "@tabler/icons-react";
import WalletConnect from "./WalletConnect";
import { getTextInputStyles } from "@/lib/buttonStyles";

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [opened, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box
      component="nav"
      bg="black"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: `1px solid ${theme.colors.dark[5]}`,
      }}
    >
      <Container size="xl" px="md">
        <Group justify="space-between" h={64}>
          {/* Logo & Brand */}
          <Group gap="xl">
            <Group gap="xs">
              <Center
                bg="green.5"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                }}
              >
                <IconTrendingUp size={20} color={theme.black} />
              </Center>
              <Box
                component="span"
                c="green.5"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
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
                <IconSearch size={18} color={theme.colors.dark[1]} />
              }
              styles={getTextInputStyles(theme) as any}
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
              color={theme.colors.dark[0]}
            />
          </Group>
        </Group>

        {/* Mobile Menu */}
        <Collapse in={opened}>
          <Box
            hiddenFrom="md"
            pb="md"
            style={{ borderTop: `1px solid ${theme.colors.dark[5]}` }}
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
                  styles={getTextInputStyles(theme) as any}
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
  const theme = useMantineTheme();

  return (
    <UnstyledButton
      style={{
        display: mobile ? "block" : "inline-block",
        padding: "8px 16px",
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 8,
        transition: "all 0.2s ease",
        backgroundColor: active ? theme.colors.dark[5] : "transparent",
        color: active ? theme.colors.green[5] : theme.colors.dark[0],
        borderLeft: active ? `2px solid ${theme.colors.green[5]}` : "none",
        width: mobile ? "100%" : "auto",
        textAlign: "left" as const,
        ...(mobile && { paddingLeft: 16 }),
      }}
      styles={
        {
          root: {
            "&:hover": {
              color: `${theme.colors.green[5]} !important`,
              backgroundColor: `${theme.colors.dark[5]} !important`,
            },
          },
        } as any
      }
    >
      {children}
    </UnstyledButton>
  );
}
