const Container = ({ element }) => {
    return (
        <div className="group flex flex-col items-center justify-between p-4 rounded-2xl border border-gray-200 bg-white shadow-sm 
                        hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-400 relative transition duration-300 
                        ease-in-out will-change-transform group-hover:scale-105 group-active:scale-95">
                {element}
        </div>
    )
}

export default Container;