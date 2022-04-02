import React, { useState, useRef } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';

import { Grid, Tab, Tabs } from '@mantine/core';
import PawnComponent, { getNameString } from '../Pawn/Pawn';
import { useUuid } from '@mantine/hooks';
import { Box } from '@mantine/core'

interface MapProps extends convert.Element {
    children?: React.ReactNode,
}


const MapComponent: React.FC<MapProps> = (props) => {
    console.log('MapComponent');
    console.dir(props);
    const [name, setName] = useState(props.name);
    const [pawns, setPawns] = useState<convert.Element[]>(
        findEl(props, 'things')?.elements?.filter((element: convert.Element) => findElText(findEl(element, 'kindDef')) === 'Colonist')
    );

    const [activeTab, setActiveTab] = useState<number>(0);

    return (
        <Tabs active={activeTab} onTabChange={setActiveTab} orientation='vertical'>
            {pawns.map((pawn) => (
                <Tabs.Tab label={getNameString(pawn)}>
                    <PawnComponent {...pawn} />
                </Tabs.Tab>
            ))}
        </Tabs>
    );
};


export default MapComponent;
