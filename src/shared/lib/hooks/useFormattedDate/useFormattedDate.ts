const useFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // добавляем ведущий ноль, если месяц состоит из одной цифры
    const day = String(today.getDate()).padStart(2, '0'); // добавляем ведущий ноль, если день состоит из одной цифры

    return `${year}-${month}-${day}`;
};

export default useFormattedDate;
