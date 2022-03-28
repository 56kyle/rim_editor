
import React, { useState, useRef, useCallback } from 'react';
import convert from 'xml-js';
import {v4 as uuidv4} from 'uuid';

import { ActionIcon, Checkbox, CheckboxProps } from '@mantine/core';
import { LayoutSidebarRightExpand } from 'tabler-icons-react';


interface XMLElementProps extends convert.Element {
  children?: React.ReactNode,
}

const asXMLComponent = (element: convert.Element): React.ReactNode => {
    const getChildren = useCallback((): React.ReactNode => {
        return element.elements ? element.elements.map(asXMLComponent) : null;
    }, [])
    return <XMLElement key={uuidv4()} {...element}> {getChildren()} </XMLElement>
}

const foldedIcon: CheckboxProps['icon'] = ({indeterminate, className}) => {
    return (
        <LayoutSidebarRightExpand size={16}/>
    );
}

const XMLElement: React.FC<XMLElementProps> = (props) => {
    const [name, setName] = useState<string>(props.name ?? '');
    const [type, setType] = useState<string>(props.type ?? '');
    const [text, setText] = useState<number | string | boolean>(props.text ?? '');

    const [folded, setFolded] = useState<boolean>(false);

    const asJS = useCallback(() => {
        return {
            name: name,
            type: type,
            text: text,
            elements: Array.isArray(props.children) ? props.children.map((child) => child.asJS()) : [] as convert.Element[],
            ...props
        } as convert.Element
    }, [])

    return (
        <div>
            <label>{name}</label>
            <span>
                <Checkbox icon={foldedIcon} checked={folded} onChange={(event) => setFolded(event.currentTarget.checked)}/>
            </span>
            <span>
                {folded ? props.children : null}
            </span>
        </div>
    );
}

export { XMLElement, asXMLComponent }; 

