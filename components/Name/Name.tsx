import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

import { Group, Text, TextInput } from '@mantine/core';

import { findEl, findElText } from '../Utils/Utils';

interface NameProps extends convert.Element {
    onChange: (name: convert.Element) => void,
    children?: React.ReactNode,
}

const NamePortionComponent: React.FC<NameProps> = (props) => {
    console.log('');
    const [nameValue, setNameValue] = useState(findElText(props) as string);
    useEffect(() => {
        props.onChange({
            text: nameValue,
            ...props,
        });
    }, [nameValue, setNameValue]);

    return (
        <TextInput
          value={nameValue}
          onChange={(e) => {
              setNameValue(e.target.value);
          }}
        />
    );
};

const NameComponent: React.FC<NameProps> = (props) => {
    //console.log('NameComponent');
    //console.dir(props);
    const [first, setFirst] = useState<convert.Element>(findEl(props, 'first') as convert.Element);
    const [nick, setNick] = useState<convert.Element>(findEl(props, 'nick') as convert.Element);
    const [last, setLast] = useState<convert.Element>(findEl(props, 'last') as convert.Element);

    return (
        <Group>
            <NamePortionComponent onChange={setFirst} {...first} />
            <NamePortionComponent onChange={setNick} {...nick} />
            <NamePortionComponent onChange={setLast} {...last} />
        </Group>
    );
};

export default NameComponent;
