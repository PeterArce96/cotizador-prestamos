
// operador es un props, se le coloca entre llaves para hacerle destructuring y ya no colocar props.operador

function Button({operador, fn}) {

    return (
    <button
        type='button'
        className='h-10 w-10 flex justify-center font-bold text-white text-2xl
        bg-lime-500 rounded-full hover:outline-none hover:ring-1 hover:ring-offset-1 hover:ring-white'
        onClick={fn}
        >{operador}</button>
    )
}

export default Button