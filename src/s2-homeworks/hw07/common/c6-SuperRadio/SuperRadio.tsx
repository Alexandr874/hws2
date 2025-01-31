

import React, {
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';
import s from './SuperRadio.module.css';
import type { OptionType } from '../../HW7';

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>;

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: OptionType[];
    onChangeOption?: (option: number) => void;
    spanProps?: DefaultSpanPropsType;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
                                                       id,
                                                       name,
                                                       options,
                                                       value,
                                                       onChangeOption,
                                                       spanProps,
                                                       ...restProps
                                                   }) => {
    const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(Number(e.currentTarget.value)); // Передаем выбранное значение
        }
    };

    const mappedOptions = options?.map((o) => (
        <label key={`${name}-${o.id}`} className={s.label}>
            <input
                id={`${id}-input-${o.id}`}
                className={s.radio}
                type="radio"
                value={o.id}
                checked={o.id === value} // Условие checked
                name={name} // Одинаковый name для всех радиокнопок
                onChange={onChangeCallback}
                {...restProps}
            />
            <span
                id={`${id}-span-${o.id}`}
                {...spanProps}
                className={s.span}
            >
                {o.value}
            </span>
        </label>
    )) || [];

    return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;





