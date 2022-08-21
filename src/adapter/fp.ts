type LegacyService = (value: string) => void;
type ModernService = (value: number) => void;

const legacyCall: LegacyService = (value) => {
  console.log(value);
};

const adaptLegacyToModernCall: ModernService = (value) => {
  legacyCall(String(value));
};

adaptLegacyToModernCall(1);

export {};
