import "./Year.scss";

interface YearProps {
    setSelectedYear: (selectedOptions: string[]) => void;
    selectedYear?: string[];
}

function Year({ setSelectedYear, selectedYear }: YearProps) {
    const handleYearNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedYear([value]);
    };

    return (
        <div className="year-filter">
            <p>Год выпуска</p>
            <input
                type="text"
                value={selectedYear}
                onChange={handleYearNumberChange}
            />
        </div>
    );
}

export default Year;
