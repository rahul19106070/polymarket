# Mantine Usage Guide

## Quick Reference for Common Patterns

### Using Theme Colors

```tsx
import { COLORS } from '@/app/constants';

// In component
<Box style={{ backgroundColor: COLORS.background, color: COLORS.text }}>
  Content
</Box>
```

### Using Pre-defined Styles

```tsx
import { STYLES, BADGE_STYLES } from '@/app/constants';

// Card with hover effect
<Paper
  p="lg"
  style={STYLES.card}
  styles={{
    root: {
      '&:hover': STYLES.cardHover,
    },
  }}
>
  Card content
</Paper>

// Badge variants
<Badge variant="filled" style={BADGE_STYLES.primary}>
  Primary Badge
</Badge>
```

### Layout Components

```tsx
import { Box, Stack, Group, Container } from '@mantine/core';

// Vertical layout
<Stack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>

// Horizontal layout
<Group gap="sm" justify="space-between">
  <div>Left</div>
  <div>Right</div>
</Group>

// Container with max-width
<Container size="xl">
  Content
</Container>

// Custom box
<Box style={{ padding: 24, backgroundColor: COLORS.background }}>
  Content
</Box>
```

### Responsive Design

```tsx
import { Box, SimpleGrid } from '@mantine/core';

// Responsive grid
<SimpleGrid cols={{ base: 1, md: 2, xl: 3 }} spacing="xl">
  <Card />
  <Card />
  <Card />
</SimpleGrid>

// Responsive visibility
<Box visibleFrom="md">Desktop only</Box>
<Box hiddenFrom="md">Mobile only</Box>
```

### Buttons

```tsx
import { Button } from '@mantine/core';
import { COLORS } from '@/app/constants';

// Primary button
<Button
  styles={{
    root: {
      backgroundColor: COLORS.primary,
      color: COLORS.background,
      fontWeight: 600,
      '&:hover': {
        backgroundColor: COLORS.primaryHover,
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
      },
    },
  }}
>
  Click Me
</Button>

// Secondary button
<Button
  variant="outline"
  styles={{
    root: {
      border: `1px solid ${COLORS.border}`,
      color: COLORS.text,
      '&:hover': {
        borderColor: COLORS.primary,
        color: COLORS.primary,
      },
    },
  }}
>
  Secondary
</Button>
```

### Forms & Inputs

```tsx
import { TextInput } from '@mantine/core';
import { STYLES } from '@/app/constants';

<TextInput
  placeholder="Enter text..."
  styles={{
    input: {
      ...STYLES.input,
      '&:focus': STYLES.inputFocus,
    },
  }}
/>
```

### Menus & Dropdowns

```tsx
import { Menu, Button } from '@mantine/core';
import { COLORS } from '@/app/constants';

<Menu
  styles={{
    dropdown: {
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
    },
    item: {
      color: COLORS.text,
      '&:hover': {
        backgroundColor: COLORS.border,
      },
    },
  }}
>
  <Menu.Target>
    <Button>Open Menu</Button>
  </Menu.Target>
  
  <Menu.Dropdown>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Item>Item 2</Menu.Item>
  </Menu.Dropdown>
</Menu>
```

### Typography

```tsx
import { Title, Text } from '@mantine/core';
import { COLORS } from '@/app/constants';

<Title order={1} c={COLORS.text}>
  Main Title
</Title>

<Text size="sm" c={COLORS.textMuted}>
  Subtitle text
</Text>
```

### Icons

```tsx
import { IconTrendingUp, IconWallet } from '@tabler/icons-react';
import { COLORS } from '@/app/constants';

<IconTrendingUp size={20} style={{ color: COLORS.primary }} />
<IconWallet size={16} />
```

### Papers & Cards

```tsx
import { Paper } from '@mantine/core';
import { STYLES, COLORS } from '@/app/constants';

<Paper
  p="lg"
  radius="md"
  style={{
    ...STYLES.card,
    cursor: 'pointer',
  }}
  styles={{
    root: {
      '&:hover': STYLES.cardHover,
    },
  }}
>
  Card content
</Paper>
```

### Badges

```tsx
import { Badge } from '@mantine/core';
import { BADGE_STYLES } from '@/app/constants';

// Primary badge
<Badge variant="filled" style={BADGE_STYLES.primary}>
  Yes
</Badge>

// Secondary badge
<Badge variant="filled" style={BADGE_STYLES.secondary}>
  No
</Badge>

// Probability badge
<Badge size="sm" variant="filled" style={BADGE_STYLES.probability}>
  64%
</Badge>

// Category badge
<Badge variant="filled" style={BADGE_STYLES.category}>
  Crypto
</Badge>
```

### Progress Bars

```tsx
import { Box } from '@mantine/core';
import { COLORS } from '@/app/constants';

<Box style={{ 
  height: 10, 
  backgroundColor: COLORS.surface, 
  borderRadius: 999,
  overflow: 'hidden' 
}}>
  <Box
    style={{
      height: '100%',
      width: '64%',
      backgroundColor: COLORS.primary,
      borderRadius: 999,
      transition: 'width 0.3s ease',
    }}
  />
</Box>
```

### Animations with Framer Motion

```tsx
import { motion } from 'framer-motion';
import { Paper } from '@mantine/core';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.02, y: -4 }}
>
  <Paper>
    Animated card
  </Paper>
</motion.div>
```

## Common Patterns

### Hover Effects

```tsx
styles={{
  root: {
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: COLORS.primary,
      backgroundColor: 'rgba(0, 255, 0, 0.03)',
      color: COLORS.primary,
    },
  },
}}
```

### Glass Effect

```tsx
style={{
  background: 'rgba(0, 0, 0, 0.95)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${COLORS.border}`,
}}
```

### Glow Effect

```tsx
'&:hover': {
  boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)',
}
```

## Best Practices

1. **Always use constants** from `@/app/constants` for colors and styles
2. **Use Mantine components** instead of plain divs when possible
3. **Leverage responsive props** like `visibleFrom`, `hiddenFrom`, and responsive objects
4. **Maintain consistent spacing** using Mantine's spacing scale
5. **Use the theme** via Mantine's style system
6. **Keep animations smooth** with Framer Motion
7. **Ensure accessibility** by using semantic Mantine components
8. **Use TypeScript** for type safety with Mantine's props

## Resources

- [Mantine Documentation](https://mantine.dev/)
- [Tabler Icons](https://tabler-icons.io/)
- [Framer Motion](https://www.framer.com/motion/)



