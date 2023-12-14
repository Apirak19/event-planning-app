'use client';

import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
  const {user, error, isLoading} = useUser()

  if (isLoading) return <div>Loading</div>
  if (error) return <div>{ error.message}</div>
  return (
    user && (
      <main className="min-h-screen">
       <div className="">
          <h1>Name: { user.name}</h1>
          <h1>Email: { user.email}</h1>
         
       </div>
       
     </main>
       )
   )
 }