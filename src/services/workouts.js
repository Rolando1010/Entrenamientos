import { getFormattedDateDay, getMonthAmountDays } from "../utils/date";
import storage from "../utils/storage";

const getMonthWorkouts = (month, year) => new Promise(resolve => {
    const amountDays = getMonthAmountDays(month, year);
    const dates = [...Array(amountDays + 1).keys()].slice(1).map(day => {
        return getFormattedDateDay(day, month, year);
    });
    storage.getMany(dates).then(resolve);
});

export { getMonthWorkouts };