import { useState, useEffect, useCallback } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';

interface XMLElement extends convert.Element {
    id: string,
    elements: XMLElement[],
    onChange?: (childElement: XMLElement) => void,
}

function useXMLElement(
    parentElement: convert.Element,
    onChange?: (childElement: XMLElement) => void
    ): XMLElement {
    const [element, setElement] = useState<XMLElement>({
        id: uuidv4(),
        elements: parentElement.elements?.map((el: convert.Element) => useXMLElement(el)) ?? [] as XMLElement[],
        onChange: undefined,
        ...parentElement,
    } as XMLElement);

    const handleChange = useCallback((childElement: XMLElement) => {
        setElement(currentElement => {
            const newChildElements: XMLElement[] = currentElement.elements.filter(
                (el: XMLElement) => el.id !== childElement.id);
            return ({
                ...currentElement,
                elements: [childElement, ...newChildElements],
            });
        });
    }, [setElement]);

    useEffect(() => {
        console.log('onChange', element);
        if (onChange) {
            onChange(element);
        }
    }, [element, onChange]);

    if (parentElement.elements) {
    }

    return newElement
}

export { useXMLElement };
export type { XMLElement };
