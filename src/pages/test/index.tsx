import { Cut, Line, Printer, render, Text } from "react-thermal-printer";

export default function Test() {
  const test = (
    <Printer type="epson" width={42} characterSet="korea">
      <Line />
      <Text>SEPTEMBER 30, 2024</Text>
      <Cut />
    </Printer>
  );

  const handleClick = async () => {
    const data = await render(test);

    if (navigator.serial) {
      const port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });

      const writer = port.writable?.getWriter();
      if (writer != null) {
        await writer.write(data);
        writer.releaseLock();
      }
    }
  };

  return <button onClick={handleClick}>test</button>;
}
