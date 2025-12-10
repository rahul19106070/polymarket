/**
 * Polymarket Market Detail Page
 * Matches the exact UI from Polymarket with Comments, Top Holders, Activity tabs
 */

'use client';

import { useState } from 'react';
import {
  Container,
  Stack,
  Group,
  Text,
  Image,
  Tabs,
  Card,
  Button,
  Box,
  Badge,
  Avatar,
  Grid,
  ActionIcon,
  SegmentedControl,
  NumberInput,
} from '@mantine/core';
import { IconShare, IconBookmark, IconChartBar, IconCode, IconMaximize, IconSettings } from '@tabler/icons-react';
import { PolymarketNavbar } from '@/components/polymarket/PolymarketNavbar';
import { PolymarketTopicBar } from '@/components/polymarket/PolymarketTopicBar';
import { dummyMarkets } from '@/lib/dummyMarkets';

interface PolymarketDetailPageProps {
  slug: string;
}

// Dummy data for comments
const dummyComments = [
  {
    id: '1',
    user: 'Tight-Pomegranate',
    avatar: '🔴',
    position: '4.0K Salvador Nasralla',
    comment: 'God the mighty help us',
    likes: 0,
    time: '32m ago',
  },
  {
    id: '2',
    user: 'RoosterCG',
    avatar: '🔵',
    position: '2.8K Salvador Nasralla',
    comment: 'Now they restarted the vote count :)',
    likes: 2,
    time: '40m ago',
  },
  {
    id: '3',
    user: 'SolidusD',
    avatar: '🟠',
    position: '1.1K Salvador Nasralla',
    comment: 'They restarted the vote count',
    likes: 0,
    time: '5h ago',
  },
];

// Dummy data for top holders
const dummyTopHolders = {
  yes: [
    { user: 'Growing-Executive', shares: 368146, avatar: '🟢' },
    { user: 'qwerkk', shares: 204150, avatar: '🟢' },
    { user: 'chungguskhan', shares: 139756, avatar: '🟡' },
    { user: 'Nouveau', shares: 71566, avatar: '⚪' },
    { user: 'Talkatalvi', shares: 63320, avatar: '🟠' },
    { user: 'ciro2', shares: 45587, avatar: '🔵' },
    { user: 'Papitolindoo', shares: 41085, avatar: '🟣' },
    { user: 'OLANCHANO1517', shares: 39939, avatar: '🟢' },
    { user: 'ethfdy', shares: 32035, avatar: '🔵' },
    { user: 'Sinful-Ceramic', shares: 29834, avatar: '🔴' },
  ],
  no: [
    { user: 'qpele', shares: 53312, avatar: '🔵' },
    { user: 'Freakbob', shares: 25000, avatar: '🔴' },
    { user: 'Mohammed-Venkatanarasimharaju', shares: 17894, avatar: '🟡' },
    { user: 'Return234', shares: 16210, avatar: '🟣' },
    { user: 'MagicUser', shares: 15000, avatar: '🟣' },
    { user: 'LuxRuby', shares: 13325, avatar: '🟠' },
    { user: 'therealonestepahead', shares: 12127, avatar: '🔵' },
    { user: 'cigarettes', shares: 11540, avatar: '🟣' },
    { user: 'Wiz92', shares: 10403, avatar: '🔵' },
    { user: 'mwenya', shares: 9059, avatar: '🔵' },
  ],
};

// Dummy activity data
const dummyActivity = [
  {
    id: '1',
    user: 'tiquismiquis',
    avatar: '🟢',
    action: 'bought',
    amount: '139 Yes',
    outcome: 'Nasry "Tito" Asfura',
    price: '90.0¢',
    total: '$125',
    time: '8m ago',
  },
  {
    id: '2',
    user: '0xb761a7dbc360d...',
    avatar: '🟣',
    action: 'sold',
    amount: '17 No',
    outcome: 'Salvador Nasralla',
    price: '90.9¢',
    total: '$15',
    time: '11m ago',
  },
  {
    id: '3',
    user: 'Passionate-Left',
    avatar: '🔴',
    action: 'sold',
    amount: '1,672 Yes',
    outcome: 'Nasry "Tito" Asfura',
    price: '89.0¢',
    total: '$1,488',
    time: '16m ago',
  },
];

// Dummy related markets
const relatedMarkets = [
  {
    id: '1',
    title: 'Will Salvador Alejandro César Nasralla Salum finish in second...',
    percentage: 88,
    image: '🇭🇳',
  },
  {
    id: '2',
    title: 'Will Nasry Juan Asfura Zablah win the 2025 Honduran...',
    percentage: 87,
    image: '🇭🇳',
  },
  {
    id: '3',
    title: 'Will Nasry Juan Asfura Zablah win the 2025 Honduran...',
    percentage: 45,
    image: '🇭🇳',
  },
];

// Dummy chart data
const generateChartData = (basePrice: number) => {
  const data = [];
  const now = Date.now();
  const timeRange = 30 * 24 * 60 * 60 * 1000; // 30 days
  
  for (let i = 0; i < 50; i++) {
    const timestamp = now - timeRange + (timeRange / 50) * i;
    const volatility = Math.random() * 20 - 10;
    const price = Math.max(0, Math.min(100, basePrice + volatility + (i * 0.5)));
    data.push({ timestamp, price });
  }
  
  return data;
};

export function PolymarketDetailPage({ slug }: PolymarketDetailPageProps) {
  const [activeTab, setActiveTab] = useState<string | null>('comments');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [selectedOutcome, setSelectedOutcome] = useState<'yes' | 'no'>('yes');
  const [amount, setAmount] = useState<number>(0);
  const [timeframe, setTimeframe] = useState('ALL');
  
  // Find market by slug
  const market = dummyMarkets.find(m => m.slug === slug);
  
  if (!market) {
    return (
      <Box style={{ backgroundColor: '#0F1419', minHeight: '100vh' }}>
        <PolymarketNavbar />
        <Container size="xl" py="xl">
          <Text c="white" size="xl">Market not found</Text>
        </Container>
      </Box>
    );
  }
  
  const primaryOutcome = market.outcomes[0] || { name: 'Yes', percentage: 87 };
  const secondaryOutcome = market.outcomes[1] || { name: 'No', percentage: 13 };
  
  const yesPercentage = primaryOutcome.percentage;
  const noPercentage = secondaryOutcome.percentage || (100 - yesPercentage);

  return (
    <Box style={{ backgroundColor: '#0F1419', minHeight: '100vh' }}>
      <PolymarketNavbar />
      <PolymarketTopicBar onSearch={() => {}} hideSearch />
      
      <Container size="xl" py="lg">
        <Grid gutter="lg">
          {/* Main Content */}
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Stack gap="lg">
              {/* Market Header */}
              <Group align="center" gap="md">
                <Box
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 8,
                    backgroundColor: '#2D3748',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                  }}
                >
                  {market.icon ? (
                    <Image src={market.icon} alt={market.title} w={48} h={48} radius="md" />
                  ) : (
                    '🇭🇳'
                  )}
                </Box>
                <Text size="xl" fw={700} c="white" style={{ flex: 1 }}>
                  {market.title}
                </Text>
                <ActionIcon variant="subtle" color="gray" size="lg">
                  <IconShare size={20} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="gray" size="lg">
                  <IconBookmark size={20} />
                </ActionIcon>
              </Group>

              {/* Market Info */}
              <Group gap="xs">
                <Group gap={4}>
                  <IconChartBar size={16} color="#64748B" />
                  <Text size="sm" c="#64748B">
                    {market.volume} Vol.
                  </Text>
                </Group>
                <Text size="sm" c="#64748B">•</Text>
                <Text size="sm" c="#64748B">Nov 30, 2025</Text>
              </Group>

              {/* Market Context */}
              <Card
                style={{
                  backgroundColor: '#1C2432',
                  border: '1px solid #2D3748',
                  borderRadius: 12,
                }}
                p="lg"
              >
                <Group justify="space-between" mb="md">
                  <Text size="md" fw={600} c="white">
                    Market Context
                  </Text>
                  <Button
                    variant="subtle"
                    size="xs"
                    color="blue"
                    styles={{ root: { color: '#60A5FA' } }}
                  >
                    Generate
                  </Button>
                </Group>
              </Card>

              {/* Rules */}
              <Card
                style={{
                  backgroundColor: '#1C2432',
                  border: '1px solid #2D3748',
                  borderRadius: 12,
                }}
                p="lg"
              >
                <Text size="md" fw={600} c="white" mb="md">
                  Rules
                </Text>
                <Text size="sm" c="#94A3B8" mb="sm">
                  Presidential elections are scheduled to be held in Honduras on November 30, 2025.
                </Text>
                <Button
                  variant="subtle"
                  size="xs"
                  styles={{ root: { color: '#60A5FA', padding: 0 } }}
                >
                  Show more
                </Button>
              </Card>

              {/* Tabs Section */}
              <Card
                style={{
                  backgroundColor: '#1C2432',
                  border: '1px solid #2D3748',
                  borderRadius: 12,
                }}
                p={0}
              >
                <Tabs value={activeTab} onChange={setActiveTab}>
                  <Tabs.List
                    style={{
                      backgroundColor: 'transparent',
                      borderBottom: '1px solid #2D3748',
                      padding: '0 16px',
                    }}
                  >
                    <Tabs.Tab
                      value="comments"
                      style={{
                        color: activeTab === 'comments' ? '#60A5FA' : '#94A3B8',
                        fontWeight: 500,
                      }}
                    >
                      Comments (2,420)
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="holders"
                      style={{
                        color: activeTab === 'holders' ? '#60A5FA' : '#94A3B8',
                        fontWeight: 500,
                      }}
                    >
                      Top Holders
                    </Tabs.Tab>
                    <Tabs.Tab
                      value="activity"
                      style={{
                        color: activeTab === 'activity' ? '#60A5FA' : '#94A3B8',
                        fontWeight: 500,
                      }}
                    >
                      Activity
                    </Tabs.Tab>
                  </Tabs.List>

                  {/* Comments Tab */}
                  <Tabs.Panel value="comments" p="lg">
                    <Stack gap="md">
                      <Group justify="space-between">
                        <Group gap="xs">
                          <Button
                            variant="default"
                            size="xs"
                            styles={{
                              root: {
                                backgroundColor: '#242D3C',
                                border: '1px solid #2D3748',
                                color: '#E2E8F0',
                              },
                            }}
                          >
                            Newest
                          </Button>
                          <Text size="xs" c="#64748B">
                            Holders
                          </Text>
                        </Group>
                        <Text size="xs" c="#94A3B8">
                          ⚠️ Beware of external links
                        </Text>
                      </Group>

                      {/* Comment Input */}
                      <Box
                        style={{
                          backgroundColor: '#0D1117',
                          border: '1px solid #2D3748',
                          borderRadius: 8,
                          padding: 12,
                        }}
                      >
                        <Text size="sm" c="#64748B">
                          Add a comment
                        </Text>
                      </Box>

                      {/* Comments List */}
                      <Stack gap="md">
                        {dummyComments.map((comment) => (
                          <Card
                            key={comment.id}
                            style={{
                              backgroundColor: '#161B22',
                              border: '1px solid #2D3748',
                              borderRadius: 8,
                            }}
                            p="md"
                          >
                            <Group align="flex-start" gap="sm">
                              <Avatar color="blue" radius="xl" size="sm">
                                {comment.avatar}
                              </Avatar>
                              <Stack gap={4} style={{ flex: 1 }}>
                                <Group gap="xs">
                                  <Text size="sm" fw={600} c="white">
                                    {comment.user}
                                  </Text>
                                  <Badge
                                    size="xs"
                                    variant="light"
                                    color="green"
                                    styles={{
                                      root: {
                                        backgroundColor: '#10B98120',
                                        color: '#10B981',
                                      },
                                    }}
                                  >
                                    {comment.position}
                                  </Badge>
                                  <Text size="xs" c="#64748B">
                                    {comment.time}
                                  </Text>
                                </Group>
                                <Text size="sm" c="#E2E8F0">
                                  {comment.comment}
                                </Text>
                                <Group gap="xs">
                                  <Text size="xs" c="#64748B">
                                    ❤️ {comment.likes}
                                  </Text>
                                </Group>
                              </Stack>
                            </Group>
                          </Card>
                        ))}
                      </Stack>
                    </Stack>
                  </Tabs.Panel>

                  {/* Top Holders Tab */}
                  <Tabs.Panel value="holders" p="lg">
                    <Stack gap="md">
                      <SegmentedControl
                        value={primaryOutcome.name}
                        data={[primaryOutcome.name, secondaryOutcome?.name || 'No']}
                        fullWidth
                        styles={{
                          root: { backgroundColor: '#0D1117' },
                          control: { border: 'none' },
                          label: {
                            color: '#94A3B8',
                          },
                          labelActive: {
                            color: 'white',
                          },
                        }}
                      />

                      <Grid gutter="xl">
                        <Grid.Col span={6}>
                          <Stack gap="xs">
                            <Group justify="space-between" mb="xs">
                              <Text size="sm" fw={600} c="white">
                                Yes holders
                              </Text>
                              <Text size="xs" c="#64748B">
                                SHARES
                              </Text>
                            </Group>
                            {dummyTopHolders.yes.map((holder, idx) => (
                              <Group key={idx} justify="space-between">
                                <Group gap="xs">
                                  <Avatar size="sm" radius="xl">
                                    {holder.avatar}
                                  </Avatar>
                                  <Text size="sm" c="#E2E8F0">
                                    {holder.user}
                                  </Text>
                                </Group>
                                <Text size="sm" c="#10B981" fw={500}>
                                  {holder.shares.toLocaleString()}
                                </Text>
                              </Group>
                            ))}
                          </Stack>
                        </Grid.Col>

                        <Grid.Col span={6}>
                          <Stack gap="xs">
                            <Group justify="space-between" mb="xs">
                              <Text size="sm" fw={600} c="white">
                                No holders
                              </Text>
                              <Text size="xs" c="#64748B">
                                SHARES
                              </Text>
                            </Group>
                            {dummyTopHolders.no.map((holder, idx) => (
                              <Group key={idx} justify="space-between">
                                <Group gap="xs">
                                  <Avatar size="sm" radius="xl">
                                    {holder.avatar}
                                  </Avatar>
                                  <Text size="sm" c="#E2E8F0">
                                    {holder.user}
                                  </Text>
                                </Group>
                                <Text size="sm" c="#EF4444" fw={500}>
                                  {holder.shares.toLocaleString()}
                                </Text>
                              </Group>
                            ))}
                          </Stack>
                        </Grid.Col>
                      </Grid>
                    </Stack>
                  </Tabs.Panel>

                  {/* Activity Tab */}
                  <Tabs.Panel value="activity" p="lg">
                    <Stack gap="xs">
                      <Group justify="space-between" mb="xs">
                        <Group gap="xs">
                          <Button
                            variant="default"
                            size="xs"
                            styles={{
                              root: {
                                backgroundColor: '#242D3C',
                                border: '1px solid #2D3748',
                                color: '#E2E8F0',
                              },
                            }}
                          >
                            All
                          </Button>
                          <Button
                            variant="default"
                            size="xs"
                            styles={{
                              root: {
                                backgroundColor: 'transparent',
                                border: '1px solid #2D3748',
                                color: '#94A3B8',
                              },
                            }}
                          >
                            Min amount
                          </Button>
                        </Group>
                      </Group>

                      {dummyActivity.map((activity) => (
                        <Group
                          key={activity.id}
                          justify="space-between"
                          p="sm"
                          style={{
                            backgroundColor: '#161B22',
                            borderRadius: 8,
                            border: '1px solid #2D3748',
                          }}
                        >
                          <Group gap="xs">
                            <Avatar size="sm" radius="xl">
                              {activity.avatar}
                            </Avatar>
                            <Text size="sm" c="#E2E8F0">
                              {activity.user}
                            </Text>
                            <Text size="sm" c="#94A3B8">
                              {activity.action}
                            </Text>
                            <Badge
                              size="sm"
                              color={activity.action === 'bought' ? 'green' : 'red'}
                              styles={{
                                root: {
                                  backgroundColor:
                                    activity.action === 'bought' ? '#10B98120' : '#EF444420',
                                  color: activity.action === 'bought' ? '#10B981' : '#EF4444',
                                },
                              }}
                            >
                              {activity.amount}
                            </Badge>
                            <Text size="sm" c="#94A3B8">
                              for {activity.outcome}
                            </Text>
                            <Text size="sm" c="white">
                              at {activity.price}
                            </Text>
                            <Text size="sm" c="#64748B">
                              ({activity.total})
                            </Text>
                          </Group>
                          <Text size="xs" c="#64748B">
                            {activity.time}
                          </Text>
                        </Group>
                      ))}
                    </Stack>
                  </Tabs.Panel>
                </Tabs>
              </Card>

              {/* Chart Section */}
              <Card
                style={{
                  backgroundColor: '#1C2432',
                  border: '1px solid #2D3748',
                  borderRadius: 12,
                }}
                p="lg"
              >
                <Stack gap="md">
                  <Group justify="space-between">
                    <Text size="lg" fw={600} c="white">
                      {market.title}
                    </Text>
                    <Group gap="xs">
                      <ActionIcon variant="subtle" color="gray">
                        <IconChartBar size={18} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" color="gray">
                        <IconCode size={18} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" color="gray">
                        <IconMaximize size={18} />
                      </ActionIcon>
                      <ActionIcon variant="subtle" color="gray">
                        <IconSettings size={18} />
                      </ActionIcon>
                    </Group>
                  </Group>

                  {/* Timeframe selector */}
                  <Group gap="xs">
                    {['1H', '6H', '1D', '1W', '1M', 'ALL'].map((tf) => (
                      <Button
                        key={tf}
                        size="xs"
                        variant={timeframe === tf ? 'filled' : 'subtle'}
                        color={timeframe === tf ? 'blue' : 'gray'}
                        onClick={() => setTimeframe(tf)}
                        styles={{
                          root: {
                            backgroundColor: timeframe === tf ? '#3B82F6' : 'transparent',
                            color: timeframe === tf ? 'white' : '#94A3B8',
                          },
                        }}
                      >
                        {tf}
                      </Button>
                    ))}
                  </Group>

                  {/* Simple chart representation */}
                  <Box
                    style={{
                      height: 300,
                      backgroundColor: '#0D1117',
                      borderRadius: 8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Simplified chart visualization */}
                    <svg width="100%" height="100%" style={{ position: 'absolute' }}>
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F97316" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,250 L 50,200 L 100,180 L 150,190 L 200,170 L 250,160 L 300,150 L 350,140 L 400,100 L 450,90 L 500,85 L 550,80 L 600,75 L 650,85 L 700,80 L 750,75 L 800,70 L 850,75 L 900,70 L 950,65 L 1000,60"
                        stroke="#F97316"
                        strokeWidth="2"
                        fill="url(#chartGradient)"
                      />
                    </svg>
                    <Group
                      gap="xl"
                      style={{ position: 'absolute', bottom: 20, left: 20 }}
                    >
                      <Stack gap={0}>
                        <Text size="xs" c="#64748B">
                          {primaryOutcome.name} {yesPercentage}%
                        </Text>
                      </Stack>
                      <Stack gap={0}>
                        <Text size="xs" c="#64748B">
                          {secondaryOutcome?.name || 'No'} {noPercentage}%
                        </Text>
                      </Stack>
                    </Group>
                  </Box>

                  {/* Outcome buttons */}
                  <Group grow gap="md">
                    <Card
                      style={{
                        backgroundColor: '#161B22',
                        border: '1px solid #2D3748',
                        cursor: 'pointer',
                      }}
                      p="md"
                    >
                      <Stack gap="xs">
                        <Group justify="space-between">
                          <Text size="sm" c="#E2E8F0">
                            {primaryOutcome.name}
                          </Text>
                          <Group gap="xs">
                            <Text size="xl" fw={700} c="white">
                              {yesPercentage}%
                            </Text>
                            <Text size="xs" c="#10B981">
                              ▲5%
                            </Text>
                          </Group>
                        </Group>
                        <Text size="xs" c="#64748B">
                          ${market.volume} Vol.
                        </Text>
                        <Group gap="xs" mt="xs">
                          <Button
                            flex={1}
                            color="green"
                            styles={{
                              root: {
                                backgroundColor: '#10B981',
                                '&:hover': { backgroundColor: '#059669' },
                              },
                            }}
                          >
                            Buy Yes 90¢
                          </Button>
                          <Button
                            flex={1}
                            color="red"
                            variant="outline"
                            styles={{
                              root: {
                                borderColor: '#EF4444',
                                color: '#EF4444',
                                '&:hover': {
                                  backgroundColor: '#EF444420',
                                },
                              },
                            }}
                          >
                            Buy No 11¢
                          </Button>
                        </Group>
                      </Stack>
                    </Card>

                    {secondaryOutcome && (
                      <Card
                        style={{
                          backgroundColor: '#161B22',
                          border: '1px solid #2D3748',
                          cursor: 'pointer',
                        }}
                        p="md"
                      >
                        <Stack gap="xs">
                          <Group justify="space-between">
                            <Text size="sm" c="#E2E8F0">
                              {secondaryOutcome.name}
                            </Text>
                            <Group gap="xs">
                              <Text size="xl" fw={700} c="white">
                                {noPercentage}%
                              </Text>
                              <Text size="xs" c="#EF4444">
                                ▼3%
                              </Text>
                            </Group>
                          </Group>
                          <Text size="xs" c="#64748B">
                            ${market.volume} Vol.
                          </Text>
                          <Group gap="xs" mt="xs">
                            <Button
                              flex={1}
                              color="green"
                              styles={{
                                root: {
                                  backgroundColor: '#10B981',
                                  '&:hover': { backgroundColor: '#059669' },
                                },
                              }}
                            >
                              Buy Yes 9.0¢
                            </Button>
                            <Button
                              flex={1}
                              color="red"
                              variant="outline"
                              styles={{
                                root: {
                                  borderColor: '#EF4444',
                                  color: '#EF4444',
                                  '&:hover': {
                                    backgroundColor: '#EF444420',
                                  },
                                },
                              }}
                            >
                              Buy No 82.3¢
                            </Button>
                          </Group>
                        </Stack>
                      </Card>
                    )}
                  </Group>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>

          {/* Right Sidebar - Trading Panel */}
          <Grid.Col span={{ base: 12, lg: 4 }}>
            <Stack gap="lg" style={{ position: 'sticky', top: 80 }}>
              {/* Trading Panel */}
              <Card
                style={{
                  backgroundColor: '#1C2432',
                  border: '1px solid #2D3748',
                  borderRadius: 12,
                }}
                p="lg"
              >
                <Stack gap="md">
                  {/* Outcome Avatar */}
                  <Group justify="center">
                    <Box
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        backgroundColor: '#2D3748',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 32,
                      }}
                    >
                      {market.icon ? (
                        <Image src={market.icon} alt={primaryOutcome.name} w={64} h={64} radius="xl" />
                      ) : (
                        '👤'
                      )}
                    </Box>
                  </Group>

                  <Text size="md" fw={600} c="white" ta="center">
                    {primaryOutcome.name}
                  </Text>

                  {/* Buy/Sell Toggle */}
                  <SegmentedControl
                    value={tradeType}
                    onChange={(value) => setTradeType(value as 'buy' | 'sell')}
                    data={[
                      { label: 'Buy', value: 'buy' },
                      { label: 'Sell', value: 'sell' },
                    ]}
                    fullWidth
                    styles={{
                      root: { backgroundColor: '#0D1117' },
                      control: { border: 'none' },
                      label: {
                        color: '#94A3B8',
                      },
                      labelActive: {
                        color: 'white',
                      },
                    }}
                  />

                  {/* Market Toggle */}
                  <Group justify="space-between">
                    <Text size="sm" c="#94A3B8">
                      Market
                    </Text>
                    <Button
                      size="xs"
                      variant="subtle"
                      styles={{
                        root: { color: '#60A5FA', padding: 0 },
                      }}
                    >
                      ▼
                    </Button>
                  </Group>

                  {/* Yes/No Price Cards */}
                  <Group grow gap="xs">
                    <Card
                      style={{
                        backgroundColor: tradeType === 'buy' ? '#10B98130' : '#0D1117',
                        border: `2px solid ${tradeType === 'buy' ? '#10B981' : '#2D3748'}`,
                        cursor: 'pointer',
                      }}
                      p="md"
                    >
                      <Stack gap={4} align="center">
                        <Text size="xs" c="#94A3B8">
                          Yes
                        </Text>
                        <Text size="xl" fw={700} c="#10B981">
                          90¢
                        </Text>
                      </Stack>
                    </Card>
                    <Card
                      style={{
                        backgroundColor: '#0D1117',
                        border: '1px solid #2D3748',
                        cursor: 'pointer',
                      }}
                      p="md"
                    >
                      <Stack gap={4} align="center">
                        <Text size="xs" c="#94A3B8">
                          No
                        </Text>
                        <Text size="xl" fw={700} c="#64748B">
                          11¢
                        </Text>
                      </Stack>
                    </Card>
                  </Group>

                  {/* Amount Input */}
                  <Stack gap={4}>
                    <Text size="sm" c="#94A3B8">
                      Amount
                    </Text>
                    <Box style={{ position: 'relative' }}>
                      <Text
                        size="2rem"
                        fw={300}
                        c="#E2E8F0"
                        style={{
                          backgroundColor: '#0D1117',
                          border: '1px solid #2D3748',
                          borderRadius: 8,
                          padding: '12px 16px',
                        }}
                      >
                        ${amount || 0}
                      </Text>
                    </Box>
                    <Group gap="xs" mt="xs">
                      {[1, 20, 100].map((val) => (
                        <Button
                          key={val}
                          size="xs"
                          variant="default"
                          onClick={() => setAmount((prev) => prev + val)}
                          styles={{
                            root: {
                              backgroundColor: '#242D3C',
                              border: '1px solid #2D3748',
                              color: '#E2E8F0',
                            },
                          }}
                        >
                          +${val}
                        </Button>
                      ))}
                      <Button
                        size="xs"
                        variant="default"
                        flex={1}
                        styles={{
                          root: {
                            backgroundColor: '#242D3C',
                            border: '1px solid #2D3748',
                            color: '#E2E8F0',
                          },
                        }}
                      >
                        Max
                      </Button>
                    </Group>
                  </Stack>

                  {/* Trade Button */}
                  <Button
                    size="lg"
                    fullWidth
                    color={tradeType === 'buy' ? 'blue' : 'red'}
                    styles={{
                      root: {
                        backgroundColor: tradeType === 'buy' ? '#3B82F6' : '#EF4444',
                        '&:hover': {
                          backgroundColor: tradeType === 'buy' ? '#2563EB' : '#DC2626',
                        },
                      },
                    }}
                  >
                    Trade
                  </Button>

                  <Text size="xs" c="#64748B" ta="center">
                    By trading, you agree to the{' '}
                    <Text component="span" c="#60A5FA">
                      Terms of Use
                    </Text>
                  </Text>
                </Stack>
              </Card>

              {/* Related Markets */}
              <Card
                style={{
                  backgroundColor: '#1C2432',
                  border: '1px solid #2D3748',
                  borderRadius: 12,
                }}
                p="lg"
              >
                <Stack gap="md">
                  <Group justify="space-between">
                    <Text size="sm" fw={600} c="white">
                      All
                    </Text>
                    <Group gap="xs">
                      <Button
                        size="xs"
                        variant="subtle"
                        styles={{ root: { color: '#94A3B8' } }}
                      >
                        Elections
                      </Button>
                      <Button
                        size="xs"
                        variant="subtle"
                        styles={{ root: { color: '#94A3B8' } }}
                      >
                        Politics
                      </Button>
                      <Button
                        size="xs"
                        variant="subtle"
                        styles={{ root: { color: '#94A3B8' } }}
                      >
                        Global Elections
                      </Button>
                    </Group>
                  </Group>

                  {relatedMarkets.map((related) => (
                    <Card
                      key={related.id}
                      style={{
                        backgroundColor: '#161B22',
                        border: '1px solid #2D3748',
                        cursor: 'pointer',
                      }}
                      p="md"
                    >
                      <Group gap="sm">
                        <Box
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            backgroundColor: '#2D3748',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 18,
                          }}
                        >
                          {related.image}
                        </Box>
                        <Stack gap={2} style={{ flex: 1 }}>
                          <Text size="xs" c="#E2E8F0" lineClamp={2}>
                            {related.title}
                          </Text>
                        </Stack>
                        <Text size="lg" fw={700} c="white">
                          {related.percentage}%
                        </Text>
                      </Group>
                    </Card>
                  ))}
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

