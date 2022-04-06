import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { asComponent } from './Component';
import { asExport } from './Export';
import { asImports } from './Imports';
import { asInterface } from './Interface';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName } from './Name';
import { saveAs } from 'file-saver';

export const asFileString = (props: convert.Element) => {
  const lines: string[] = [
    asImports(props),
    '',
    '',
    asInterface(props),
    '',
    asComponent(props),
    '',
    '',
    asExport(props),
    '',
  ];
  return lines.join('\n');
};

export const asFile = (props: convert.Element) => new File([asFileString(props)], `${pascalName(props)}.tsx`, { type: 'text/typescript' });

export const saveFile = (props: convert.Element) => {
  const file = asFile(props);
  saveAs(file);
};
