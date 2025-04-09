import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Input } from "antd";

const PhoneInput = ({ onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const cleaned = rawValue.slice(-9);

    const formatted = cleaned.replace(
      /(\d{2})(\d{3})(\d{2})(\d{2})/,
      "$1-$2-$3-$4"
    );
    setValue(formatted);

    if (onChange) {
      onChange("+998" + cleaned);
    }
  };

  return (
    <Input
      addonBefore="+998"
      placeholder="93-596-02-46"
      value={value}
      onChange={handleChange}
      inputMode="numeric"
      maxLength={12}
      as={InputMask}
      mask="99-999-99-99"
      maskChar={null}
    />
  );
};

export default PhoneInput;
