"use client";

import { useState } from "react";
import { Button, Menu, Group, Text, Indicator, Box, useMantineTheme } from "@mantine/core";
import { IconWallet, IconChevronDown } from "@tabler/icons-react";
import { getButtonVariantStyles, getMenuStyles } from "@/lib/buttonStyles";

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const theme = useMantineTheme();

  const connectWallet = async () => {
    try {
      // OKX Wallet integration
      if (typeof window !== "undefined" && (window as any).okxwallet) {
        const provider = (window as any).okxwallet;
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        }
      } else {
        // Fallback: show install OKX Wallet message
        alert("Please install OKX Wallet to connect");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  if (!isConnected) {
    return (
      <Button
        onClick={connectWallet}
        leftSection={<IconWallet size={16} />}
        styles={
          {
            ...getButtonVariantStyles("primary", theme),
            section: {
              "@media (max-width: 640px)": {
                marginRight: 0,
              },
            },
          } as any
        }
      >
        <Box component="span" visibleFrom="sm">
          Connect Wallet
        </Box>
      </Button>
    );
  }

  return (
    <Menu position="bottom-end" offset={8} styles={getMenuStyles(theme) as any}>
      <Menu.Target>
        <Button
          rightSection={<IconChevronDown size={16} />}
          styles={getButtonVariantStyles("secondary", theme) as any}
        >
          <Group gap="xs">
            <Indicator color="green.5" size={8} processing>
              <Box />
            </Indicator>
            <Text size="sm" fw={500}>
              {formatAddress(address!)}
            </Text>
          </Group>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label
          style={{
            borderBottom: `1px solid ${theme.colors.dark[5]}`,
            paddingBottom: 8,
            marginBottom: 8,
          }}
        >
          <Text size="xs" c="dark.1">
            Connected to
          </Text>
          <Text size="sm" fw={500} c="dark.0" mt={4}>
            OKX Wallet
          </Text>
        </Menu.Label>
        <Menu.Item
          onClick={() => {
            setIsConnected(false);
            setAddress(null);
          }}
        >
          Disconnect
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
