interface Navigator {
  serial?: {
    requestPort: () => Promise<SerialPort>;
  };
}
