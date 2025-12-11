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
} from "@mantine/core";
import {
  IconTrendingUp,
  IconClock,
  IconDroplet,
  IconArrowRight,
} from "@tabler/icons-react";
import { format } from "date-fns";

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

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Paper
          p="lg"
          style={{
            backgroundColor: "#000000",
            border: "1px solid #1A1A1A",
            borderRadius: 12,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          styles={
            {
              root: {
                "&:hover": {
                  borderColor: "#00FF00 !important",
                  backgroundColor: "rgba(0, 255, 0, 0.03) !important",
                },
              },
            } as any
          }
        >
          <Group align="flex-start" justify="space-between" wrap="nowrap">
            <Stack style={{ flex: 1 }} gap="md">
              <Group gap="md">
                <Badge
                  variant="filled"
                  style={{
                    backgroundColor: "#1A1A1A",
                    color: "#00FF00",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {market.category}
                </Badge>
                <Group gap={4}>
                  <IconDroplet size={12} style={{ color: "#999999" }} />
                  <Text size="xs" c="#999999">
                    {market.liquidity}
                  </Text>
                </Group>
              </Group>
              <Text
                size="lg"
                fw={600}
                c="#CCCCCC"
                style={{ transition: "color 0.2s ease" }}
                styles={
                  {
                    root: {
                      "&:hover": {
                        color: "#00FF00 !important",
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
                      variant="filled"
                      style={{
                        backgroundColor: "rgba(0, 255, 0, 0.15)",
                        color: "#00FF00",
                        border: "1px solid rgba(0, 255, 0, 0.3)",
                      }}
                    >
                      {primaryOutcome.label}
                    </Badge>
                    <Badge
                      variant="filled"
                      size="sm"
                      style={{
                        backgroundColor: "rgba(0, 255, 0, 0.1)",
                        color: "#00FF00",
                        border: "1px solid rgba(0, 255, 0, 0.2)",
                      }}
                    >
                      {primaryOutcome.probability}%
                    </Badge>
                  </Group>
                  <Box
                    style={{
                      height: 10,
                      backgroundColor: "#262626",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      style={{
                        height: "100%",
                        width: `${primaryOutcome.probability}%`,
                        backgroundColor: "#00FF00",
                        borderRadius: 999,
                      }}
                    />
                  </Box>
                </Stack>
                <Stack gap="xs">
                  <Group justify="space-between" mb={4}>
                    <Badge
                      variant="filled"
                      style={{
                        backgroundColor: "rgba(204, 204, 204, 0.1)",
                        color: "#CCCCCC",
                        border: "1px solid rgba(204, 204, 204, 0.2)",
                      }}
                    >
                      {secondaryOutcome.label}
                    </Badge>
                    <Badge
                      variant="filled"
                      size="sm"
                      style={{
                        backgroundColor: "rgba(0, 255, 0, 0.1)",
                        color: "#00FF00",
                        border: "1px solid rgba(0, 255, 0, 0.2)",
                      }}
                    >
                      {secondaryOutcome.probability}%
                    </Badge>
                  </Group>
                  <Box
                    style={{
                      height: 10,
                      backgroundColor: "#262626",
                      borderRadius: 999,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      style={{
                        height: "100%",
                        width: `${secondaryOutcome.probability}%`,
                        backgroundColor: "#666666",
                        borderRadius: 999,
                      }}
                    />
                  </Box>
                </Stack>
              </Group>
            </Stack>
            <Stack gap="md" align="flex-end" style={{ minWidth: 150 }}>
              <Box>
                <Text size="xs" c="#999999" mb={4}>
                  Volume
                </Text>
                <Text size="lg" fw={700} c="#CCCCCC">
                  {market.volume}
                </Text>
              </Box>
              <Group gap={4}>
                <IconClock size={12} style={{ color: "#999999" }} />
                <Text size="xs" c="#999999">
                  {format(new Date(market.endDate), "MMM d, yyyy")}
                </Text>
              </Group>
              <Button
                rightSection={<IconArrowRight size={16} />}
                style={{
                  backgroundColor: "#00FF00",
                  color: "#000000",
                  fontWeight: 600,
                }}
                styles={
                  {
                    root: {
                      "&:hover": {
                        backgroundColor: "#00E600 !important",
                        boxShadow: "0 0 20px rgba(0, 255, 0, 0.3) !important",
                      },
                    },
                  } as any
                }
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
        style={{
          backgroundColor: "#000000",
          border: "1px solid #1A1A1A",
          borderRadius: 12,
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
        styles={
          {
            root: {
              "&:hover": {
                borderColor: "#00FF00 !important",
                backgroundColor: "rgba(0, 255, 0, 0.03) !important",
              },
            },
          } as any
        }
      >
        {/* Header */}
        <Group justify="space-between" mb="md">
          <Group gap="xs">
            <Badge
              variant="filled"
              style={{
                backgroundColor: "#1A1A1A",
                color: "#00FF00",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {market.category}
            </Badge>
            <Group gap={4}>
              <IconDroplet size={12} style={{ color: "#999999" }} />
              <Text size="xs" c="#999999">
                {market.liquidity}
              </Text>
            </Group>
          </Group>
          <IconTrendingUp size={16} style={{ color: "#00FF00" }} />
        </Group>

        {/* Question */}
        <Text
          size="lg"
          fw={600}
          c="#CCCCCC"
          mb="md"
          lineClamp={2}
          style={{ transition: "color 0.2s ease", minHeight: 56 }}
          styles={
            {
              root: {
                "&:hover": {
                  color: "#00FF00 !important",
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
                  variant="filled"
                  style={{
                    backgroundColor:
                      idx === 0
                        ? "rgba(0, 255, 0, 0.15)"
                        : "rgba(204, 204, 204, 0.1)",
                    color: idx === 0 ? "#00FF00" : "#CCCCCC",
                    border:
                      idx === 0
                        ? "1px solid rgba(0, 255, 0, 0.3)"
                        : "1px solid rgba(204, 204, 204, 0.2)",
                  }}
                >
                  {outcome.label}
                </Badge>
                <Badge
                  variant="filled"
                  size="sm"
                  style={{
                    backgroundColor: "rgba(0, 255, 0, 0.1)",
                    color: "#00FF00",
                    border: "1px solid rgba(0, 255, 0, 0.2)",
                  }}
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
                    backgroundColor: "#262626",
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
                      backgroundColor: idx === 0 ? "#00FF00" : "#666666",
                      borderRadius: 999,
                    }}
                  />
                </Box>
              </motion.div>
            </Stack>
          ))}
        </Stack>

        {/* Footer */}
        <Box pt="md" style={{ borderTop: "1px solid #1A1A1A" }}>
          <Group justify="space-between">
            <Box>
              <Text size="xs" c="#999999" mb={4}>
                Volume
              </Text>
              <Text size="sm" fw={700} c="#CCCCCC">
                {market.volume}
              </Text>
            </Box>
            <Stack gap="xs" align="flex-end">
              <Group gap={4}>
                <IconClock size={12} style={{ color: "#999999" }} />
                <Text size="xs" c="#999999">
                  {format(new Date(market.endDate), "MMM d")}
                </Text>
              </Group>
              <Button
                size="sm"
                style={{
                  backgroundColor: "#00FF00",
                  color: "#000000",
                  fontWeight: 600,
                }}
                styles={
                  {
                    root: {
                      "&:hover": {
                        backgroundColor: "#00E600 !important",
                        boxShadow: "0 0 20px rgba(0, 255, 0, 0.3) !important",
                      },
                    },
                  } as any
                }
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
