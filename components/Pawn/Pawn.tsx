import React, { useCallback, useEffect, useState } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { existsSync } from 'fs';

import { Button, Grid, Stack, Text } from '@mantine/core';

import { useUuid } from '@mantine/hooks';
import { preProcessFile } from 'typescript';
import { LineDashed } from 'tabler-icons-react';
import { findEl, findElText } from '../Utils/Utils';
import NameComponent from '../Name/Name';
import { asFile, saveFile } from '../Generate/File';
import { saveAs } from 'file-saver';

interface PawnProps extends convert.Element {
    children?: React.ReactNode,
}

const getNameString = (props: convert.Element) => {
    const nameElement = findEl(props, 'name') as convert.Element;
    const first = findElText(findEl(nameElement, 'first')) as string;
    const nick = findElText(findEl(nameElement, 'nick')) as string;
    const last = findElText(findEl(nameElement, 'last')) as string;
    return first + nick + last;
};

const recursePrint = (props: convert.Element, indent: number) => {
    if (props.type === 'element') {
        console.log(' '.repeat(indent) + props.name);
    } else {
        console.log(' '.repeat(indent) + props.text);
    }
    if (props.elements) {
        props.elements.forEach((element) => {
            recursePrint(element, indent + 2);
        });
    }
};

const recurseDownload = (props: convert.Element) => {
    console.log('recurseDownload');
    console.dir(props);
    if (props.type === 'element') {
        props.elements?.forEach(recurseDownload);
        saveFile(props);
    }
};

const getFiles = (props: convert.Element): File[] => {
    console.log('getFiles');
    const files: File[] = [];
    if (props.type === 'element') {
        files.push(asFile(props));
        props.elements?.forEach((el: convert.Element) => {
            getFiles(el).forEach((file) => {
                files.push(file);
            });
        });
    }
    return files;
};

const PawnComponent: React.FC<PawnProps> = (props) => {
    //console.log('PawnComponent');
    //console.dir(props);
    const [nameElement, setNameElement] = useState<convert.Element>(findEl(props, 'name') as convert.Element);
    const [ageTrackerElement, setAgeTrackerElement] = useState<convert.Element>(findEl(props, 'ageTracker') as convert.Element);
    const [healthTrackerElement, setHealthTrackerElement] = useState<convert.Element>(findEl(props, 'healthTracker') as convert.Element);
    const [factionElement, setFactionElement] = useState<convert.Element>(findEl(props, 'faction') as convert.Element);
    const [skillsElement, setSkillsElement] = useState<convert.Element>(findEl(props, 'skills') as convert.Element);
    const [storyElement, setStoryElement] = useState<convert.Element>(findEl(props, 'story') as convert.Element);

    return (
        <Grid key={useUuid()}>
            <Grid.Col key={useUuid()} span={3}>
                <NameComponent onChange={setNameElement} {...nameElement as convert.Element} />
            </Grid.Col>
            <Grid.Col key={useUuid()} span={6} offset={3}>
                <Text>Sample Text</Text>
                <Stack>
                    {getFiles(props).map((file) => <Button onClick={() => {saveAs(file)}}>{file.name}</Button>)}
                </Stack>
                <Button onClick={() => recurseDownload(props)}>
                    <Text>Save Pawn</Text>
                </Button>
            </Grid.Col>
        </Grid>
    );
};

export default PawnComponent;
export { getNameString };
