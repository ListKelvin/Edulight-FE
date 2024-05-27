import Link from 'next/link';

import { Env } from '@/libs/Env.mjs';

import { AddUserForm } from './components/AddUserForm';

async function getUsers() {
  const res = await fetch(Env.NEXT_PUBLIC_MOCK_API);
  return res.json();
}
export default async function Abc() {
  const data2 = await getUsers();
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="">
        <AddUserForm />
      </div>
      <div className="">
        {!data2 ? (
          <div>data empty</div>
        ) : (
          data2.map((el) => (
            <div key={el.email} className="mb-2">
              {el.email}
              <br />
              <Link href={`/abc/${el.id}`} className="text-red-500">
                {el.username}
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
