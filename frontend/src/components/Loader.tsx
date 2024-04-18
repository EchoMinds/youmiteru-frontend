import loader from "@/assets/icons/spinner.svg";

export function Loader(): JSX.Element {
    return <div className="flex items-center justify-center h-[500px]">
        <img className="w-[300px]" src={loader} alt="Loading..." />
    </div>;
}