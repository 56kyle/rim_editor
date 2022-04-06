import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';

export const asInterface = (props: convert.Element) => {
  const lines: string[] = [
    `export interface ${asPropsName(props)} extends convert.Element {`,
    '  onChange: (props: convert.Element) => void;',
    '  children?: React.ReactNode;',
    '}',
  ];
  return lines.join('\n');
};
