import { stringify } from 'querystring';
import React, { useState, useEffect, useCallback } from 'react';
import convert from 'xml-js';
import { useXMLElement, XMLElement } from '../Element/Element';

interface SaveProps {
  initialElement: convert.Element,
  children?: React.ReactNode,
}

const SaveComponent: React.FC<SaveProps> = ({ initialElement, children }) => {
  const xmlElement = useXMLElement(initialElement);
  const [element, setElement] = useState<XMLElement>(xmlElement);
  console.log('element - ', element);
  return (
    <>
      {children}
    </>
  );
};

export default SaveComponent;
