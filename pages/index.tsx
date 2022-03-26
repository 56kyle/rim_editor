import React, { useCallback, useState, useContext, useEffect } from 'react';
import { Title, Text, Anchor, AppShell, Header } from '@mantine/core';
import { useDropzone } from 'react-dropzone';
import convert from 'xml-js';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Nav from '../components/Nav/Nav';
//import { Save } from '../components/Save/Save';

export default function HomePage() {
  const header = (
    <Header height={60} p="xs">
      Header
    </Header>
  );

  const [saveElements, setSaveElements] = useState<Array<convert.Element | undefined>>([]);

  const addSaveElement = (element: convert.Element) => {
    setSaveElements((elements) => [...elements, element]);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        const asJS: convert.Element = convert.xml2js(
          reader.result as string,
          { compact: false, alwaysChildren: true }
        ) as convert.Element;
        addSaveElement(asJS);
      };
      reader.readAsText(file);
    });
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
        navbar={<Nav saves={saveElements} />}
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
