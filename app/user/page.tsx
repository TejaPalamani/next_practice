import axios, { Axios } from 'axios';

async function fetchData() {
  const response = await axios.get('http://localhost:3000/api/user');

  return response.data;
}

export default async function LoadHomePage() {
  const data = await fetchData();

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center shadow cursor-pointer hover:dark:bg-slate-800 transition-colors hover:text-white">
        <h1>{data.user}</h1>
        <p>{data.mesg}</p>
      </div>
    </section>
  );
}
