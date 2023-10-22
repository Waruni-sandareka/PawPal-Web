import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className={'${props.backgroundColor} text-black rounded-full px-7 py-1.5 font-medium hover:bg-[#31302f] bg-textYellowColor hover:text-white transition:all'}>
                {props.title}
            </button>

        </div>
    )
}

export default Button
