import React, { useCallback } from 'react';
import { Title, Text, Anchor, AppShell, Navbar, Header } from '@mantine/core';
import { useDropzone } from 'react-dropzone';
import convert from 'xml-js';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Brand } from '../components/Brand/Brand';
import { MainLinks } from '../components/MainLinks/MainLinks';
import { findEl, findElText } from '../components/Utils/Utils';
//import { Saves } from '../components/Saves/Saves';

export default function HomePage() {
  const header = (
    <Header height={60} p="xs">
      Header
    </Header>
  );

  const;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <>
      <AppShell
        {...getRootProps()}
        padding="md"
        navbar={
          <Navbar height={600} p="xs" width={{ base: 300 }}>
            <Navbar.Section mt="xs">
              <Brand />
            </Navbar.Section>
            <Navbar.Section grow mt="md">
              <MainLinks />
            </Navbar.Section>
          </Navbar>
        }
        header={header}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      >
        <input {...getInputProps()} />
        <Title sx={{ fontSize: 100, fontWeight: 900, letterSpacing: -2 }} align="center" mt={100}>
          Welcome to{' '}
          <Text inherit variant="gradient" component="span">
            Mantine
          </Text>
        </Title>
        <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
          This starter Next.js projects includes a minimal setup for server side rendering, if you
          want to learn more on Mantine + Next.js integration follow{' '}
          <Anchor href="https://mantine.dev/theming/next/" size="lg">
            this guide
          </Anchor>
          . To get started edit index.tsx file.
        </Text>
        <ColorSchemeToggle />
      </AppShell>
    </>
  );
}
