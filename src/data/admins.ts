import { Admin } from '@/entities/admin';

async function getAdminData(): Promise<Admin[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      firstName: 'John',
      lastName: 'Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
    },
    {
      id: '728ed42f',
      firstName: 'John',
      lastName: 'Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
    },
    {
      id: '728eh52f',
      firstName: 'John',
      lastName: 'Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
    },
    {
      id: '728ud52f',
      firstName: 'John',
      lastName: 'Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
    },
    {
      id: '728ed52k',
      firstName: 'John',
      lastName: 'Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
    },
    // ...
  ];
}

export default getAdminData;
