
export default function Pagination(props: any){

    return(
        <>
        <div className="flex  justify-center items-center gap-4 mt-8 mb-8">
        <button 
            onClick={props.prevonclick}
            disabled={props.page === 1}
            className={`px-4 py-2 rounded bg-gray-200 text-gray-800 ${props.page} ? 'opacity-50 ' : 'hover:bg-gray-300'}`}
        >
            Previous
        </button>

        <span className="font-bold text-gray-700">Page {props.page}</span>

        <button 
            onClick={props.nextonclick}
            disabled={props.items < 25}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
            Next
        </button>
      </div> 
        </>
    )
}