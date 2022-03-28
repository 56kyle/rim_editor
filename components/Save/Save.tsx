import { stringify } from 'querystring';
import React, { useState, useEffect, useCallback } from 'react';
import convert from 'xml-js';
import { asXMLComponent, XMLElement } from '../XMLElement/XMLElement';

interface SaveProps {
  initialElement: convert.Element,
  children?: React.ReactNode,
}

const SaveComponent: React.FC<SaveProps> = ({ initialElement, children }) => {
  return <>
    {asXMLComponent(initialElement)}
  </>;
};

export default SaveComponent;
