import React, { useCallback, useEffect, useState } from 'react';
import convert from 'xml-js';
import { v4 as uuidv4 } from 'uuid';
import { existsSync } from 'fs';

import { Button, Grid, Text } from '@mantine/core';

import { useUuid } from '@mantine/hooks';
import { preProcessFile } from 'typescript';
import { LineDashed } from 'tabler-icons-react';
import { findEl, findElText } from '../Utils/Utils';
import NameComponent from '../Name/Name';
import { saveFile } from '../Generate/File';

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

const PawnComponent: React.FC<PawnProps> = (props) => {
    //console.log('PawnComponent');
    //console.dir(props);
    const [defElement, setDefElement] = useState<convert.Element>(findEl(props, 'def') as convert.Element);
    const [idElement, setIdElement] = useState<convert.Element>(findEl(props, 'id') as convert.Element);
    const [mapElement, setMapElement] = useState<convert.Element>(findEl(props, 'map') as convert.Element);
    const [posElement, setPosElement] = useState<convert.Element>(findEl(props, 'pos') as convert.Element);
    const [rotElement, setRotElement] = useState<convert.Element>(findEl(props, 'rot') as convert.Element);
    const [factionElement, setFactionElement] = useState<convert.Element>(findEl(props, 'faction') as convert.Element);
    const [questTagsElement, setQuestTagsElement] = useState<convert.Element>(findEl(props, 'questTags') as convert.Element);
    const [kindDefElement, setKindDefElement] = useState<convert.Element>(findEl(props, 'kindDef') as convert.Element);
    const [nameElement, setNameElement] = useState<convert.Element>(findEl(props, 'name') as convert.Element);
    const [mindStateElement, setMindStateElement] = useState<convert.Element>(findEl(props, 'mindState') as convert.Element);
    const [jobsElement, setJobsElement] = useState<convert.Element>(findEl(props, 'jobs') as convert.Element);
    const [stancesElement, setStancesElement] = useState<convert.Element>(findEl(props, 'stances') as convert.Element);
    const [verbTrackerElement, setVerbTrackerElement] = useState<convert.Element>(findEl(props, 'verbTracker') as convert.Element);
    const [nativesElement, setNativesElement] = useState<convert.Element>(findEl(props, 'natives') as convert.Element);
    const [meleeVerbsElement, setMeleeVerbsElement] = useState<convert.Element>(findEl(props, 'meleeVerbs') as convert.Element);
    const [rotationTrackerElement, setRotationTrackerElement] = useState<convert.Element>(findEl(props, 'rotationTracker') as convert.Element);
    const [patherElement, setPatherElement] = useState<convert.Element>(findEl(props, 'pather') as convert.Element);
    const [carryTrackerElement, setCarryTrackerElement] = useState<convert.Element>(findEl(props, 'carryTracker') as convert.Element);
    const [apparelElement, setApparelElement] = useState<convert.Element>(findEl(props, 'apparel') as convert.Element);
    const [storyElement, setStoryElement] = useState<convert.Element>(findEl(props, 'story') as convert.Element);
    const [equipmentElement, setEquipmentElement] = useState<convert.Element>(findEl(props, 'equipment') as convert.Element);
    const [drafterElement, setDrafterElement] = useState<convert.Element>(findEl(props, 'drafter') as convert.Element);
    const [ageTrackerElement, setAgeTrackerElement] = useState<convert.Element>(findEl(props, 'ageTracker') as convert.Element);
    const [healthTrackerElement, setHealthTrackerElement] = useState<convert.Element>(findEl(props, 'healthTracker') as convert.Element);
    const [recordsElement, setRecordsElement] = useState<convert.Element>(findEl(props, 'records') as convert.Element);
    const [inventoryElement, setInventoryElement] = useState<convert.Element>(findEl(props, 'inventory') as convert.Element);
    const [filthElement, setFilthElement] = useState<convert.Element>(findEl(props, 'filth') as convert.Element);
    const [ropingElement, setRopingElement] = useState<convert.Element>(findEl(props, 'roping') as convert.Element);
    const [needsElement, setNeedsElement] = useState<convert.Element>(findEl(props, 'needs') as convert.Element);
    const [guestElement, setGuestElement] = useState<convert.Element>(findEl(props, 'guest') as convert.Element);
    const [guiltElement, setGuiltElement] = useState<convert.Element>(findEl(props, 'guilt') as convert.Element);
    const [royaltyElement, setRoyaltyElement] = useState<convert.Element>(findEl(props, 'royalty') as convert.Element);
    const [socialElement, setSocialElement] = useState<convert.Element>(findEl(props, 'social') as convert.Element);
    const [psychicEntropyElement, setPsychicEntropyElement] = useState<convert.Element>(findEl(props, 'psychicEntropy') as convert.Element);
    const [ownershipElement, setOwnershipElement] = useState<convert.Element>(findEl(props, 'ownership') as convert.Element);
    const [interactionsElement, setInteractionsElement] = useState<convert.Element>(findEl(props, 'interactions') as convert.Element);
    const [skillsElement, setSkillsElement] = useState<convert.Element>(findEl(props, 'skills') as convert.Element);
    const [abilitiesElement, setAbilitiesElement] = useState<convert.Element>(findEl(props, 'abilities') as convert.Element);
    const [ideoElement, setIdeoElement] = useState<convert.Element>(findEl(props, 'ideo') as convert.Element);
    const [workSettingsElement, setWorkSettingsElement] = useState<convert.Element>(findEl(props, 'workSettings') as convert.Element);
    const [traderElement, setTraderElement] = useState<convert.Element>(findEl(props, 'trader') as convert.Element);
    const [outfitsElement, setOutfitsElement] = useState<convert.Element>(findEl(props, 'outfits') as convert.Element);
    const [drugsElement, setDrugsElement] = useState<convert.Element>(findEl(props, 'drugs') as convert.Element);
    const [foodRestrictionElement, setFoodRestrictionElement] = useState<convert.Element>(findEl(props, 'foodRestriction') as convert.Element);
    const [timetableElement, setTimetableElement] = useState<convert.Element>(findEl(props, 'timetable') as convert.Element);
    const [playerSettingsElement, setPlayerSettingsElement] = useState<convert.Element>(findEl(props, 'playerSettings') as convert.Element);
    const [trainingElement, setTrainingElement] = useState<convert.Element>(findEl(props, 'training') as convert.Element);
    const [styleElement, setStyleElement] = useState<convert.Element>(findEl(props, 'style') as convert.Element);
    const [styleObserverElement, setStyleObserverElement] = useState<convert.Element>(findEl(props, 'styleObserver') as convert.Element);
    const [connectionsElement, setConnectionsElement] = useState<convert.Element>(findEl(props, 'connections') as convert.Element);
    const [inventoryStockElement, setInventoryStockElement] = useState<convert.Element>(findEl(props, 'inventoryStock') as convert.Element);
    const [treeSightingsElement, setTreeSightingsElement] = useState<convert.Element>(findEl(props, 'treeSightings') as convert.Element);

    //const [nameElement, setNameElement] = useState<convert.Element>(findEl(props, 'name') as convert.Element);
    //const [ageTrackerElement, setAgeTrackerElement] = useState<convert.Element>(findEl(props, 'ageTracker') as convert.Element);
    //const [healthTrackerElement, setHealthTrackerElement] = useState<convert.Element>(findEl(props, 'healthTracker') as convert.Element);
    //const [factionElement, setFactionElement] = useState<convert.Element>(findEl(props, 'faction') as convert.Element);
    //const [skillsElement, setSkillsElement] = useState<convert.Element>(findEl(props, 'skills') as convert.Element);
    //const [storyElement, setStoryElement] = useState<convert.Element>(findEl(props, 'story') as convert.Element);
    //getStates(props);
    //useEffect(() => {
    //}, [nameElement]);
    //console.log('recurse print - ');
    //recursePrint(props, 0);

    return (
        <Grid key={useUuid()}>
            <Grid.Col key={useUuid()} span={3}>
                <NameComponent onChange={setNameElement} {...nameElement as convert.Element} />
            </Grid.Col>
            <Grid.Col key={useUuid()} span={6} offset={3}>
                <Text>Sample Text</Text>
                <Button onClick={() => saveFile(props)} >
                    <Text>Save Pawn</Text>
                </Button>
            </Grid.Col>
        </Grid>
    );
};

export default PawnComponent;
export { getNameString };
