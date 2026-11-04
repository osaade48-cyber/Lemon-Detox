/**
 * Stockists, grouped by state. Add real stores here — the page only shows states
 * that have at least one store. Fields: name, suburb, phone (no full addresses).
 */
export type Stockist = { name: string; suburb: string; phone?: string };

export const stockists: { state: string; stores: Stockist[] }[] = [
  { state: 'New South Wales', stores: [] },
  { state: 'Victoria', stores: [] },
  { state: 'Queensland', stores: [] },
  { state: 'Western Australia', stores: [] },
  { state: 'South Australia', stores: [] },
  { state: 'Tasmania', stores: [] },
  { state: 'Australian Capital Territory', stores: [] },
  { state: 'Northern Territory', stores: [] },
];
