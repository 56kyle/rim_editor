
import React, { useState, useEffect, useCallback } from 'react';
import convert from 'xml-js';
import {v4 as uuidv4} from 'uuid';


interface XMLElement extends convert.Element {
    id: string,
    elements: XMLElement[],
    onChange?: (childElement: XMLElement) => void,
}

function useXMLElement(parentElement: convert.Element, onChange?: (childElement: XMLElement) => void): XMLElement {
    const [element, setElement] = useState<XMLElement>({} as XMLElement);

    useEffect(() => {
        if (onChange) {
            onChange(element);
        }
    }, [element, onChange])

    const handleChange = useCallback((childElement: XMLElement) => {
        setElement((currentElement: XMLElement) => {
            let newChildElements: XMLElement[] = currentElement.elements.filter((el: XMLElement) => el.id !== childElement.id);

            return ({
                ...currentElement,
                elements: [childElement, ...newChildElements],
            });
        });
    }, [setElement]);

    let newElement: XMLElement = {
        id: uuidv4(),
        elements: [] as XMLElement[],
        onChange: handleChange,
        ...parentElement
    } as XMLElement;

    if (parentElement.elements) {
        newElement.elements = parentElement.elements.map((el: convert.Element) => useXMLElement(el))
    }

    return newElement
}


export { useXMLElement };
export type { XMLElement };
