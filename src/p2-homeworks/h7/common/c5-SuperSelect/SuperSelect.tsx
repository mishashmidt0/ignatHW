import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from './../../style.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? (options?.map((e) => <option className={s.option}>{e}</option>)) : [];
    // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} value={restProps.value} className={s.selected}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
