import { Radio } from "@nextui-org/react";

export default function App({number, SetSelectVal}) {

    function selectedEvent(idx, val) {
        console.log(idx, val);
        // SetSelectVal(idx, val);
    }

    return (
        <Radio.Group label="선택 하세요" defaultValue="3" orientation="horizontal" key={number}>
            <Radio id={number+'3'} value="3" color="primary" labelColor="primary" onChange={selectedEvent(number, 3)} >
                매우 그렇다(3)
            </Radio>
            <Radio id={number+'2'} value="2" color="secondary" labelColor="secondary" onChange={selectedEvent(number, 2)} >
                대체로 그렇다(2)
            </Radio>
            <Radio id={number+'1'} value="1" color="success" labelColor="success" onChange={selectedEvent(number, 1)}>
                가끔 그렇다(1)
            </Radio>
            <Radio id={number+'0'} value="0" color="warning" labelColor="warning" onChange={selectedEvent(number, 0)}>
                전혀 아니다(0)
            </Radio>
        </Radio.Group>
    );
}
