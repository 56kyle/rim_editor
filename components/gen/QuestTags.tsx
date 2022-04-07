import React, { useState, useEffect } from 'react';
import convert from 'xml-js';
import { Group, Text, TextInput } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';

interface QuestTagsProps extends convert.Element {
  onChange: (props: convert.Element) => void,
  children?: React.ReactNode,
}

const QuestTagsComponent: React.FC<QuestTagsProps> = (props: QuestTagsProps) => {

  useEffect(() => {
    props.onChange({
      elements: [
      ]
    }
  }, []);
  return (
    <Group>

    </Group>
  );
};

export default QuestTagsComponent;
