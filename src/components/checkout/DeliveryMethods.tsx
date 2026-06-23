import type { DeliveryMethod } from "@/types";
import type { CheckoutField, CheckoutFormFields } from "@/components/checkout/types";

type DeliveryMethodsProps = {
  form: CheckoutFormFields;
  deliveryMethod: DeliveryMethod;
  saveInfo: boolean;
  inputClassName: string;
  onDeliveryMethodChange: (method: DeliveryMethod) => void;
  onFieldChange: (field: CheckoutField, value: string) => void;
  onSaveInfoChange: (checked: boolean) => void;
};

export default function DeliveryMethods({
  form,
  deliveryMethod,
  saveInfo,
  inputClassName,
  onDeliveryMethodChange,
  onFieldChange,
  onSaveInfoChange,
}: DeliveryMethodsProps) {
  return (
    <section>
      <h2 className="mb-4 text-[18px] font-semibold text-[#151515]">Delivery</h2>
      <div className="mb-4 flex overflow-hidden rounded-[5px] border border-[#dedede] bg-[#f7f7f7] p-1">
        <button
          type="button"
          onClick={() => onDeliveryMethodChange("ship")}
          className={`flex h-[44px] flex-1 items-center justify-center gap-2 rounded-[3px] text-[13px] font-medium transition-all ${
            deliveryMethod === "ship"
              ? "bg-white text-[#151515] shadow-sm border border-[#e2e2e2]"
              : "text-neutral-500 hover:text-[#151515]"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          Ship
        </button>
        <button
          type="button"
          onClick={() => onDeliveryMethodChange("pickup")}
          className={`flex h-[44px] flex-1 items-center justify-center gap-2 rounded-[3px] text-[13px] font-medium transition-all ${
            deliveryMethod === "pickup"
              ? "bg-white text-[#151515] shadow-sm border border-[#e2e2e2]"
              : "text-neutral-500 hover:text-[#151515]"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Pickup
        </button>
      </div>

      {deliveryMethod === "ship" && (
        <div className="space-y-3">
          <select
            value={form.country}
            onChange={(event) => onFieldChange("country", event.target.value)}
            className={inputClassName}
          >
            <option>Sri Lanka</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Australia</option>
            <option>India</option>
          </select>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="First name"
              value={form.firstName}
              onChange={(event) => onFieldChange("firstName", event.target.value)}
              className={inputClassName}
            />
            <input
              type="text"
              required
              placeholder="Last name"
              value={form.lastName}
              onChange={(event) => onFieldChange("lastName", event.target.value)}
              className={inputClassName}
            />
          </div>
          <input
            type="text"
            required
            placeholder="Address"
            value={form.address}
            onChange={(event) => onFieldChange("address", event.target.value)}
            className={inputClassName}
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            value={form.apartment}
            onChange={(event) => onFieldChange("apartment", event.target.value)}
            className={inputClassName}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <input
              type="text"
              required
              placeholder="City"
              value={form.city}
              onChange={(event) => onFieldChange("city", event.target.value)}
              className={inputClassName}
            />
            <input
              type="text"
              placeholder="Province"
              value={form.province}
              onChange={(event) => onFieldChange("province", event.target.value)}
              className={inputClassName}
            />
            <input
              type="text"
              placeholder="Postal code"
              value={form.postalCode}
              onChange={(event) => onFieldChange("postalCode", event.target.value)}
              className={inputClassName}
            />
          </div>
          <input
            type="tel"
            required
            placeholder="Phone"
            value={form.phone}
            onChange={(event) => onFieldChange("phone", event.target.value)}
            className={inputClassName}
          />
          <label className="flex items-center gap-2 text-[13px] text-[#151515]">
            <input
              type="checkbox"
              checked={saveInfo}
              onChange={(event) => onSaveInfoChange(event.target.checked)}
              className="h-4 w-4 accent-[#151515]"
            />
            Save this information for next time
          </label>
        </div>
      )}
    </section>
  );
}
