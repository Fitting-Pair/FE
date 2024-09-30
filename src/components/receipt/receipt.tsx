import {
  Printer,
  Text,
  Line,
  Cut,
  Row,
  Barcode,
  Br,
} from "react-thermal-printer";

interface ReceiptProps {
  nickname: string;
  bodyTypeName: string;
  chestSize: number;
  height: number;
  hipSize: number;
  shoulderSize: number;
  waistSize: number;
}

const Receipt = ({
  bodyTypeName,
  nickname,
  chestSize,
  height,
  hipSize,
  shoulderSize,
  waistSize,
}: ReceiptProps) => {
  return (
    <Printer type="epson" width={42} characterSet="korea">
      <Line />
      <Text bold={true} size={{ width: 4, height: 4 }} align="center">
        BODY CHECK
      </Text>
      <Br />
      <Text>{`ORDER "${nickname}" FOR BODY SHAPE CHECK`}</Text>
      <Text>SEPTEMBER 30, 2024</Text>
      <Line />
      <Row left="HEIGHT:" right={`${height}cm`} />
      <Row left="SHOULDER:" right={`${shoulderSize}cm`} />
      <Row left="WAIST:" right={`${waistSize}cm`} />
      <Row left="CHEST:" right={`${chestSize}cm`} />
      <Row left="HIP:" right={`${hipSize}cm`} />
      <Line />
      <Row left="TYPE:" right={bodyTypeName} />
      <Row left="NICKNAME:" right={nickname} />
      <Line />
      <Barcode
        align="center"
        type="CODE39"
        content="FITTING PAIR"
        width={2}
        height={100}
        hriPosition="bottom"
      />
      <Cut />
    </Printer>
  );
};

export default Receipt;
