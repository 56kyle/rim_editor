import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';

export const asImports = (props: convert.Element) => {
  let lines: string[] = props.elements?.map((el: convert.Element) => `import { ${asComponentName(el)} } from './${pascalName(el)}';`) ?? [] as string[];
  lines = [
    'import React, { useState, useEffect } from \'react\';',
    'import convert from \'xml-js\';',
    'import { findEl, findElText } from \'../Utils/Utils\';',
    'import { Group, Text } from \'@mantine/core\';',
    'import { v4 as uuidv4 } from \'uuid\';',
    ...lines,
  ];
  return lines.join('\n');
};
