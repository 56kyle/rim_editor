


import React, { useState, useEffect, useCallback, CompositionEventHandler } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';


interface ListProps extends convert.Element {
    children?: React.ReactNode,
}


const ListComponent: React.FC<ListProps> = (props) => {
    const [elements, setElements] = useState<convert.Element[]>(props.elements as convert.Element[]);

    const updateElement = useCallback((el: convert.Element) => {


    }, [elements, setElements])

}


