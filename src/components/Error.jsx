

export const Error = ({mensaje}) => {
    return (
        <>
        <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-100 p-4 mb-3" role="alert">
            <p className="font-bold">Advertencia</p>
            <p>{mensaje}</p>
        </div>
        </>
    )
}
