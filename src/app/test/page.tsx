"use client";
import BecomeRetailer from "@/components/common/BecomeRetailer";
import CheckBox from "@/components/common/inputs/CheckBox";
import Input from "@/components/common/inputs/Input";
import Radio from "@/components/common/inputs/Radio";
import Toggle from "@/components/common/inputs/Toggle";
import SortBySelect from "@/components/common/inputs/Select";
import SignUp from "@/components/common/SignUp";
import React, { useState } from "react";
import ImageGallery from "@/components/common/ImageGallery";

const Test = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(true); // Pre-checked
  const [isChecked3, setIsChecked3] = useState(false);
  const [selected, setSelected] = useState("");
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="py-28">
      <Input
        name="name"
        type="text"
        label="Name"
        placeholder="Enter your name"
      />

      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        focusColor="#1ecbe1"
      />

      <CheckBox label="Remember me" checked focusColor="#1ecbe1" />

      <div className="p-6 space-y-6">
        <h2 className="text-xl font-bold mb-4">Checkbox Examples</h2>

        <div className="space-y-4">
          {/* Default checkbox (unchecked) */}
          <CheckBox
            label="Unchecked"
            checked={isChecked1}
            onChange={setIsChecked1}
          />

          {/* Pre-checked checkbox */}
          <CheckBox
            label="Checked"
            checked={isChecked2}
            onChange={setIsChecked2}
          />

          {/* Custom color checkbox */}
          <CheckBox
            label="Custom Color"
            checked={isChecked3}
            onChange={setIsChecked3}
            focusColor="#567876"
          />

          {/* Disabled checkbox */}
          <CheckBox label="Disabled Option" checked={false} disabled={true} />
        </div>
      </div>

      <Radio
        label="Option A"
        checked={selected === "a"}
        onChange={() => setSelected("a")}
        focusColor="blue-500"
      />

      <Toggle
        label="Enable notifications"
        checked={enabled}
        onChange={setEnabled}
        focusColor="green-600"
      />
      <SortBySelect
        label="Sort by"
        options={[
          { label: "A", value: "a" },
          { label: "B", value: "b" },
          { label: "C", value: "c" },
        ]}
      />

      <SignUp />
      <BecomeRetailer />
      <div className="mt-44">

      <ImageGallery images={["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png", "/images/6.png", "/images/7.png"]} id="test" focusColor="var(--color-secondary, --color-primary)"/>
      </div>
    </div>
  );
};

export default Test;
