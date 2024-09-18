const Input = ( props ) => {
    const { type, name, placeholder } = props
    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} className="w-72 p-2 border rounded-lg mt-2" />
        </div>
    )
}
export default Input