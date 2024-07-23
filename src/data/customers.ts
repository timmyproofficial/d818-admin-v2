import { Customer } from '@/entities/customer';

async function getCustomersData(): Promise<Customer[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      fullName: 'John Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
      role: 'public',
    },
    {
      id: '728ed42f',
      fullName: 'John Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
      role: 'public',
    },
    {
      id: '728eh52f',
      fullName: 'John Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
      role: 'public',
    },
    {
      id: '728ud52f',
      fullName: 'John Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
      role: 'public',
    },
    {
      id: '728ed52k',
      fullName: 'John Smith',
      email: 'm@example.com',
      address: 'Lagos, NG',
      phone: '903949493',
      role: 'public',
    },
    // ...
  ];
}

export default getCustomersData;
