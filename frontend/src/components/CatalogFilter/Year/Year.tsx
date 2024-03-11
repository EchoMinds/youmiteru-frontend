import "./Year.scss";

interface YearProps {
    setSelectedYear: (selectedOptions: number) => void;
    selectedYear?: number | string;
}

function Year({ setSelectedYear, selectedYear }: YearProps) {
    const handleYearNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSelectedYear(+value);
    };

    return (
        <div className="year-filter">
            <p>Год выпуска</p>
            <input
                type="number"
                value={selectedYear}
                maxLength={4}
                onChange={handleYearNumberChange}
            />
        </div>
    );
}

export default Year;
