export function HandleError({ error }): JSX.Element {
    switch (error.response?.status) {
    case 401:
        return (
            <div className="flex justify-center items-center text-2xl p-3 h-[300px]">
                Ошибка доступа: Вам не разрешено просматривать этот ресурс.
                Пожалуйста, авторизуйтесь для доступа или обратитесь к
                администратору для получения помощи.
            </div>
        );

    case 403:
        return (
            <div className="flex justify-center items-center text-2xl p-3 h-[300px]">
                Доступ запрещён: Извините, но у вас нет разрешения на доступ к
                этим данным. Обратитесь к администратору системы для получения
                помощи или проверьте ваши авторизационные данные.
            </div>
        );

    case 404:
        return (
            <div className="flex justify-center items-center text-2xl p-3 h-[300px]">
                Данные не найдены: Извините, но мы не смогли найти данные по
                вашему запросу. Проверьте правильность запроса.
            </div>
        );

    default:
        return (
            <div className="flex justify-center items-center text-2xl p-3 h-[300px]">
                Произошла ошибка при загрузке страницы. Пожалуйста,
                проверьте подключение к сети.
            </div>
        );
    }
}
