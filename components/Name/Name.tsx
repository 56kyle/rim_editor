import React, { useState } from 'react';
import convert from 'xml-js';

import { Group, Text } from '@mantine/core';

import { findEl, findElText } from '../Utils/Utils';

interface NameProps extends convert.Element {
    children?: React.ReactNode,
}

const NameComponent: React.FC<NameProps> = (props) => {
    const [first, setFirst] = useState(findElText(findEl(props, 'first')));
    const [nick, setNick] = useState(findElText(findEl(props, 'nick')));
    const [last, setLast] = useState(findElText(findEl(props, 'last')));

    return (
        <Group>
            <Text>
                {first}
            </Text>
            <Text>
                {nick}
            </Text>
            <Text>
                {last}
            </Text>
        </Group>
    );
};

export default NameComponent;
