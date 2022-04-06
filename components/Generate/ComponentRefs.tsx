import React, { useState, useCallback, useRef, useEffect } from 'react';
import convert from 'xml-js';
import { findEl, findElText } from '../Utils/Utils';
import { pascalName, camelName, asComponentName, asPropsName, asStateName, asStateSetterName, asFileContents } from './Name';


export const asComponentRefs = (props: convert.Element) => {
  const lines = props.elements?.map((el: convert.Element) => `      <${asComponentName(el)} key={uuidv4()} onChange={${asStateSetterName(el)}} {...${asStateName(el)}} />`) ?? [] as string[];
  return lines.join('\n');
};
