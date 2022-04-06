import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';

export const asStates = (props: convert.Element) => {
  let lines: string[] = [];
  if (props.elements) {
    lines = props.elements.map((el: convert.Element) => {
      if (el.type === 'element') {
        return `  const [${asStateName(el)}, ${asStateSetterName(el)}] = useState<convert.Element>(findEl(props, '${camelName(el)}') as convert.Element);`;
      }
      return '  const [value, setValue] = useState<string>(findElText(props));';
    });
  }
  return lines.join('\n');
};
