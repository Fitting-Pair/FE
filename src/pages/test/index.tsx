import Receipt from "@/components/receipt/receipt";
import { render } from "react-thermal-printer";

const TestPage = () => {
  const onClickPrintHandler = async () => {
    const data = await render(Receipt({ info: "테스트" }));
    const port = await (navigator as any).serial.requestPort();
    await port.open({ baudRate: 9600 });
    const writer = port.writable?.getWriter();
    if (writer !== null) {
      await writer.write(data);
      await writer.releaseLock();
    }
    await port.close({ baudRate: 9600 });
  };
  return <button onClick={onClickPrintHandler}>클릭</button>;
};

export default TestPage;
