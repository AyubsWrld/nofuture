import { PencilIcon, XIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Address } from "../../Step";

interface AddressSelectionSectionProps {
  addresses: Address[];
  selectedAddressId: string;
  onSelectAddress: (addressId: string) => void;
  onAddAddress: (address: Address) => void;
  onDeleteAddress: (addressId: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const AddressSelectionSection = ({
  addresses,
  selectedAddressId,
  onSelectAddress,
  onAddAddress,
  onDeleteAddress,
  onNext,
  onBack,
}: AddressSelectionSectionProps): JSX.Element => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    badge: "HOME",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress: Address = {
      id: `address-${Date.now()}`,
      title: formData.title || formData.street.split(" ")[0],
      badge: formData.badge,
      fullAddress: `${formData.street}, ${formData.city}, ${formData.state} ${formData.postalCode}`,
      street: formData.street,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      phone: formData.phone,
    };
    onAddAddress(newAddress);
    setFormData({
      title: "",
      badge: "HOME",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      phone: "",
    });
    setShowAddForm(false);
  };

  return (
    <div className="flex flex-col items-start gap-16 px-40 py-12 w-full">
      <div className="flex flex-col items-start justify-between flex-1 w-full">
        <div className="flex flex-col items-start gap-8 w-full">
          <h2 className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-6">
            Select Address
          </h2>

          <div className="flex flex-col items-start gap-12 w-full">
            <RadioGroup
              value={selectedAddressId}
              onValueChange={onSelectAddress}
              className="flex flex-col items-start gap-6 w-full"
            >
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`flex items-center justify-between p-6 w-full rounded-[7px] border border-solid border-neutral-800 ${
                    selectedAddressId === address.id
                      ? "bg-[#1f1f1f]"
                      : "bg-[#141414]"
                  }`}
                >
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center gap-4 w-full">
                      <div className="inline-flex items-center gap-4">
                        <RadioGroupItem
                          value={address.id}
                          className="w-6 h-6 rounded-xl border-2 border-solid border-white data-[state=checked]:border-white"
                        />

                        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-lg tracking-[0.15px] leading-6 whitespace-nowrap">
                          {address.title}
                        </div>
                      </div>

                      <Badge className="inline-flex items-center justify-center gap-2 px-2 py-1 bg-[#d2d2d2] rounded hover:bg-[#d2d2d2]">
                        <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#141414] text-xs tracking-[0] leading-[normal]">
                          {address.badge}
                        </span>
                      </Badge>
                    </div>

                    <div className="flex flex-col items-start gap-2 pl-10 pr-0 py-0 w-full">
                      <div className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6">
                        {address.fullAddress}
                      </div>

                      <div className="flex items-end gap-3 w-full">
                        <div className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-base tracking-[0] leading-6 whitespace-nowrap">
                          {address.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-start gap-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-6 h-6 p-0 hover:bg-transparent"
                      onClick={() => onDeleteAddress(address.id)}
                    >
                      <XIcon className="w-6 h-6 text-[#d2d2d2] hover:text-white" />
                    </Button>
                  </div>
                </div>
              ))}
            </RadioGroup>

            {showAddForm ? (
              <form onSubmit={handleSubmitAddress} className="flex flex-col items-start gap-4 w-full p-6 bg-[#1f1f1f] rounded-[11px] border border-solid border-neutral-800">
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-6">
                  Add New Address
                </h3>

                <div className="flex items-start gap-4 w-full">
                  <Input
                    name="title"
                    placeholder="Address Title (e.g., Home, Work)"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="flex-1 h-12 px-4 py-3 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                  />
                  <Input
                    name="badge"
                    placeholder="Label (HOME/WORK)"
                    value={formData.badge}
                    onChange={handleInputChange}
                    className="flex-1 h-12 px-4 py-3 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                  />
                </div>

                <Input
                  name="street"
                  placeholder="Street Address"
                  value={formData.street}
                  onChange={handleInputChange}
                  required
                  className="h-12 px-4 py-3 w-full rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                />

                <div className="flex items-start gap-4 w-full">
                  <Input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="flex-1 h-12 px-4 py-3 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                  />
                  <Input
                    name="state"
                    placeholder="State/Province"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="flex-1 h-12 px-4 py-3 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                  />
                </div>

                <div className="flex items-start gap-4 w-full">
                  <Input
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="flex-1 h-12 px-4 py-3 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="flex-1 h-12 px-4 py-3 rounded-[7px] border-[0.5px] border-solid border-[#cecece] bg-transparent text-white [font-family:'Inter',Helvetica] font-normal text-sm tracking-[-0.07px] leading-4"
                  />
                </div>

                <div className="flex items-center gap-4 w-full">
                  <Button
                    type="submit"
                    className="h-auto px-8 py-3 bg-white rounded-md hover:bg-white/90"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-4 whitespace-nowrap">
                      Save Address
                    </span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                    className="h-auto px-8 py-3 rounded-md border border-solid border-white bg-transparent hover:bg-white/10"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-4 whitespace-nowrap">
                      Cancel
                    </span>
                  </Button>
                </div>
              </form>
            ) : (
              <button
                onClick={() => setShowAddForm(true)}
                className="flex flex-col items-center gap-2 w-full cursor-pointer bg-transparent border-none p-0"
              >
                <div className="flex h-6 items-center w-full">
                  <img
                    className="flex-1 self-stretch"
                    alt="Line"
                    src="/line.svg"
                  />

                  <div className="w-6 h-6 bg-[url(/subtract-2.svg)] bg-[100%_100%]" />

                  <img
                    className="flex-1 self-stretch"
                    alt="Line"
                    src="/line-2.svg"
                  />
                </div>

                <div className="w-[188.59px] [font-family:'Inter',Helvetica] font-normal text-[#d2d2d2] text-sm text-center tracking-[0.10px] leading-4">
                  Add New Address
                </div>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-end gap-[24px_24px] w-full mt-16">
          <Button
            variant="outline"
            onClick={onBack}
            disabled
            className="h-auto inline-flex items-center justify-center gap-2 px-[86px] py-6 rounded-md border border-solid border-white bg-transparent hover:bg-white/10 disabled:opacity-50"
          >
            <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Back
            </span>
          </Button>

          <Button
            onClick={onNext}
            className="h-auto px-[86px] py-6 bg-white rounded-md inline-flex items-center justify-center gap-2 hover:bg-white/90"
          >
            <span className="w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-black text-base text-center tracking-[0] leading-4 whitespace-nowrap">
              Next
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
