import React from 'react'
import styles from './EventsList.module.scss'
import TimeLine from "./TimeLine/TimeLine";
import SelectComponent from "../shared/select/SelectComponent";
import CardGrid from "./CardGrid/CardGrid";
import EventListInterface from "./EventList.interface";
import IEvent from "../../interfaces/IEvent";
import {useLocation} from "react-router-dom";
import {getEvents} from "../../actions/eventActions";
import LoadingComponent from "../shared/loading/LoadingComponent";
import Pagination from '@mui/material/Pagination';
import {createTheme, ThemeProvider} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const EventsList = ({type, events, isLoading, communities, getNewData}: EventListInterface) => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
        window.scrollTo({top: 400, left: 0, behavior: 'smooth' })
        getNewData(value)
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#3B285C',
            },
        },
    })

    return (
        <section className={styles.block}>
            <SelectComponent/>
            {type != 'community' && <TimeLine/>}
            {isLoading
                ?
                <LoadingComponent/>
                :
                <>
                    <CardGrid type={type} events={events} communities={communities}/>
                    <ThemeProvider theme={theme}>
                        <Pagination count={10} color={'primary'} size={'large'}
                                    page={page} onChange={handleChange}
                                    style={{
                                        marginTop: '30px',
                                        marginBottom: '20px'
                                    }}/>
                    </ThemeProvider>
                </>}
        </section>
    )
}

export default EventsList