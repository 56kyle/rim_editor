import React, { useState, useEffect } from 'react';
import convert from 'xml-js';
import { Group, Text, TextInput } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';

interface IdProps extends convert.Element {
  onChange: (props: convert.Element) => void,
  children?: React.ReactNode,
}

const IdComponent: React.FC<IdProps> = (props: IdProps) => {
  const [value, setValue] = useState<string>(findElText(props) as string);
  useEffect(() => {
    props.onChange({
      elements: [
        undefinedElement,
      ]
    }
  }, []);
  return (
    <Group>
      <TextInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Group>
  );
};

export default IdComponent;
