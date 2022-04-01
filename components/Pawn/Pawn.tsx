
import React, { useState } from 'react';
import convert from 'xml-js';

import { Grid, Text } from '@mantine/core';

import { findEl, findElText } from '../Utils/Utils';
import NameComponent from '../Name/Name';

interface PawnProps extends convert.Element {
    children?: React.ReactNode,
}


const PawnComponent: React.FC<PawnProps> = (props) => {
    console.log('PawnComponent');
    console.dir(props);
    const nameElement = findEl(props, 'name') as convert.Element;

    return (
        <Grid>
            <Grid.Col span={3}>
                <NameComponent {...nameElement} />
            </Grid.Col>
            <Grid.Col span={6} offset={3}>
                <Text>Sample Text</Text>
            </Grid.Col>
        </Grid>

    );
}


export default PawnComponent;
