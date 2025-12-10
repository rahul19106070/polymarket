/**
 * Polymarket Topic/Filter Bar
 * Horizontal scrolling chips
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Group,
  UnstyledButton,
  Text,
  ActionIcon,
  TextInput,
} from "@mantine/core";
import {
  IconFilter,
  IconBookmark,
  IconChevronRight,
  IconChevronLeft,
  IconSearch,
} from "@tabler/icons-react";

const topics = [
  "All",
  "Trump",
  "Fed",
  "Ukraine",
  "Venezuela",
  "Honduras Election",
  "Best of 2025",
  "Aztec",
  "Equities",
  "Weather",
  "Epstein",
  "Derrick",
];

interface PolymarketTopicBarProps {
  onSearch?: (value: string) => void;
  hideSearch?: boolean;
}

export function PolymarketTopicBar({
  onSearch,
  hideSearch = false,
}: PolymarketTopicBarProps = {}) {
  const [activeChip, setActiveChip] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchValue);
      onSearch?.(searchValue);
    }
  };

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Scroll 300px at a time
      const container = scrollContainerRef.current;
      const newScrollLeft =
        direction === "right"
          ? container.scrollLeft + scrollAmount
          : container.scrollLeft - scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const hasOverflow = container.scrollWidth > container.clientWidth;

      setShowLeftArrow(hasOverflow && container.scrollLeft > 0);
      setShowRightArrow(
        hasOverflow &&
          container.scrollLeft <
            container.scrollWidth - container.clientWidth - 5
      );
    }
  };

  useEffect(() => {
    // Check initial scroll position
    const timer = setTimeout(checkScrollPosition, 0);

    // Recalculate on window resize
    window.addEventListener("resize", checkScrollPosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <div>
      <Container size="xl" py="sm">
        {/* Desktop Layout */}
        <Group justify="space-between" className="desktop-layout">
          {/* Left side - Search and filters */}
          {!hideSearch && (
            <Group gap="sm">
              <TextInput
                placeholder="Search"
                leftSection={
                  <IconSearch size={16} style={{ color: "#64748B" }} />
                }
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                onKeyDown={handleSearchKeyDown}
                styles={{
                  root: {
                    maxWidth: "500px",
                  },
                  input: {
                    backgroundColor: "#2D3748",
                    border: "1px solid #374151",
                    color: "#E2E8F0",
                    borderRadius: 6,
                    height: 32,
                    fontSize: 13,
                    "&::placeholder": {
                      color: "#64748B",
                    },
                    "&:focus": {
                      borderColor: "#3B82F6",
                    },
                  },
                }}
              />

              <ActionIcon
                variant="default"
                size="md"
                style={{
                  backgroundColor: "#2D3748",
                  border: "1px solid #374151",
                  color: "#94A3B8",
                }}
              >
                <IconFilter size={16} />
              </ActionIcon>

              <ActionIcon
                variant="default"
                size="md"
                style={{
                  backgroundColor: "#2D3748",
                  border: "1px solid #374151",
                  color: "#94A3B8",
                }}
              >
                <IconBookmark size={16} />
              </ActionIcon>
            </Group>
          )}

          {/* Topic Chips with Scroll */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              flex: 1,
              overflow: "hidden",
            }}
          >
            {showLeftArrow && (
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={() => handleScroll("left")}
                style={{
                  color: "#94A3B8",
                  flexShrink: 0,
                  marginRight: 8,
                  zIndex: 20,
                  position: "relative",
                }}
              >
                <IconChevronLeft size={16} />
              </ActionIcon>
            )}

            <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
              {/* Left gradient mask */}
              {showLeftArrow && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to right, #151E2D 0%, rgba(21, 30, 45, 0.8) 50%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 15,
                  }}
                />
              )}

              {/* Right gradient mask */}
              {showRightArrow && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to left, #151E2D 0%, rgba(21, 30, 45, 0.8) 50%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 15,
                  }}
                />
              )}

              <div
                ref={scrollContainerRef}
                onScroll={checkScrollPosition}
                style={{
                  display: "flex",
                  gap: "8px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                className="hide-scrollbar"
              >
                {topics.map((topic) => (
                  <UnstyledButton
                    key={topic}
                    onClick={() => setActiveChip(topic)}
                    style={{
                      backgroundColor:
                        activeChip === topic ? "#3B82F6" : "#2D3748",
                      border: `1px solid ${
                        activeChip === topic ? "#3B82F6" : "#374151"
                      }`,
                      borderRadius: 16,
                      padding: "6px 14px",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    <Text
                      size="sm"
                      c={activeChip === topic ? "white" : "#94A3B8"}
                      fw={500}
                      style={{ fontSize: 13 }}
                    >
                      {topic}
                    </Text>
                  </UnstyledButton>
                ))}
              </div>
            </div>

            {showRightArrow && (
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={() => handleScroll("right")}
                style={{
                  color: "#94A3B8",
                  flexShrink: 0,
                  marginLeft: 8,
                  zIndex: 20,
                  position: "relative",
                }}
              >
                <IconChevronRight size={16} />
              </ActionIcon>
            )}
          </div>
        </Group>

        {/* Mobile Layout */}
        <div
          className="mobile-layout"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {/* Search Row - Full Width */}
          <Group gap="sm" style={{ width: "100%" }}>
            <TextInput
              placeholder="Search"
              leftSection={
                <IconSearch size={16} style={{ color: "#64748B" }} />
              }
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              styles={{
                root: {
                  flex: 1,
                },
                input: {
                  backgroundColor: "#2D3748",
                  border: "1px solid #374151",
                  color: "#E2E8F0",
                  borderRadius: 6,
                  height: 32,
                  fontSize: 13,
                  "&::placeholder": {
                    color: "#64748B",
                  },
                  "&:focus": {
                    borderColor: "#3B82F6",
                  },
                },
              }}
            />

            <ActionIcon
              variant="default"
              size="md"
              style={{
                backgroundColor: "#2D3748",
                border: "1px solid #374151",
                color: "#94A3B8",
              }}
            >
              <IconFilter size={16} />
            </ActionIcon>

            <ActionIcon
              variant="default"
              size="md"
              style={{
                backgroundColor: "#2D3748",
                border: "1px solid #374151",
                color: "#94A3B8",
              }}
            >
              <IconBookmark size={16} />
            </ActionIcon>
          </Group>

          {/* Topic Chips Row - Full Width */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "100%",
              overflow: "hidden",
            }}
          >
            {showLeftArrow && (
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={() => handleScroll("left")}
                style={{
                  color: "#94A3B8",
                  flexShrink: 0,
                  marginRight: 8,
                  zIndex: 20,
                  position: "relative",
                }}
              >
                <IconChevronLeft size={16} />
              </ActionIcon>
            )}

            <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
              {/* Left gradient mask */}
              {showLeftArrow && (
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to right, #151E2D 0%, rgba(21, 30, 45, 0.8) 50%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 15,
                  }}
                />
              )}

              {/* Right gradient mask */}
              {showRightArrow && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: "60px",
                    background:
                      "linear-gradient(to left, #151E2D 0%, rgba(21, 30, 45, 0.8) 50%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 15,
                  }}
                />
              )}

              <div
                ref={scrollContainerRef}
                onScroll={checkScrollPosition}
                style={{
                  display: "flex",
                  gap: "8px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
                className="hide-scrollbar"
              >
                {topics.map((topic) => (
                  <UnstyledButton
                    key={topic}
                    onClick={() => setActiveChip(topic)}
                    style={{
                      backgroundColor:
                        activeChip === topic ? "#3B82F6" : "#2D3748",
                      border: `1px solid ${
                        activeChip === topic ? "#3B82F6" : "#374151"
                      }`,
                      borderRadius: 16,
                      padding: "6px 14px",
                      whiteSpace: "nowrap",
                      transition: "all 0.2s",
                      flexShrink: 0,
                    }}
                  >
                    <Text
                      size="sm"
                      c={activeChip === topic ? "white" : "#94A3B8"}
                      fw={500}
                      style={{ fontSize: 13 }}
                    >
                      {topic}
                    </Text>
                  </UnstyledButton>
                ))}
              </div>
            </div>

            {showRightArrow && (
              <ActionIcon
                variant="subtle"
                size="sm"
                onClick={() => handleScroll("right")}
                style={{
                  color: "#94A3B8",
                  flexShrink: 0,
                  marginLeft: 8,
                  zIndex: 20,
                  position: "relative",
                }}
              >
                <IconChevronRight size={16} />
              </ActionIcon>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
