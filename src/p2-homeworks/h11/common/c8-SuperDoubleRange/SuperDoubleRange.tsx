import React, {useEffect} from 'react'
import s from './DublerRange.module.css'

import './nouislider.min.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
};


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        // min,
        // max,
        // step,
        // disable, ...
    }
) => {


    function slideOne(sliderOne: HTMLInputElement, sliderTwo: HTMLInputElement, minGap: number, sliderTrack: HTMLElement, sliderMaxValue: string) {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = String(parseInt(sliderTwo.value) - minGap);
        }
    }

    function slideTwo(sliderOne: HTMLInputElement, sliderTwo: HTMLInputElement, minGap: number, sliderTrack: HTMLInputElement, sliderMaxValue: string) {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = String(parseInt(sliderOne.value) + minGap);
        }
    }


    useEffect(() => {
        let sliderOne = document.getElementById("slider-1") as HTMLInputElement;
        let sliderTwo = document.getElementById("slider-2") as HTMLInputElement;
        let minGap = 0;
        let sliderTrack = document.querySelector(".slider-track") as HTMLInputElement;
        let sliderMaxValue = sliderOne.max;
        slideOne(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue);
        slideTwo(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue);

        sliderOne.addEventListener("change", () => slideOne(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue))
        sliderTwo.addEventListener("change", () => slideTwo(sliderOne, sliderTwo, minGap, sliderTrack, sliderMaxValue))
    }, [])



    return (
        <div className={s.container}>
            <div className={s.sliderTrack}></div>
            <input type="range" min="0" max="100" value="30" id="slider-1"/>
            <input type="range" min="0" max="100" value="70" id="slider-2"/>
        </div>
    )
}

export default SuperDoubleRange
