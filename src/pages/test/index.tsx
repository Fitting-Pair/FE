import { Cut, Line, Printer, render, Text } from "react-thermal-printer";

const TestPage = () => {
  const Test = () => {
    return (
      <Printer type="epson" width={42} characterSet="korea">
        <Line />
        <Text>테스트</Text>
        <Cut />
      </Printer>
    );
  };

  const handleClick = async () => {
    const data = await render(Test());

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

  return (
    <div>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
};

export default TestPage;
