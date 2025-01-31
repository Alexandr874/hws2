import s from './Loader.module.css'
//import { ReactComponent as Loud } from './Loading.svg';
import CircularProgress from '@mui/material/CircularProgress';

export const Loader = () => {
    return (
        <div className={s.loader}>
            <CircularProgress size={100} color="primary"/>
        </div>
    )
}

