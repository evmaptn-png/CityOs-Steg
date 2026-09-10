export const balance = (consumption: number, pv: number) => ({ selfConsumption: Math.min(consumption, pv), gridImport: Math.max(0, consumption - pv), gridExport: Math.max(0, pv - consumption) });
