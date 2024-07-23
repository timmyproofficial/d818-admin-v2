import { paymentColumns } from '@/components/customs/payment/PaymentColumns';
import { DataTable } from '@/components/ui/data-table';
import usePayments from '@/hooks/usePayments';

const PaymentPage = () => {
  const { data, error } = usePayments();
  return (
    <div className="mx-auto">
      <DataTable columns={paymentColumns} data={data} />
    </div>
  );
};

export default PaymentPage;
