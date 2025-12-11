"use client";

import { useState } from "react";
import { Button, Menu, Group, Text, Indicator, Box } from "@mantine/core";
import { IconWallet, IconChevronDown } from "@tabler/icons-react";

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

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
    <Menu
      position="bottom-end"
      offset={8}
      styles={
        {
          dropdown: {
            backgroundColor: "#000000",
            border: "1px solid #1A1A1A",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
          },
          item: {
            color: "#CCCCCC",
            "&:hover": {
              backgroundColor: "#1A1A1A !important",
            },
          },
        } as any
      }
    >
      <Menu.Target>
        <Button
          variant="outline"
          rightSection={<IconChevronDown size={16} />}
          style={{
            backgroundColor: "#000000",
            border: "1px solid #1A1A1A",
            color: "#CCCCCC",
          }}
          styles={
            {
              root: {
                "&:hover": {
                  borderColor: "#00FF00 !important",
                },
              },
            } as any
          }
        >
          <Group gap="xs">
            <Indicator color="#00FF00" size={8} processing>
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
            borderBottom: "1px solid #1A1A1A",
            paddingBottom: 8,
            marginBottom: 8,
          }}
        >
          <Text size="xs" c="#999999">
            Connected to
          </Text>
          <Text size="sm" fw={500} c="#CCCCCC" mt={4}>
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
