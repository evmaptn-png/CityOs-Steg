export type Page = 'overview' | 'centrals' | 'central' | 'district' | 'city' | 'houses' | 'house' | 'meter' | 'solar' | 'map' | 'alerts' | 'operations';
export type Command = { time: string; user: string; target: string; command: string; status: 'Success' };
export type House = { id: string; city: string; meter: string; solar: boolean; consumption: number; pv: number; status: 'Online' | 'Offline' };
export type RuntimeHouse = House & { naturalDemand: number; powerLimitKw?: number; limitExpiresAt?: number; voltage: number; current: number; lastCommunication: string; limitReached: boolean };
