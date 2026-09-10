export type AssetStatus = 'Online' | 'Offline' | 'Limited' | 'Warning';
export type TargetType = 'house' | 'city' | 'district' | 'central' | 'solarPlant';
export type CommandAction = 'setPowerLimit' | 'removePowerLimit' | 'remoteRead' | 'diagnostics' | 'disconnect' | 'reconnect' | 'resetMeter' | 'synchronize' | 'configure' | 'setGenerationLimit' | 'setCurtailment';
export type HouseState = { id: string; cityId: string; districtId: string; centralId: string; meterId: string; hasPv: boolean; naturalDemandKw: number; effectiveDemandKw: number; pvKw: number; status: AssetStatus; powerLimitKw?: number; limitExpiresAt?: number; voltage: number; current: number; lastCommunication: string };
export type Limit = { value: number; expiresAt?: number };
export type CommandRecord = { commandId: string; timestamp: string; user: string; targetType: TargetType; targetId: string; commandType: CommandAction; requestedValue?: number; previousValue?: number | string; newValue?: number | string; status: 'PENDING' | 'SENDING' | 'ACCEPTED' | 'APPLIED' | 'FAILED'; result: string };
export type Alert = { id: string; timestamp: string; target: string; level: 'HIGH' | 'MEDIUM'; message: string };
