import convert from 'xml-js';

export function findEl(
  this: convert.Element | undefined, name: string
  ): convert.Element | undefined {
  if (this && this.elements) {
    return this.elements.find((el) => el.name === name);
  }
  return undefined;
}

export function findElText(this: convert.Element | undefined): string | number | boolean {
  if (this && this.elements) {
    const textElement = this.elements.find((el) => el.type === 'text');
    if (textElement) {
      return textElement.text ? textElement.text : '';
    }
  }
  return '';
}
