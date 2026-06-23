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
      <p className="mb-3 text-[13px] text-neutral-600">Choose a delivery method</p>
      <div className="mb-4 grid grid-cols-2 overflow-hidden rounded-[5px] border border-[#dedede]">
        <button
          type="button"
          onClick={() => onDeliveryMethodChange("ship")}
          className={`h-[44px] text-[13px] font-medium transition-colors ${
            deliveryMethod === "ship"
              ? "bg-[#151515] text-white"
              : "bg-white text-[#151515] hover:bg-neutral-50"
          }`}
        >
          Ship
        </button>
        <button
          type="button"
          onClick={() => onDeliveryMethodChange("pickup")}
          className={`h-[44px] border-l border-[#dedede] text-[13px] font-medium transition-colors ${
            deliveryMethod === "pickup"
              ? "bg-[#151515] text-white"
              : "bg-white text-[#151515] hover:bg-neutral-50"
          }`}
        >
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
