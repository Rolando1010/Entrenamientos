const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const formatDate = date => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}/${month}/${year}`;
};

const getMonthAmountDays = (month, year) => new Date(year, month + 1, 0).getDate();

const getDateDay = (day, month, year) => new Date(`${month + 1}/${day}/${year}`);

const getFormattedDateDay = (day, month, year) => formatDate(getDateDay(day, month, year));

export {
    days,
    months,
    formatDate,
    getMonthAmountDays,
    getDateDay,
    getFormattedDateDay
}