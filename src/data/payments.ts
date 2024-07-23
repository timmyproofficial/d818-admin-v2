export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

async function getPaymentData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    {
      id: '728ed42f',
      amount: 100,
      status: 'pending',
      email: 't@example.com',
    },
    {
      id: '728eh52f',
      amount: 100,
      status: 'pending',
      email: 'h@example.com',
    },
    {
      id: '728ud52f',
      amount: 100,
      status: 'pending',
      email: 'u@example.com',
    },
    {
      id: '728ed52k',
      amount: 100,
      status: 'pending',
      email: 'k@example.com',
    },
    // ...
  ];
}

export default getPaymentData;
