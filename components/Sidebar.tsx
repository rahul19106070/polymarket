"use client";

import { Box, Stack, UnstyledButton, Group, Text, useMantineTheme } from "@mantine/core";
import {
  IconTrendingUp,
  IconFlame,
  IconDroplet,
  IconClock,
  IconTrophy,
} from "@tabler/icons-react";

const categories = [
  { icon: IconTrendingUp, label: "Trending", active: true },
  { icon: IconFlame, label: "Hot", active: false },
  { icon: IconDroplet, label: "Liquid", active: false },
  { icon: IconClock, label: "Ending Soon", active: false },
  { icon: IconTrophy, label: "Competitive", active: false },
];

const topics = [
  { label: "Politics", color: "#60a5fa" },
  { label: "Finance", color: "#4ade80" },
  { label: "Sports", color: "#a78bfa" },
  { label: "Entertainment", color: "#f472b6" },
  { label: "Crypto", color: "#facc15" },
  { label: "Tech", color: "#22d3ee" },
];

export default function Sidebar() {
  const theme = useMantineTheme();

  return (
    <Box
      component="aside"
      visibleFrom="lg"
      style={{
        width: 240,
        borderRight: `1px solid ${theme.colors.dark[5]}`,
        height: "calc(100vh - 64px)",
        position: "sticky",
        top: 64,
        overflowY: "auto",
      }}
    >
      <Box style={{ padding: "24px 16px" }}>
        <Stack gap={32}>
          {/* Categories */}
          <Box>
            <Text
              size="xs"
              fw={700}
              c="dark.2"
              tt="uppercase"
              style={{
                letterSpacing: "0.1em",
                marginBottom: 16,
                paddingLeft: 8,
              }}
            >
              Categories
            </Text>
            <Stack gap={2}>
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <UnstyledButton
                    key={category.label}
                    style={{
                      width: "100%",
                      padding: "10px 8px",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      backgroundColor: category.active
                        ? "rgba(0, 255, 0, 0.1)"
                        : "transparent",
                      color: category.active ? theme.colors.green[5] : theme.colors.dark[1],
                      fontSize: 14,
                      fontWeight: 500,
                      transition: "all 0.2s ease",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(0, 255, 0, 0.05)";
                      e.currentTarget.style.color = theme.colors.green[5];
                    }}
                    onMouseLeave={(e) => {
                      if (!category.active) {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = theme.colors.dark[1];
                      } else {
                        e.currentTarget.style.backgroundColor =
                          "rgba(0, 255, 0, 0.1)";
                        e.currentTarget.style.color = theme.colors.green[5];
                      }
                    }}
                  >
                    <Icon size={18} strokeWidth={2} />
                    <span>{category.label}</span>
                  </UnstyledButton>
                );
              })}
            </Stack>
          </Box>

          {/* Topics */}
          <Box>
            <Text
              size="xs"
              fw={700}
              c="dark.2"
              tt="uppercase"
              style={{
                letterSpacing: "0.1em",
                marginBottom: 16,
                paddingLeft: 8,
              }}
            >
              Topics
            </Text>
            <Stack gap={2}>
              {topics.map((topic) => (
                <UnstyledButton
                  key={topic.label}
                  style={{
                    width: "100%",
                    padding: "10px 8px",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    backgroundColor: "transparent",
                    color: theme.colors.dark[1],
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(0, 255, 0, 0.05)";
                    e.currentTarget.style.color = theme.colors.dark[0];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = theme.colors.dark[1];
                  }}
                >
                  <Box
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: topic.color,
                      flexShrink: 0,
                    }}
                  />
                  <span>{topic.label}</span>
                </UnstyledButton>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
