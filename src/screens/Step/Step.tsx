import React, { useState } from "react";
import { AddressSelectionSection } from "./sections/AddressSelectionSection";
import { FooterSection } from "../../components/FooterSection.tsx";
import { HeaderSection } from "../../components/HeaderSection.tsx";
import { PaymentSection } from "./sections/PaymentSection";
import { ShipmentMethodSection } from "./sections/ShipmentMethodSection";
import { SummarySection } from "./sections/SummarySection";

export interface Address {
  id: string;
  title: string;
  badge: string;
  fullAddress: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
}

export interface ShippingMethod {
  id: string;
  label: string;
  price: number;
  description: string;
  date: string;
}

export interface PaymentInfo {
  cardholderName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  sameAsBilling: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const Step = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "address-1",
      title: "2118 Thornridge",
      badge: "HOME",
      fullAddress: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
      street: "2118 Thornridge Cir",
      city: "Syracuse",
      state: "Connecticut",
      postalCode: "35624",
      phone: "(209) 555-0104",
    },
    {
      id: "address-2",
      title: "1901 Oak Street",
      badge: "WORK",
      fullAddress: "1901 Oak Street, San Francisco, California 94102",
      street: "1901 Oak Street",
      city: "San Francisco",
      state: "California",
      postalCode: "94102",
      phone: "(415) 555-0198",
    },
  ]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>("address-1");
  const [selectedShippingId, setSelectedShippingId] = useState<string>("free");
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardholderName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    sameAsBilling: true,
  });

  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Jet Set Radio Bracelett",
      price: 1399,
      image: "/image-phone-mini-2.png",
    },
    {
      id: 2,
      name: "Jet Set Radio Bracelett",
      price: 1399,
      image: "/image-phone-mini-2.png",
    },
    {
      id: 3,
      name: "Jet Set Radio Bracelett",
      price: 1399,
      image: "/image-phone-mini-2.png",
    },
  ];

  const shippingMethods: ShippingMethod[] = [
    {
      id: "free",
      label: "Free",
      price: 0,
      description: "Regulary shipment",
      date: "17 Oct, 2023",
    },
    {
      id: "express",
      label: "Express",
      price: 8.5,
      description: "Get your delivery as soon as possible",
      date: "5 Oct, 2023",
    },
    {
      id: "schedule",
      label: "Schedule",
      price: 0,
      description: "Pick a date when you want to get your delivery",
      date: "Setup",
    },
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCompleteOrder();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAddAddress = (address: Address) => {
    setAddresses([...addresses, address]);
    setSelectedAddressId(address.id);
  };

  const handleDeleteAddress = (addressId: string) => {
    setAddresses(addresses.filter((addr) => addr.id !== addressId));
    if (selectedAddressId === addressId && addresses.length > 1) {
      setSelectedAddressId(addresses[0].id);
    }
  };

  const handleCompleteOrder = () => {
    const selectedAddress = addresses.find((addr) => addr.id === selectedAddressId);
    const selectedShipping = shippingMethods.find((method) => method.id === selectedShippingId);

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const tax = 50;
    const shippingCost = selectedShipping?.price || 0;
    const total = subtotal + tax + shippingCost;

    const orderData = {
      orderId: `ORDER-${Date.now()}`,
      timestamp: new Date().toISOString(),
      customer: {
        address: selectedAddress,
      },
      shipping: {
        method: selectedShipping,
        cost: shippingCost,
      },
      payment: {
        cardholderName: paymentInfo.cardholderName,
        cardNumberLast4: paymentInfo.cardNumber.slice(-4),
        sameAsBillingAddress: paymentInfo.sameAsBilling,
      },
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
      })),
      pricing: {
        subtotal,
        tax,
        shipping: shippingCost,
        total,
      },
    };

    console.log("=== ORDER DATA READY FOR DATABASE ===");
    console.log(JSON.stringify(orderData, null, 2));
    console.log("=====================================");

    alert("Order completed! Check console for order data.");
  };

  return (
    <div className="flex flex-col w-full bg-[#0c0c0c]">
      <HeaderSection />
      <ShipmentMethodSection currentStep={currentStep} />

      {currentStep === 1 && (
        <AddressSelectionSection
          addresses={addresses}
          selectedAddressId={selectedAddressId}
          onSelectAddress={setSelectedAddressId}
          onAddAddress={handleAddAddress}
          onDeleteAddress={handleDeleteAddress}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 2 && (
        <PaymentSection
          shippingMethods={shippingMethods}
          selectedShippingId={selectedShippingId}
          onSelectShipping={setSelectedShippingId}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === 3 && (
        <SummarySection
          cartItems={cartItems}
          addresses={addresses}
          selectedAddressId={selectedAddressId}
          shippingMethods={shippingMethods}
          selectedShippingId={selectedShippingId}
          paymentInfo={paymentInfo}
          onPaymentInfoChange={setPaymentInfo}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      <FooterSection />
    </div>
  );
};
