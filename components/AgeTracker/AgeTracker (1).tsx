import React, { useState, useEffect } from 'react';
import convert from 'xml-js';
import { Group, Text, TextInput } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';
import { findEl, findElText } from '../Utils/Utils';
import AgeBiologicalTicksComponent from './AgeBiologicalTicks';
import BirthAbsTicksComponent from './BirthAbsTicks';
import GrowthComponent from './Growth';
import NextGrowthCheckTickComponent from './NextGrowthCheckTick';
import AgeReversalDemandedAtAgeTicksComponent from './AgeReversalDemandedAtAgeTicks';
import InitializedAgeReversalDemandComponent from './InitializedAgeReversalDemand';

interface AgeTrackerProps extends convert.Element {
  onChange: (props: convert.Element) => void,
  children?: React.ReactNode,
}

const AgeTrackerComponent: React.FC<AgeTrackerProps> = (props: AgeTrackerProps) => {
  const [ageBiologicalTicksElement, setAgeBiologicalTicksElement] = useState<convert.Element>(findEl(props, 'ageBiologicalTicks') as convert.Element);
  const [birthAbsTicksElement, setBirthAbsTicksElement] = useState<convert.Element>(findEl(props, 'birthAbsTicks') as convert.Element);
  const [growthElement, setGrowthElement] = useState<convert.Element>(findEl(props, 'growth') as convert.Element);
  const [nextGrowthCheckTickElement, setNextGrowthCheckTickElement] = useState<convert.Element>(findEl(props, 'nextGrowthCheckTick') as convert.Element);
  const [ageReversalDemandedAtAgeTicksElement, setAgeReversalDemandedAtAgeTicksElement] = useState<convert.Element>(findEl(props, 'ageReversalDemandedAtAgeTicks') as convert.Element);
  const [initializedAgeReversalDemandElement, setInitializedAgeReversalDemandElement] = useState<convert.Element>(findEl(props, 'initializedAgeReversalDemand') as convert.Element);
  useEffect(() => {
    props.onChange({
      elements: [
        ageBiologicalTicksElement,
        birthAbsTicksElement,
        growthElement,
        nextGrowthCheckTickElement,
        ageReversalDemandedAtAgeTicksElement,
        initializedAgeReversalDemandElement,
      ],
      ...props,
    });
  }, [ageBiologicalTicksElement, birthAbsTicksElement, growthElement, nextGrowthCheckTickElement, ageReversalDemandedAtAgeTicksElement, initializedAgeReversalDemandElement, props]);
  return (
    <Group>
      <AgeBiologicalTicksComponent key={uuidv4()} onChange={setAgeBiologicalTicksElement} {...ageBiologicalTicksElement} />
      <BirthAbsTicksComponent key={uuidv4()} onChange={setBirthAbsTicksElement} {...birthAbsTicksElement} />
      <GrowthComponent key={uuidv4()} onChange={setGrowthElement} {...growthElement} />
      <NextGrowthCheckTickComponent key={uuidv4()} onChange={setNextGrowthCheckTickElement} {...nextGrowthCheckTickElement} />
      <AgeReversalDemandedAtAgeTicksComponent key={uuidv4()} onChange={setAgeReversalDemandedAtAgeTicksElement} {...ageReversalDemandedAtAgeTicksElement} />
      <InitializedAgeReversalDemandComponent key={uuidv4()} onChange={setInitializedAgeReversalDemandElement} {...initializedAgeReversalDemandElement} />
    </Group>
  );
};

export default AgeTrackerComponent;
