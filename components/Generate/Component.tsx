import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { asComponentRefs } from './ComponentRefs';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName, asFileContents } from './Name';

import { asStates } from './States';


const asGroup = (props: convert.Element) => [
    '    <Group>',
    asComponentRefs(props),
    '    </Group>',
  ].join('\n');


export const asComponent = (props: convert.Element) => {
  let lines: string[] = [];

  if (props.elements) {
    lines = [
      `const ${asComponentName(props)}: React.FC<${asPropsName(props)}> = (props: ${asPropsName(props)}) => {`,
      asStates(props),
      '  return (',
      asGroup(props),
      '  );',
      '};',
    ];
  }
  return lines.join('\n');
};
