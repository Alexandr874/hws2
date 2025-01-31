

import React, { SelectHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperSelect.module.css';
import type { OptionType } from '../../HW7';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: OptionType[];
    onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         value,
                                                         options,
                                                         className,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions = options?.map((o) => (
        <option
            id={`hw7-option-${o.id}`}
            className={s.option}
            key={o.id}
            value={o.id}
        >
            {o.value}
        </option>
    )) || [];

    const onChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChangeOption) {
            onChangeOption(Number(e.currentTarget.value)); // Передаем числовое значение
        }
    };

    const finalSelectClassName = `${s.select} ${className || ''}`;

    return (
        <select
            className={finalSelectClassName}
            value={value}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;






