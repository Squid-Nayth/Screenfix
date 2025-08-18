
const Selection = ({ template }) => {
    return (
        <div
        className="absolute z-20 left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg max-h-72 
        overflow-y-auto animate-fade-in">
            <ul className="divide-y divide-gray-100">
                {template}
            </ul>
        </div>
    );
};

export default Selection;