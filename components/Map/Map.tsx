import React, { useState } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';

import PawnComponent, { getPawnID } from '../Pawn/Pawn';

interface MapProps extends convert.Element {
    children?: React.ReactNode,
}

const getMapID = (map: MapProps): string => findElText(findEl(map, 'uniqueID')) as string ?? uuidv4();

const MapComponent: React.FC<MapProps> = (props) => {
    console.log('MapComponent');
    console.dir(props);
    const id = getMapID(props);
    const [name, setName] = useState(props.name);
    const [pawns, setPawns] = useState<convert.Element[]>(
        findEl(props, 'things')?.elements?.filter((element: convert.Element) => findElText(findEl(element, 'kindDef')) === 'Colonist')
    );
    return (
        <div>
            <p>Map Component</p>
            {pawns.map((pawn) => (
                <PawnComponent key={getPawnID(pawn)} {...pawn} />
            ))}
        </div>
    );
};

export default MapComponent;
export { getMapID };
