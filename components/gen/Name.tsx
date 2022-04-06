import React, { useState, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { Group, Text } from '@mantine/core'
import { v4 as uuidv4 } from 'uuid';
import { FirstComponent } from './First';
import { NickComponent } from './Nick';
import { LastComponent } from './Last';

interface NameProps extends convert.Element {
  onChange: (props: convert.Element) => void;
  children?: React.ReactNode;
}

const NameComponent: React.FC<NameProps> = (props: NameProps) => {
  const [firstElement, setFirstElement] = useState<convert.Element>(findEl(props, 'first') as convert.Element);
  const [nickElement, setNickElement] = useState<convert.Element>(findEl(props, 'nick') as convert.Element);
  const [lastElement, setLastElement] = useState<convert.Element>(findEl(props, 'last') as convert.Element);
  return (
    <Group>
      <FirstComponent key={uuidv4()} onChange={setFirstElement} {...firstElement} />
      <NickComponent key={uuidv4()} onChange={setNickElement} {...nickElement} />
      <LastComponent key={uuidv4()} onChange={setLastElement} {...lastElement} />
    </Group>
  );
}


export default NameComponent;
