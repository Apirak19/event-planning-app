async function getDetail(id: number) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/" + id, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

export default async function DetailList({ params }: any) {
  const id = params.id;
  const detail = await getDetail(id);
   return <main>
     <h2>Detail</h2>
      <h4>Title: {detail.title}</h4>
      <h4>User_ID: {detail.userId}</h4>
      <h4>Complete: {detail.completed}</h4>
  </main>
}
