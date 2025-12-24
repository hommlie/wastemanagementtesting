import React, { useState } from "react";

export default function PartnerWithUs() {
  const [form, setForm] = useState({
    agencyName: "",
    agencyOwnerName: "",
    ownerDesignation: "",
    aadhar: "",
    email: "",
    mobile: "",
    address: "",
    gstNumber: "",
    panNumber: "",
    linNumber: "",
    esicNumber: "",
    epfoNumber: "",
    klwfNumber: "",
    tanNumber: "",
    bankName: "",
    branchName: "",
    ifscCode: "",
    accountNumber: "",
    vehicleNumber: "",
    rcNumber: "",
    fleetType: "",
    fuelType: "",
    insuranceExpiry: "",
    permitValidity: "",
    pucValidity: "",
    gpsInstalled: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "partner_aggregator", ...form }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setMessage("Submitted — we will contact you shortly.");
      setForm(Object.keys(form).reduce((acc, k) => ({ ...acc, [k]: "" }), {}));
    } catch (err) {
      console.error(err);
      setMessage("Submission failed — try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#ffffff] pt-[40px] pb-[80px] px-6 lg:px-16">
      <h1 className="text-4xl font-bold text-[#14532d] mb-10">Review Aggregator</h1>

      <form onSubmit={handleSubmit}>
        <SectionTitle title="Aggregator details" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Field name="agencyName" label="Agency Name *" placeholder="Enter agency name" value={form.agencyName} onChange={handleChange} />
          <Field name="agencyOwnerName" label="Agency Owner Name *" placeholder="Enter owner name" value={form.agencyOwnerName} onChange={handleChange} />
          <Field name="ownerDesignation" label="Owner Designation *" placeholder="Enter designation" value={form.ownerDesignation} onChange={handleChange} />
          <Field name="aadhar" label="Aadhar *" placeholder="Enter Aadhar no." value={form.aadhar} onChange={handleChange} />

          <Field name="email" label="Email *" placeholder="Enter email" value={form.email} onChange={handleChange} />
          <Field name="mobile" label="Mobile *" placeholder="Enter mobile number" value={form.mobile} onChange={handleChange} />
          <Field name="address" label="Address *" placeholder="Enter full address" className="md:col-span-2 lg:col-span-2" value={form.address} onChange={handleChange} />

          <Field name="gstNumber" label="GST Number *" placeholder="Enter GST Number" value={form.gstNumber} onChange={handleChange} />
          <Field name="panNumber" label="PAN Number *" placeholder="Enter PAN Number" value={form.panNumber} onChange={handleChange} />
          <Field name="linNumber" label="LIN Number" placeholder="Enter LIN Number" value={form.linNumber} onChange={handleChange} />
          <Field name="esicNumber" label="ESIC Number" placeholder="Enter ESIC Number" value={form.esicNumber} onChange={handleChange} />

          <Field name="epfoNumber" label="EPFO Number" placeholder="Enter EPFO Number" value={form.epfoNumber} onChange={handleChange} />
          <Field name="klwfNumber" label="KLWF Number" placeholder="Enter KLWF Number" value={form.klwfNumber} onChange={handleChange} />
          <Field name="tanNumber" label="TAN Number" placeholder="Enter TAN Number" value={form.tanNumber} onChange={handleChange} />
        </div>

        {/* ================= SECTION 2 ================= */}
        <SectionTitle title="Financial details" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Field name="bankName" label="Bank Name" placeholder="Enter bank name" value={form.bankName} onChange={handleChange} />
          <Field name="branchName" label="Branch Name" placeholder="Enter branch name" value={form.branchName} onChange={handleChange} />
          <Field name="ifscCode" label="IFSC Code" placeholder="Enter IFSC code" value={form.ifscCode} onChange={handleChange} />
          <Field name="accountNumber" label="Account Number" placeholder="Enter account number" value={form.accountNumber} onChange={handleChange} />
        </div>

        {/* ================= SECTION 3 ================= */}
        <SectionTitle title="Vehicle details" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Field name="vehicleNumber" label="Vehicle Number" placeholder="Enter vehicle number" value={form.vehicleNumber} onChange={handleChange} />
          <Field name="rcNumber" label="RC Number" placeholder="Enter RC number" value={form.rcNumber} onChange={handleChange} />
          <Field name="fleetType" label="Fleet Type" placeholder="Enter fleet type" value={form.fleetType} onChange={handleChange} />
          <Field name="fuelType" label="Fuel Type" placeholder="Enter fuel type" value={form.fuelType} onChange={handleChange} />

          <Field name="insuranceExpiry" label="Insurance Expiry" placeholder="Select insurance expiry" value={form.insuranceExpiry} onChange={handleChange} />
          <Field name="permitValidity" label="Permit Validity" placeholder="Select permit validity" value={form.permitValidity} onChange={handleChange} />
          <Field name="pucValidity" label="PUC Validity" placeholder="Select PUC expiry" value={form.pucValidity} onChange={handleChange} />
          <Field name="gpsInstalled" label="GPS Installed" placeholder="Yes / No" value={form.gpsInstalled} onChange={handleChange} />
        </div>

        {/* ================= SUBMIT BUTTON ================= */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-emerald-700 to-emerald-600 text-white font-semibold px-10 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Sending...' : 'Submit Details'}
          </button>
        </div>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}

/* ------------------ COMPONENTS ------------------ */

function SectionTitle({ title }) {
  return (
    <h2 className="text-2xl font-semibold text-[#14532d] mb-4 border-b pb-2 border-[#c9c1b4]">
      {title}
    </h2>
  );
}

function Field({ label, className = "", placeholder = "", name, value, onChange }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="h-[48px] bg-[#d6cdbd] rounded-lg shadow-sm px-3 text-gray-900 outline-none placeholder-gray-600 focus:ring-2 focus:ring-emerald-700"
      />
    </div>
  );
}
