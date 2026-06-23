type PaymentMethodsProps = {
  inputClassName: string;
};

export default function PaymentMethods({ inputClassName }: PaymentMethodsProps) {
  return (
    <section>
      <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Payment</h2>
      <p className="mb-4 text-[13px] text-neutral-600">
        All transactions are secure and encrypted.
      </p>
      <div className="overflow-hidden rounded-[5px] border border-[#dedede]">
        <div className="border-b border-[#dedede] bg-[#f7f7f7] px-4 py-3 text-[14px] font-medium">
          Credit card
        </div>
        <div className="space-y-3 p-4">
          <input type="text" placeholder="Card number" className={inputClassName} />
          <div className="grid gap-3 sm:grid-cols-2">
            <input type="text" placeholder="Expiration date (MM / YY)" className={inputClassName} />
            <input type="text" placeholder="Security code" className={inputClassName} />
          </div>
          <input type="text" placeholder="Name on card" className={inputClassName} />
        </div>
      </div>
    </section>
  );
}
