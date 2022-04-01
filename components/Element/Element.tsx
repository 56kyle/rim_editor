import React from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

import { Accordion, AccordionItem, Text } from '@mantine/core';

interface ElementProps extends convert.Element {
    id: string;
}

const ElementComponent: React.FC<ElementProps> = (props) => (
        <Accordion>
            {props.text ? <Text>{props.text}</Text> : null}
            {props.elements?.map((element: convert.Element) => {
                const id = uuidv4();
                return (
                    <AccordionItem label={element.name}>
                        <ElementComponent key={id} id={id} {...element} />
                    </AccordionItem>
                );
            })}
        </Accordion>
    );

export default ElementComponent;
