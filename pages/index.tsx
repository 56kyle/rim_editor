import React, { useState, useEffect, useCallback } from 'react';
import { AppShell, Header } from '@mantine/core';
import { useDropzone } from 'react-dropzone';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Nav from '../components/Nav/Nav';
import ElementComponent from '../components/Element/Element';

export default function HomePage() {
  const header = (
    <Header height={60} p="xs">
      Header
    </Header>
  );

  const [saveElement, setSaveElement] = useState<convert.Element>();
  useEffect(() => {
    console.log('useEffect - saveElement');
    console.dir(saveElement);
  }, [saveElement]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        const xmlAsJS: convert.Element = convert.xml2js(reader.result as string, {
          compact: false,
          alwaysChildren: true,
        }) as convert.Element;
        setSaveElement(xmlAsJS?.elements ? xmlAsJS.elements[0] : undefined);
      };
      reader.readAsText(file);
    });
  }, [setSaveElement]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <>
      <AppShell
        {...getRootProps()}
        padding="md"
        navbar={<Nav saves={[saveElement]} />}
        header={header}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
      >
        <input {...getInputProps()} />
        <ElementComponent id={uuidv4()} {...saveElement} />
        <ColorSchemeToggle />
      </AppShell>
    </>
  );
}
