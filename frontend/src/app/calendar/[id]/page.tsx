import React, { useState } from 'react'

interface Todo {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
 }

async function getDetail(id: number): Promise<Todo> {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   return res.json()
}

const DetailList: React.FC = () => {
   const [detail, setDetail] = useState<Todo | null>(null)
  return (
    <div>
      
    </div>
  )
}
