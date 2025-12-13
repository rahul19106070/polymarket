"use client";

import { useState } from "react";
import MarketCard from "./MarketCard";
import {
  Box,
  Title,
  Text,
  Group,
  Button,
  SegmentedControl,
  SimpleGrid,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import {
  IconAdjustments,
  IconLayoutGrid,
  IconLayoutList,
} from "@tabler/icons-react";
import {
  getButtonVariantStyles,
  getSegmentedControlStyles,
} from "@/lib/buttonStyles";

const mockMarkets = [
  {
    id: 1,
    question: "Will Bitcoin hit $100k by end of 2025?",
    category: "Crypto",
    volume: "$47.2M",
    outcomes: [
      { label: "Yes", probability: 64, color: "from-neon-500 to-primary-500" },
      { label: "No", probability: 36, color: "from-red-500 to-rose-600" },
    ],
    endDate: "2025-12-31",
    liquidity: "High",
  },
  {
    id: 2,
    question: "Fed rate decision in December 2025?",
    category: "Finance",
    volume: "$217M",
    outcomes: [
      {
        label: "25 bps decrease",
        probability: 92,
        color: "from-blue-500 to-cyan-600",
      },
      {
        label: "50+ bps decrease",
        probability: 1,
        color: "from-purple-500 to-pink-600",
      },
    ],
    endDate: "2025-12-15",
    liquidity: "Very High",
  },
  {
    id: 3,
    question: "Honduras Presidential Election Winner",
    category: "Politics",
    volume: "$11M",
    outcomes: [
      {
        label: 'Nasry "Tito" Asfura',
        probability: 64,
        color: "from-indigo-500 to-blue-600",
      },
      {
        label: "Salvador Nasralla",
        probability: 36,
        color: "from-orange-500 to-red-600",
      },
    ],
    endDate: "2025-11-30",
    liquidity: "Medium",
  },
  {
    id: 4,
    question: "Russia x Ukraine ceasefire in 2025?",
    category: "Geopolitics",
    volume: "$2M",
    outcomes: [
      { label: "Yes", probability: 13, color: "from-green-500 to-emerald-600" },
      { label: "No", probability: 87, color: "from-red-500 to-rose-600" },
    ],
    endDate: "2025-12-31",
    liquidity: "Low",
  },
  {
    id: 5,
    question: "F1 Drivers Champion 2025",
    category: "Sports",
    volume: "$152M",
    outcomes: [
      {
        label: "Lando Norris",
        probability: 73,
        color: "from-yellow-500 to-orange-600",
      },
      {
        label: "Max Verstappen",
        probability: 22,
        color: "from-blue-500 to-cyan-600",
      },
    ],
    endDate: "2025-11-30",
    liquidity: "Very High",
  },
  {
    id: 6,
    question: "Who will Trump nominate as Fed Chair?",
    category: "Politics",
    volume: "$12M",
    outcomes: [
      {
        label: "Kevin Hassett",
        probability: 64,
        color: "from-indigo-500 to-blue-600",
      },
      {
        label: "Kevin Warsh",
        probability: 14,
        color: "from-purple-500 to-pink-600",
      },
    ],
    endDate: "2025-12-31",
    liquidity: "Medium",
  },
];

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("volume");
  const theme = useMantineTheme();

  return (
    <Stack gap="xl">
      {/* Header */}
      <Group justify="space-between" wrap="wrap">
        <Box>
          <Title order={1} c="dark.0" mb={8}>
            Global Markets
          </Title>
          <Text size="sm" c="dark.1">
            Trade on the world's most important events
          </Text>
        </Box>

        {/* Controls */}
        <Group gap="md">
          <Button
            leftSection={<IconAdjustments size={16} />}
            styles={getButtonVariantStyles("secondary", theme) as any}
          >
            Filters
          </Button>
          <SegmentedControl
            value={viewMode}
            onChange={(value) => setViewMode(value as "grid" | "list")}
            data={[
              {
                value: "grid",
                label: (
                  <Box
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <IconLayoutGrid size={16} />
                  </Box>
                ),
              },
              {
                value: "list",
                label: (
                  <Box
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <IconLayoutList size={16} />
                  </Box>
                ),
              },
            ]}
            styles={getSegmentedControlStyles(theme) as any}
          />
        </Group>
      </Group>

      {/* Markets Grid/List */}
      {viewMode === "grid" ? (
        <SimpleGrid cols={{ base: 1, md: 2, xl: 3 }} spacing="xl">
          {mockMarkets.map((market) => (
            <MarketCard key={market.id} market={market} viewMode={viewMode} />
          ))}
        </SimpleGrid>
      ) : (
        <Stack gap="md">
          {mockMarkets.map((market) => (
            <MarketCard key={market.id} market={market} viewMode={viewMode} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
