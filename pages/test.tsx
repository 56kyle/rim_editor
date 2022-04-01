import React from 'react';
import { AppShell, Header } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Nav from '../components/Nav/Nav';

export default function HomePage() {
  const header = (
    <Header height={60} p="xs">
      Header
    </Header>
  );

  return (
    <>
      <AppShell
        padding="md"
        navbar={<Nav saves={[]} />}
        header={header}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      >
        <ColorSchemeToggle />
      </AppShell>
    </>
  );
}