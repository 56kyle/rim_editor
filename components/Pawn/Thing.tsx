import React, { useState, useEffect, useCallback } from 'react';
import convert from 'xml-js';
import { Group, Stack, Text, TextInput } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../../Utils/Utils';
import DefComponent from './Def/Def';
import IdComponent from './Id/Id';
import MapComponent from './Map/Map';
import PosComponent from './Pos/Pos';
import RotComponent from './Rot/Rot';
import FactionComponent from './Faction/Faction';
import QuestTagsComponent from './QuestTags/QuestTags';
import KindDefComponent from './KindDef/KindDef';
import NameComponent from './Name/Name';
import MindStateComponent from './MindState/MindState';
import JobsComponent from './Jobs/Jobs';
import StancesComponent from './Stances/Stances';
import VerbTrackerComponent from './VerbTracker/VerbTracker';
import NativesComponent from './Natives/Natives';
import MeleeVerbsComponent from './MeleeVerbs/MeleeVerbs';
import RotationTrackerComponent from './RotationTracker/RotationTracker';
import PatherComponent from './Pather/Pather';
import CarryTrackerComponent from './CarryTracker/CarryTracker';
import ApparelComponent from './Apparel/Apparel';
import StoryComponent from './Story/Story';
import EquipmentComponent from './Equipment/Equipment';
import DrafterComponent from './Drafter/Drafter';
import AgeTrackerComponent from './AgeTracker/AgeTracker';
import HealthTrackerComponent from './HealthTracker/HealthTracker';
import RecordsComponent from './Records/Records';
import InventoryComponent from './Inventory/Inventory';
import FilthComponent from './Filth/Filth';
import RopingComponent from './Roping/Roping';
import NeedsComponent from './Needs/Needs';
import GuestComponent from './Guest/Guest';
import GuiltComponent from './Guilt/Guilt';
import RoyaltyComponent from './Royalty/Royalty';
import SocialComponent from './Social/Social';
import PsychicEntropyComponent from './PsychicEntropy/PsychicEntropy';
import OwnershipComponent from './Ownership/Ownership';
import InteractionsComponent from './Interactions/Interactions';
import SkillsComponent from './Skills/Skills';
import AbilityComponent from './Ability/Ability';
import IdeoComponent from './Ideo/Ideo';
import WorkSettingsComponent from './WorkSettings/WorkSettings';
import TraderComponent from './Trader/Trader';
import OutfitsComponent from './Outfits/Outfits';
import DrugsComponent from './Drugs/Drugs';
import FoodRestrictionComponent from './FoodRestriction/FoodRestriction';
import TimetableComponent from './Timetable/Timetable';
import PlayerSettingsComponent from './PlayerSettings/PlayerSettings';
import TrainingComponent from './Training/Training';
import StyleComponent from './Style/Style';
import StyleObserverComponent from './StyleObserver/StyleObserver';
import ConnectionsComponent from './Connections/Connections';
import InventoryStockComponent from './InventoryStock/InventoryStock';
import TreeSightingsComponent from './TreeSightings/TreeSightings';

interface ThingProps extends convert.Element {
  onChange: (props: convert.Element) => void,
  children?: React.ReactNode,
}

const ThingComponent: React.FC<ThingProps> = (props: ThingProps) => {
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

  const [abilityElements, setAbilityElements] = useState<convert.Element[]>(findEl(findEl(props, 'abilities'), 'abilities').elements as convert.Element[]);

  const addAbilityElement = useCallback((abilityElement: convert.Element) => {
    setAbilityElements(abilityElements.concat(abilityElement));
  }, [abilityElements, setAbilityElements]);

  const removeAbilityElement = useCallback((abilityElement: convert.Element) => {
    setAbilityElements(
      abilityElements.filter(ability => findElText(ability) !== findElText(abilityElement))
    );
  }, [abilityElements, setAbilityElements]);

  const updateAbilityElement = useCallback((abilityElement: convert.Element) => {
    removeAbilityElement(abilityElement);
    addAbilityElement(abilityElement);
  }, [addAbilityElement, removeAbilityElement]);

  useEffect(() => {
    props.onChange({
      elements: [
        defElement,
        idElement,
        mapElement,
        posElement,
        rotElement,
        factionElement,
        questTagsElement,
        kindDefElement,
        nameElement,
        mindStateElement,
        jobsElement,
        stancesElement,
        verbTrackerElement,
        nativesElement,
        meleeVerbsElement,
        rotationTrackerElement,
        patherElement,
        carryTrackerElement,
        apparelElement,
        storyElement,
        equipmentElement,
        drafterElement,
        ageTrackerElement,
        healthTrackerElement,
        recordsElement,
        inventoryElement,
        filthElement,
        ropingElement,
        needsElement,
        guestElement,
        guiltElement,
        royaltyElement,
        socialElement,
        psychicEntropyElement,
        ownershipElement,
        interactionsElement,
        skillsElement,
        {
          name: 'abilities',
          type: 'element',
          elements: abilityElements,
        } as convert.Element,
        ideoElement,
        workSettingsElement,
        traderElement,
        outfitsElement,
        drugsElement,
        foodRestrictionElement,
        timetableElement,
        playerSettingsElement,
        trainingElement,
        styleElement,
        styleObserverElement,
        connectionsElement,
        inventoryStockElement,
        treeSightingsElement,
      ],
      ...props,
    });
  }, [defElement, idElement, mapElement, posElement, rotElement, factionElement, questTagsElement, kindDefElement, nameElement, mindStateElement, jobsElement, stancesElement, verbTrackerElement, nativesElement, meleeVerbsElement, rotationTrackerElement, patherElement, carryTrackerElement, apparelElement, storyElement, equipmentElement, drafterElement, ageTrackerElement, healthTrackerElement, recordsElement, inventoryElement, filthElement, ropingElement, needsElement, guestElement, guiltElement, royaltyElement, socialElement, psychicEntropyElement, ownershipElement, interactionsElement, skillsElement, abilitiesElement, ideoElement, workSettingsElement, traderElement, outfitsElement, drugsElement, foodRestrictionElement, timetableElement, playerSettingsElement, trainingElement, styleElement, styleObserverElement, connectionsElement, inventoryStockElement, treeSightingsElement, props]);
  return (
    <Group>
      <DefComponent key={uuidv4()} onChange={setDefElement} {...defElement} />
      <IdComponent key={uuidv4()} onChange={setIdElement} {...idElement} />
      <MapComponent key={uuidv4()} onChange={setMapElement} {...mapElement} />
      <PosComponent key={uuidv4()} onChange={setPosElement} {...posElement} />
      <RotComponent key={uuidv4()} onChange={setRotElement} {...rotElement} />
      <FactionComponent key={uuidv4()} onChange={setFactionElement} {...factionElement} />
      <QuestTagsComponent key={uuidv4()} onChange={setQuestTagsElement} {...questTagsElement} />
      <KindDefComponent key={uuidv4()} onChange={setKindDefElement} {...kindDefElement} />
      <NameComponent key={uuidv4()} onChange={setNameElement} {...nameElement} />
      <MindStateComponent key={uuidv4()} onChange={setMindStateElement} {...mindStateElement} />
      <JobsComponent key={uuidv4()} onChange={setJobsElement} {...jobsElement} />
      <StancesComponent key={uuidv4()} onChange={setStancesElement} {...stancesElement} />
      <VerbTrackerComponent key={uuidv4()} onChange={setVerbTrackerElement} {...verbTrackerElement} />
      <NativesComponent key={uuidv4()} onChange={setNativesElement} {...nativesElement} />
      <MeleeVerbsComponent key={uuidv4()} onChange={setMeleeVerbsElement} {...meleeVerbsElement} />
      <RotationTrackerComponent key={uuidv4()} onChange={setRotationTrackerElement} {...rotationTrackerElement} />
      <PatherComponent key={uuidv4()} onChange={setPatherElement} {...patherElement} />
      <CarryTrackerComponent key={uuidv4()} onChange={setCarryTrackerElement} {...carryTrackerElement} />
      <ApparelComponent key={uuidv4()} onChange={setApparelElement} {...apparelElement} />
      <StoryComponent key={uuidv4()} onChange={setStoryElement} {...storyElement} />
      <EquipmentComponent key={uuidv4()} onChange={setEquipmentElement} {...equipmentElement} />
      <DrafterComponent key={uuidv4()} onChange={setDrafterElement} {...drafterElement} />
      <AgeTrackerComponent key={uuidv4()} onChange={setAgeTrackerElement} {...ageTrackerElement} />
      <HealthTrackerComponent key={uuidv4()} onChange={setHealthTrackerElement} {...healthTrackerElement} />
      <RecordsComponent key={uuidv4()} onChange={setRecordsElement} {...recordsElement} />
      <InventoryComponent key={uuidv4()} onChange={setInventoryElement} {...inventoryElement} />
      <FilthComponent key={uuidv4()} onChange={setFilthElement} {...filthElement} />
      <RopingComponent key={uuidv4()} onChange={setRopingElement} {...ropingElement} />
      <NeedsComponent key={uuidv4()} onChange={setNeedsElement} {...needsElement} />
      <GuestComponent key={uuidv4()} onChange={setGuestElement} {...guestElement} />
      <GuiltComponent key={uuidv4()} onChange={setGuiltElement} {...guiltElement} />
      <RoyaltyComponent key={uuidv4()} onChange={setRoyaltyElement} {...royaltyElement} />
      <SocialComponent key={uuidv4()} onChange={setSocialElement} {...socialElement} />
      <PsychicEntropyComponent key={uuidv4()} onChange={setPsychicEntropyElement} {...psychicEntropyElement} />
      <OwnershipComponent key={uuidv4()} onChange={setOwnershipElement} {...ownershipElement} />
      <InteractionsComponent key={uuidv4()} onChange={setInteractionsElement} {...interactionsElement} />
      <SkillsComponent key={uuidv4()} onChange={setSkillsElement} {...skillsElement} />
      <Stack>
        {
          abilityElements.map((abilityElement: convert.Element) => (
            <AbilityComponent key={uuidv4()} onChange={updateAbilityElement} {...abilityElement} />
          ))
        }
      </Stack>
      <IdeoComponent key={uuidv4()} onChange={setIdeoElement} {...ideoElement} />
      <WorkSettingsComponent key={uuidv4()} onChange={setWorkSettingsElement} {...workSettingsElement} />
      <TraderComponent key={uuidv4()} onChange={setTraderElement} {...traderElement} />
      <OutfitsComponent key={uuidv4()} onChange={setOutfitsElement} {...outfitsElement} />
      <DrugsComponent key={uuidv4()} onChange={setDrugsElement} {...drugsElement} />
      <FoodRestrictionComponent key={uuidv4()} onChange={setFoodRestrictionElement} {...foodRestrictionElement} />
      <TimetableComponent key={uuidv4()} onChange={setTimetableElement} {...timetableElement} />
      <PlayerSettingsComponent key={uuidv4()} onChange={setPlayerSettingsElement} {...playerSettingsElement} />
      <TrainingComponent key={uuidv4()} onChange={setTrainingElement} {...trainingElement} />
      <StyleComponent key={uuidv4()} onChange={setStyleElement} {...styleElement} />
      <StyleObserverComponent key={uuidv4()} onChange={setStyleObserverElement} {...styleObserverElement} />
      <ConnectionsComponent key={uuidv4()} onChange={setConnectionsElement} {...connectionsElement} />
      <InventoryStockComponent key={uuidv4()} onChange={setInventoryStockElement} {...inventoryStockElement} />
      <TreeSightingsComponent key={uuidv4()} onChange={setTreeSightingsElement} {...treeSightingsElement} />
    </Group>
  );
};

export default ThingComponent;
