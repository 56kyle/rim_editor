import React, { useState, useContext, useEffect } from 'react';
import convert from 'xml-js';

interface SaveProps {
  id: string,
  children?: React.ReactNode,
}

const saveContext = React.createContext<SaveProps>({ id: '' });
const SaveComponent: React.FC = () => {
  useContext(SaveContext);
  useEffect(
    () => {

    },
    []
  );

  return (
    <>
      {children}
    </>
  );
};
