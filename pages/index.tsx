import React, { useCallback, useState, useContext, useEffect, useMemo } from 'react';
import { Title, Text, Anchor, AppShell, Header } from '@mantine/core';
import { useDropzone } from 'react-dropzone';
import convert from 'xml-js';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Nav from '../components/Nav/Nav';
import SaveComponent from '../components/Save/Save';
import { useUuid } from '@mantine/hooks';

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

  const saveComponents = useMemo(() => {
    return (
      saveElements.map((el) => {
        if (el) {
          return (
            <SaveComponent key={useUuid()} initialElement={el}></SaveComponent>
          );
        }
      })
    );
  }, [saveElements])

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
        {saveComponents}
        <ColorSchemeToggle />
      </AppShell>
    </>
  );
}
