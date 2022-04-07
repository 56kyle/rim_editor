import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName, asFileContents } from './Name';

export const asComponentRefs = (props: convert.Element) => {
  const lines: string[] = [];
  props.elements?.forEach((el: convert.Element) => {
    if (el.type === 'element') {
      lines.push(`      <${asComponentName(el)} key={uuidv4()} onChange={${asStateSetterName(el)}} {...${asStateName(el)}} />`);
    } else {
      lines.push('      <TextInput');
      lines.push('        value={value}');
      lines.push('        onChange={(e) => {');
      lines.push('          setValue(e.target.value);');
      lines.push('        }}');
      lines.push('      />');
    }
  });
  return lines.join('\n');
};
