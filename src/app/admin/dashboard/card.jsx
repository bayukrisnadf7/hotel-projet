const CardDashboard = (props) => {
    const { icons } = props
    return (
        <div className="block w-full h-28 p-5  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex justify-between">
                <div className="flex flex-col">
                <h1>Card</h1>
                <p>Lorem ipsum </p>
                </div>
                { icons }
            </div>
        </div>
    )
}
export default CardDashboard