/**
 * Home Page Component
 * Main landing page showing all markets
 */

'use client';

import { useState } from 'react';
import { Container, Stack, Grid, Card, Group, Text, Box, Badge } from '@mantine/core';
import { IconChartBar } from '@tabler/icons-react';
import Link from 'next/link';
import { PolymarketNavbar } from '@/components/polymarket/PolymarketNavbar';
import { PolymarketTopicBar } from '@/components/polymarket/PolymarketTopicBar';
import { dummyMarkets } from '@/lib/dummyMarkets';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter markets based on search
  const filteredMarkets = dummyMarkets.filter(market =>
    market.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box style={{ backgroundColor: '#0F1419', minHeight: '100vh' }}>
      <PolymarketNavbar />
      <PolymarketTopicBar onSearch={setSearchQuery} />
      
      <Container size="xl" py="lg">
        <Stack gap="lg">
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
          {filteredMarkets.length === 0 && (
            <Box py="xl" style={{ textAlign: 'center' }}>
              <Text size="lg" c="#64748B">
                No markets found for "{searchQuery}"
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

