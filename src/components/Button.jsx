import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
    <div>
        <button onClick={func} className='px-8 py-4 rounded-md border-[2px] bg-zinc-950 
        border-zinc-400 border-solid zincshadow duration-200'>
            <p>{text}</p>
        </button>
    </div>
  )
}
