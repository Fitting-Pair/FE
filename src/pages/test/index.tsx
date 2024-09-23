import Receipt from "@/components/receipt/receipt";
import { render } from "react-thermal-printer";

const TestPage = () => {
  const onClick = async () => {
    const data = await render(
      Receipt({
        bodyTypeName: "삼각형",
        nickname: "쪼이",
        chestSize: 80,
        height: 160,
        hipSize: 90,
        shoulderSize: 40,
        waistSize: 40,
      }),
    );

    const port = await window.navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    const writer = port.writable?.getWriter();
    if (writer != null) {
      await writer.write(data);
      writer.releaseLock();
    }
  };

  return <button onClick={onClick}>버튼</button>;
};

export default TestPage;
