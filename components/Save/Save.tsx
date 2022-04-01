import React, { useState } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';

import MapComponent from '../Map/Map';
import { Tabs } from '@mantine/core';

interface SaveProps extends convert.Element {
  children?: React.ReactNode,
}

const SaveComponent: React.FC<SaveProps> = (props) => {
  console.log('SaveComponent');
  const [name, setName] = useState(props.name);
  const [maps, setMaps] = useState<convert.Element[]>(
    findEl(props, ['game', 'maps'])?.elements ?? [] as convert.Element[]
  );
  console.dir(maps);
  return (
    <Tabs>
      {maps.map((map) => {
        return (
          <Tabs.Tab key={uuidv4()}>
            <MapComponent key={uuidv4()} {...map} />
          </Tabs.Tab>
        );
      })}
    </Tabs>
  );
};

export default SaveComponent;
