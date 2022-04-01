import React from 'react';
import convert from 'xml-js';
import ElementComponent from '../Element/Element';

interface SaveProps {
  initialElement: convert.Element,
  children?: React.ReactNode,
}

const SaveComponent: React.FC<SaveProps> = ({ initialElement, children }) => (
  <ElementComponent {...initialElement}>{children}</ElementComponent>
);

export default SaveComponent;
