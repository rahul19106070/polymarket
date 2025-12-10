/**
 * Polymarket Navigation Bar
 * Top navigation with logo, menu items, and wallet connect
 */

import { Container, Group, Text, Button, ActionIcon } from '@mantine/core';
import { IconMenu2, IconWallet } from '@tabler/icons-react';
import Link from 'next/link';

export function PolymarketNavbar() {
  return (
    <div
      style={{
        borderBottom: '1px solid #2D3748',
        backgroundColor: '#0F1419',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Container size="xl" py="sm">
        <Group justify="space-between">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Group gap="xs">
              <Text
                size="xl"
                fw={700}
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Polymarket
              </Text>
            </Group>
          </Link>

          {/* Desktop Menu */}
          <Group gap="lg" visibleFrom="sm">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Text size="sm" c="#E2E8F0" fw={500}>
                Markets
              </Text>
            </Link>
            <Link href="/activity" style={{ textDecoration: 'none' }}>
              <Text size="sm" c="#94A3B8" fw={500}>
                Activity
              </Text>
            </Link>
            <Link href="/leaderboard" style={{ textDecoration: 'none' }}>
              <Text size="sm" c="#94A3B8" fw={500}>
                Leaderboard
              </Text>
            </Link>
          </Group>

          {/* Right side - Wallet Connect */}
          <Group gap="sm">
            <Button
              leftSection={<IconWallet size={16} />}
              style={{
                backgroundColor: '#3B82F6',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2563EB',
                },
              }}
              size="sm"
            >
              Connect Wallet
            </Button>
            <ActionIcon
              variant="subtle"
              color="gray"
              size="lg"
              hiddenFrom="sm"
            >
              <IconMenu2 size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </div>
  );
}

