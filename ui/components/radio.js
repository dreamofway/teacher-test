import React, { useState, useRef, useEffect } from "react";
import { Radio } from "@nextui-org/react";

export default function App({number, SetSelectVal}) {

    function selectedEvent(param_val) {
        SetSelectVal(number, param_val);
    }

    return (
        <Radio.Group key={'radio_GR_'+number} label="선택 하세요" defaultValue="3"  onChange={selectedEvent}   >
            <Radio id={number+'3'} value="3" color="primary" labelColor="primary" size="xs" >
                매우 그렇다(3)
            </Radio>
            <Radio id={number+'2'} value="2" color="secondary" labelColor="secondary" size="xs" >
                대체로 그렇다(2)
            </Radio>
            <Radio id={number+'1'} value="1" color="success" labelColor="success" size="xs" >
                가끔 그렇다(1)
            </Radio>
            <Radio id={number+'0'} value="0" color="warning" labelColor="warning" size="xs" >
                전혀 아니다(0)
            </Radio>
        </Radio.Group>
    );
}
