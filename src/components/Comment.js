import React from 'react'

const Comment = ({details}) => {
  return (
    <div className="border-separate border-b-2">{details?.snippet?.topLevelComment?.snippet?.textOriginal}</div>
  )
}

export default Comment