import React, { useState, useCallback, useMemo } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

import { Accordion, AccordionItem, Text } from '@mantine/core';

interface XMLElementProps extends convert.Element {
  children?: React.ReactNode,
}

const asXMLComponent = (element: convert.Element): React.ReactNode => {
    const getChildren = useCallback(
        (): React.ReactNode => element.elements ? element.elements.map(asXMLComponent) : null, []);
    return <XMLElement key={uuidv4()} {...element}> {getChildren()} </XMLElement>;
};

const XMLElement: React.FC<XMLElementProps> = (props) => {
    const [name, setName] = useState<string>(props.name ?? '');
    const [type, setType] = useState<string>(props.type ?? '');
    const [text, setText] = useState<number | string | boolean>(props.text ?? '');
    const [elements, setElements] = useState<XMLElementProps[]>(props.elements ?? []);

    const asJS = useMemo(() => ({
            name,
            type,
            text,
            elements: elements.map((element) => element as convert.Element),
            ...props,
        } as convert.Element), [name, type, text, elements, props]);

    return (
        <Accordion multiple>
            <AccordionItem label={name}>
                {props.elements?.map((el) => asXMLComponent(el))}
            </AccordionItem>
        </Accordion>
    );
};

export { XMLElement, asXMLComponent };
