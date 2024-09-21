export default function Success({ show, setShow }) {
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className="w-52 rounded h-52 flex items-center justify-center flex-col bg-white">
            <p>success</p>
            <button onClick={handleClick} className="mt-5 bg-blue-600 text-white rounded px-4">Close</button>
        </div>
    );
}
