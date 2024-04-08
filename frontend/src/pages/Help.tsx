import { Footer } from "@/components/Footer/Footer";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export function Help(): JSX.Element {
    return (
        <div className="flex flex-col">
            <NavigationBar />
            <p
                className="text-sm w-[300px] pt-[20px] pb-[50px]
                sm:text-base md:text-l md:w-[500px] md:pt-[50px] md:pb-[80px]
                lg:pt-[100px] lg:w-[700px] lg:pb-[200px] lg:text-xl
                self-center text-center"
            >
                Для любых вопросов, предложений или обратной связи с
                администрацией сайта, пожалуйста, не стесняйтесь обращаться по
                указанному адресу электронной почты: youmiteru.team@gmail.com
                Мы всегда готовы выслушать вас и помочь вам решить любые
                возникающие вопросы. Ваше мнение для нас важно, и мы стремимся
                сделать ваше пребывание на нашем сайте максимально приятным и
                удобным. Благодарим вас за ваше внимание и доверие!
            </p>
            <Footer />
        </div>
    );
}
