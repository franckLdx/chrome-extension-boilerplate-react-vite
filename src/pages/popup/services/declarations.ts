export interface User {
  id: number;
  name: string;
}

export const isNameMatch = ({ name }: User, nameFilter: string): boolean =>
  name.toLowerCase().includes(nameFilter.toLowerCase());
