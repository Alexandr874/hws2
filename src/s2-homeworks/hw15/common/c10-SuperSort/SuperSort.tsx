import React from 'react'
import up from '../img/up.svg'
import down from '../img/down.svg'
import upDown from '../img/up_down.svg'

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon =  upDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === up) {
        return ''; // Сброс сортировки
    } else if (sort === down) {
        return up; // Сортировка по возрастанию
    } else {
        return down; // Сортировка по убыванию
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon

    return (
        <span id={id + '-sort-' + value} onClick={onChangeCallback}>
            <img id={id + '-icon-' + sort} src={icon} width={8} height={10} />
        </span>
    )
}

export default SuperSort
