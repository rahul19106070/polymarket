/**
 * Search Page Component
 * Search and filter markets
 */

'use client';

import { useState } from 'react';
import {
  Container,
  Stack,
  TextInput,
  Box,
  Text,
  Grid,
  Card,
  Group,
  Badge,
} from '@mantine/core';
import { IconSearch, IconChartBar } from '@tabler/icons-react';
import Link from 'next/link';
import { PolymarketNavbar } from '@/components/polymarket/PolymarketNavbar';
import { dummyMarkets } from '@/lib/dummyMarkets';

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMarkets = dummyMarkets.filter((market) =>
    market.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    market.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box style={{ backgroundColor: '#0F1419', minHeight: '100vh' }}>
      <PolymarketNavbar />

      <Container size="xl" py="xl">
        <Stack gap="xl">
          {/* Search Bar */}
          <TextInput
            placeholder="Search markets..."
            leftSection={<IconSearch size={20} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="lg"
            styles={{
              input: {
                backgroundColor: '#1C2432',
                border: '1px solid #2D3748',
                color: '#E2E8F0',
                fontSize: 16,
                '&::placeholder': { color: '#64748B' },
                '&:focus': { borderColor: '#3B82F6' },
              },
            }}
          />

          {/* Results */}
          {searchQuery && (
            <Text size="sm" c="#94A3B8">
              {filteredMarkets.length} result{filteredMarkets.length !== 1 ? 's' : ''} for "{searchQuery}"
            </Text>
          )}

          {/* Markets Grid */}
          <Grid gutter="md">
            {filteredMarkets.map((market) => {
              const primaryOutcome = market.outcomes[0];
              const isPositive = primaryOutcome.percentage >= 50;

              return (
                <Grid.Col key={market.id} span={{ base: 12, sm: 6, md: 4 }}>
                  <Link
                    href={`/market/${market.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Card
                      style={{
                        backgroundColor: '#1C2432',
                        border: '1px solid #2D3748',
                        borderRadius: 12,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        height: '100%',
                      }}
                      p="lg"
                      className="market-card-hover"
                    >
                      <Stack gap="md">
                        {/* Icon and Category */}
                        <Group justify="space-between" align="flex-start">
                          <Box
                            style={{
                              width: 40,
                              height: 40,
                              borderRadius: 8,
                              backgroundColor: '#2D3748',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 20,
                            }}
                          >
                            {market.icon}
                          </Box>
                          {market.category && (
                            <Badge
                              size="sm"
                              variant="light"
                              styles={{
                                root: {
                                  backgroundColor: '#2D374820',
                                  color: '#94A3B8',
                                  textTransform: 'none',
                                },
                              }}
                            >
                              {market.category}
                            </Badge>
                          )}
                        </Group>

                        {/* Title */}
                        <Text
                          size="sm"
                          fw={600}
                          c="white"
                          lineClamp={3}
                          style={{ minHeight: 60 }}
                        >
                          {market.title}
                        </Text>

                        {/* Percentage Display */}
                        <Group justify="space-between" align="center">
                          <Stack gap={4}>
                            <Text size="xs" c="#94A3B8">
                              {primaryOutcome.name}
                            </Text>
                            <Group gap="xs">
                              <Text
                                size="xl"
                                fw={700}
                                c={isPositive ? '#10B981' : '#EF4444'}
                              >
                                {primaryOutcome.percentage}%
                              </Text>
                              <Text size="xs" c={isPositive ? '#10B981' : '#EF4444'}>
                                {isPositive ? '▲' : '▼'}
                              </Text>
                            </Group>
                          </Stack>
                        </Group>

                        {/* Volume and Date */}
                        <Group justify="space-between" align="center">
                          <Group gap={4}>
                            <IconChartBar size={14} color="#64748B" />
                            <Text size="xs" c="#64748B">
                              ${market.volume}
                            </Text>
                          </Group>
                          {market.endDate && (
                            <Text size="xs" c="#64748B">
                              {market.endDate}
                            </Text>
                          )}
                        </Group>
                      </Stack>
                    </Card>
                  </Link>
                </Grid.Col>
              );
            })}
          </Grid>

          {/* No Results */}
          {filteredMarkets.length === 0 && searchQuery && (
            <Box py="xl" style={{ textAlign: 'center' }}>
              <Text size="lg" c="#64748B">
                No markets found for "{searchQuery}"
              </Text>
            </Box>
          )}

          {/* Initial State */}
          {!searchQuery && (
            <Box py="xl" style={{ textAlign: 'center' }}>
              <Text size="lg" c="#64748B">
                Search for markets by keyword or category
              </Text>
            </Box>
          )}
        </Stack>
      </Container>

      <style jsx global>{`
        .market-card-hover:hover {
          border-color: #3B82F6 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </Box>
  );
}

