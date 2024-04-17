import { Footer } from "../Footer/Footer";
import NavigationBar from "../NavigationBar/NavigationBar";

export function HandleError({}): JSX.Element {
    return (
        <div className="flex flex-col h-[100svh]">
            <NavigationBar />
            <div className="flex-grow flex justify-center items-center text-2xl p-3">
                Произошла ошибка при загрузке страницы. Пожалуйста, проверьте
                подключение к сети.
            </div>
            <Footer />
        </div>
    );
}
