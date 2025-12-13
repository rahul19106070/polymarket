"use client";

import { motion } from "framer-motion";
import {
  Paper,
  Group,
  Badge,
  Text,
  Stack,
  Progress,
  Button,
  Box,
  useMantineTheme,
} from "@mantine/core";
import {
  IconTrendingUp,
  IconClock,
  IconDroplet,
  IconArrowRight,
} from "@tabler/icons-react";
import { format } from "date-fns";
import {
  getButtonVariantStyles,
  getBadgeVariantStyles,
  getPaperStyles,
} from "@/lib/buttonStyles";

interface Outcome {
  label: string;
  probability: number;
  color: string;
}

interface Market {
  id: number;
  question: string;
  category: string;
  volume: string;
  outcomes: Outcome[];
  endDate: string;
  liquidity: string;
}

interface MarketCardProps {
  market: Market;
  viewMode: "grid" | "list";
}

export default function MarketCard({ market, viewMode }: MarketCardProps) {
  const primaryOutcome = market.outcomes[0];
  const secondaryOutcome = market.outcomes[1];
  const theme = useMantineTheme();

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Paper
          p="lg"
          style={{ cursor: "pointer" }}
          styles={getPaperStyles(theme) as any}
        >
          <Group align="flex-start" justify="space-between" wrap="nowrap">
            <Stack style={{ flex: 1 }} gap="md">
              <Group gap="md">
                <Badge styles={getBadgeVariantStyles("category", theme) as any}>
                  {market.category}
                </Badge>
                <Group gap={4}>
                  <IconDroplet size={12} color={theme.colors.dark[1]} />
                  <Text size="xs" c="dark.1">
                    {market.liquidity}
                  </Text>
                </Group>
              </Group>
              <Text
                size="lg"
                fw={600}
                c="dark.0"
                style={{ transition: "color 0.2s ease" }}
                styles={
                  {
                    root: {
                      "&:hover": {
                        color: `${theme.colors.green[5]} !important`,
                      },
                    },
                  } as any
                }
              >
                {market.question}
              </Text>
              <Group grow align="flex-start">
                <Stack gap="xs">
                  <Group justify="space-between" mb={4}>
                    <Badge
                      styles={getBadgeVariantStyles("primary", theme) as any}
                    >
                      {primaryOutcome.label}
                    </Badge>
                    <Badge
                      size="sm"
                      styles={
                        getBadgeVariantStyles("probability", theme) as any
                      }
                    >
                      {primaryOutcome.probability}%
                    </Badge>
                  </Group>
                  <Box
                    style={{
                      height: 10,
                      backgroundColor: theme.colors.dark[4],
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      style={{
                        height: "100%",
                        width: `${primaryOutcome.probability}%`,
                        backgroundColor: theme.colors.green[5],
                        borderRadius: 999,
                      }}
                    />
                  </Box>
                </Stack>
                <Stack gap="xs">
                  <Group justify="space-between" mb={4}>
                    <Badge
                      styles={getBadgeVariantStyles("secondary", theme) as any}
                    >
                      {secondaryOutcome.label}
                    </Badge>
                    <Badge
                      size="sm"
                      styles={
                        getBadgeVariantStyles("probability", theme) as any
                      }
                    >
                      {secondaryOutcome.probability}%
                    </Badge>
                  </Group>
                  <Box
                    style={{
                      height: 10,
                      backgroundColor: theme.colors.dark[4],
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      style={{
                        height: "100%",
                        width: `${secondaryOutcome.probability}%`,
                        backgroundColor: theme.colors.dark[2],
                        borderRadius: 999,
                      }}
                    />
                  </Box>
                </Stack>
              </Group>
            </Stack>
            <Stack gap="md" align="flex-end" style={{ minWidth: 150 }}>
              <Box>
                <Text size="xs" c="dark.1" mb={4}>
                  Volume
                </Text>
                <Text size="lg" fw={700} c="dark.0">
                  {market.volume}
                </Text>
              </Box>
              <Group gap={4}>
                <IconClock size={12} color={theme.colors.dark[1]} />
                <Text size="xs" c="dark.1">
                  {format(new Date(market.endDate), "MMM d, yyyy")}
                </Text>
              </Group>
              <Button
                rightSection={<IconArrowRight size={16} />}
                styles={getButtonVariantStyles("primary", theme) as any}
              >
                Trade
              </Button>
            </Stack>
          </Group>
        </Paper>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <Paper
        p="lg"
        style={{ cursor: "pointer" }}
        styles={getPaperStyles(theme) as any}
      >
        {/* Header */}
        <Group justify="space-between" mb="md">
          <Group gap="xs">
            <Badge styles={getBadgeVariantStyles("category", theme) as any}>
              {market.category}
            </Badge>
            <Group gap={4}>
              <IconDroplet size={12} color={theme.colors.dark[1]} />
              <Text size="xs" c="dark.1">
                {market.liquidity}
              </Text>
            </Group>
          </Group>
          <IconTrendingUp size={16} color={theme.colors.green[5]} />
        </Group>

        {/* Question */}
        <Text
          size="lg"
          fw={600}
          c="dark.0"
          mb="md"
          lineClamp={2}
          style={{ transition: "color 0.2s ease", minHeight: 56 }}
          styles={
            {
              root: {
                "&:hover": {
                  color: `${theme.colors.green[5]} !important`,
                },
              },
            } as any
          }
        >
          {market.question}
        </Text>

        {/* Outcomes */}
        <Stack gap="md" mb="md">
          {market.outcomes.map((outcome, idx) => (
            <Stack key={idx} gap="xs">
              <Group justify="space-between">
                <Badge
                  styles={
                    getBadgeVariantStyles(
                      idx === 0 ? "primary" : "secondary",
                      theme
                    ) as any
                  }
                >
                  {outcome.label}
                </Badge>
                <Badge
                  size="sm"
                  styles={getBadgeVariantStyles("probability", theme) as any}
                >
                  {outcome.probability}%
                </Badge>
              </Group>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Box
                  style={{
                    height: 10,
                    backgroundColor: theme.colors.dark[4],
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${outcome.probability}%` }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    style={{
                      height: "100%",
                      backgroundColor:
                        idx === 0
                          ? theme.colors.green[5]
                          : theme.colors.dark[2],
                      borderRadius: 999,
                    }}
                  />
                </Box>
              </motion.div>
            </Stack>
          ))}
        </Stack>

        {/* Footer */}
        <Box pt="md" style={{ borderTop: `1px solid ${theme.colors.dark[5]}` }}>
          <Group justify="space-between">
            <Box>
              <Text size="xs" c="dark.1" mb={4}>
                Volume
              </Text>
              <Text size="sm" fw={700} c="dark.0">
                {market.volume}
              </Text>
            </Box>
            <Stack gap="xs" align="flex-end">
              <Group gap={4}>
                <IconClock size={12} color={theme.colors.dark[1]} />
                <Text size="xs" c="dark.1">
                  {format(new Date(market.endDate), "MMM d")}
                </Text>
              </Group>
              <Button
                size="sm"
                styles={getButtonVariantStyles("primary", theme) as any}
              >
                Trade
              </Button>
            </Stack>
          </Group>
        </Box>
      </Paper>
    </motion.div>
  );
}
