/**
 * Create Market Page Component
 * Form to create a new prediction market
 */

'use client';

import {
  Container,
  Stack,
  Card,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Box,
  NumberInput,
} from '@mantine/core';
import { useState } from 'react';
import { PolymarketNavbar } from '@/components/polymarket/PolymarketNavbar';

export function CreateMarketPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating market:', { title, description, endDate });
    // Handle market creation logic here
  };

  return (
    <Box style={{ backgroundColor: '#0F1419', minHeight: '100vh' }}>
      <PolymarketNavbar />
      
      <Container size="md" py="xl">
        <Stack gap="lg">
          <Text size="xl" fw={700} c="white">
            Create New Market
          </Text>

          <Card
            style={{
              backgroundColor: '#1C2432',
              border: '1px solid #2D3748',
              borderRadius: 12,
            }}
            p="lg"
          >
            <form onSubmit={handleSubmit}>
              <Stack gap="md">
                <TextInput
                  label="Market Question"
                  placeholder="Will Bitcoin reach $100k by end of 2024?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  styles={{
                    label: { color: '#E2E8F0', marginBottom: 8 },
                    input: {
                      backgroundColor: '#0D1117',
                      border: '1px solid #2D3748',
                      color: '#E2E8F0',
                      '&::placeholder': { color: '#64748B' },
                    },
                  }}
                />

                <Textarea
                  label="Description"
                  placeholder="Add context and resolution criteria..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  minRows={4}
                  styles={{
                    label: { color: '#E2E8F0', marginBottom: 8 },
                    input: {
                      backgroundColor: '#0D1117',
                      border: '1px solid #2D3748',
                      color: '#E2E8F0',
                      '&::placeholder': { color: '#64748B' },
                    },
                  }}
                />

                <TextInput
                  label="End Date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  styles={{
                    label: { color: '#E2E8F0', marginBottom: 8 },
                    input: {
                      backgroundColor: '#0D1117',
                      border: '1px solid #2D3748',
                      color: '#E2E8F0',
                    },
                  }}
                />

                <Group justify="flex-end" mt="md">
                  <Button
                    variant="subtle"
                    color="gray"
                    styles={{ root: { color: '#94A3B8' } }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    styles={{
                      root: {
                        backgroundColor: '#3B82F6',
                        '&:hover': { backgroundColor: '#2563EB' },
                      },
                    }}
                  >
                    Create Market
                  </Button>
                </Group>
              </Stack>
            </form>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

