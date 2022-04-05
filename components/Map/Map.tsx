import React, { useState, useRef, useCallback } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { Box, Grid, Tab, Tabs, TabsProps, Text } from '@mantine/core';
import { useUuid } from '@mantine/hooks';
import { findEl, findElText } from '../Utils/Utils';

import PawnComponent, { getNameString } from '../Pawn/Pawn';

interface MapProps extends convert.Element {
    children?: React.ReactNode,
}
const fakePawns: convert.Element[] = [
    {
        name: 'foo',
        type: 'element',
        elements: [
            {
                name: 'name',
            },
        ],
    },
];

const MapComponent: React.FC<MapProps> = (props) => {
    //console.log('MapComponent');
    //console.dir(props);
    const [name, setName] = useState(props.name);
    const [pawns, setPawns] = useState<convert.Element[]>(
        findEl(props, 'things')?.elements?.filter((element: convert.Element) => findElText(findEl(element, 'kindDef')) === 'Colonist')
    );
    console.log('MapComponent - pawns: ');
    console.dir(pawns);

    const [activeTab, setActiveTab] = useState<number>();

    const handleTabChange = useCallback((tabIndex: number, tabKey?: string | undefined) => {
        console.log('handleTabChange - ');
        console.log('\tprops:');
        console.dir(props);
        setActiveTab(tabIndex);
    }, [setActiveTab, props]);

    return (
        <Tabs active={activeTab} onTabChange={handleTabChange} orientation="vertical">
            {pawns.map((pawn) => (
                <Tabs.Tab key={uuidv4()} label={getNameString(pawn)}>
                    <PawnComponent key={uuidv4()} {...pawn} />
                </Tabs.Tab>
            ))}
        </Tabs>
    );
};

export default MapComponent;
