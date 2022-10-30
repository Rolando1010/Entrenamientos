import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigate } from "react-router-native";
import { BackIcon, ForwardIcon } from "../components/icons";
import Table from "../components/table";
import useCalendar from "../hooks/useCalendar";
import { calendarStyles } from "../styles/pages";
import { days } from "../utils/date";
import Modal from "../components/modal";
import Button from "../components/button";
import useDate from "../hooks/useDate";
import ExerciseCard from "../components/exercise-card";

const Calendar = () => {
    const {
        detailMonth,
        incrementhMonth,
        decrementhMonth,
        weeksMonth,
        monthWorkouts
    } = useCalendar();

    return (
        <View>
            <MonthNavigation
                detailMonth={detailMonth}
                incrementhMonth={incrementhMonth}
                decrementhMonth={decrementhMonth}
            />
            <DaysTable
                weeksMonth={weeksMonth}
                monthWorkouts={monthWorkouts}
            />
        </View>
    );
}

const MonthNavigation = ({ detailMonth, incrementhMonth, decrementhMonth }) =>
    <View style={calendarStyles.navigation}>
        <TouchableOpacity onPress={decrementhMonth}>
            <BackIcon/>
        </TouchableOpacity>
        <Text style={calendarStyles.title}>{detailMonth}</Text>
        <TouchableOpacity onPress={incrementhMonth}>
            <ForwardIcon/>
        </TouchableOpacity>
    </View>

const DaysTable = ({ weeksMonth, monthWorkouts }) => {
    const navigate = useNavigate();
    const [daySelected, setDaySelected] = useState();
    const modalRef = useRef();
    const { updateWorkoutDay } = useDate();
    
    const showWorkoutDay = (day) => () => {
        modalRef.open();
        setDaySelected(day);
    }

    const redirectToWorkoutDay = () => {
        const [day, month, year] = daySelected.split("/");
        const newDate = new Date(`${month}/${day}/${year}`);
        updateWorkoutDay(newDate);
        navigate("/");
    }

    return (<>
        <Table
            titles={days.map(d => d.slice(0, 3))}
            data={weeksMonth.map(week => week.map(day => <>
                <TouchableOpacity onPress={showWorkoutDay(day)}>
                    <Text style={calendarStyles.day}>{day.split("/")[0]}</Text>
                    {monthWorkouts[day] &&
                        <View style={calendarStyles.workoutDay}></View>
                    }
                </TouchableOpacity>
            </>))}
        />
        <Modal
            title={daySelected}
            modalRef={modalRef}
            footerElement={<Button onPress={redirectToWorkoutDay}>Ver</Button>}
        >{monthWorkouts[daySelected] ?
            monthWorkouts[daySelected].map(({name, series}, index) =>
                <ExerciseCard
                    key={`exercise-card-${index}`}
                    name={name}
                    series={series}
                    readonly
                />
            )
            :
            <Text style={calendarStyles.emptyExercises}>No se han añadido ejercicios para este día</Text>
        }</Modal>
    </>);
}

export default Calendar;