interface LegacyService {
  call: (value: string) => void;
}

interface ModernService {
  call: (value: number) => void;
}

class LegacyLibrary implements LegacyService {
  call(value: string) {
    console.log(value);
  }
}

class LegacyToModernAdapter implements ModernService {
  protected adaptee: LegacyService;

  constructor(adaptee: LegacyService) {
    this.adaptee = adaptee;
  }

  call(value: number) {
    this.adaptee.call(String(value));
  }
}

const adapter = new LegacyToModernAdapter(new LegacyLibrary());
adapter.call(1);

export {};
