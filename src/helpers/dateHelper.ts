export const getMonthDiff = (start: string, end: string = new Date().toISOString()): number => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const daysInEndMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
    const daysLeftInMonth = daysInEndMonth - endDate.getDate();

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let totalMonths = years * 12 + months;

    if (daysLeftInMonth <= 7) {
        totalMonths += 1;
    }

    return totalMonths >= 0 ? totalMonths : 0;
};
