import React, { useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import uiSchema from "./constants/uiSchema";
import schema from "./constants/schema";

// Custom Range Widget
const RangeWidget = ({ id, value, onChange, schema, uiSchema }) => {
  const min = schema.minimum || 0;
  const max = schema.maximum || 100;
  const step = uiSchema["ui:options"]?.step || 1;
  const isAmount = schema.title?.toLowerCase().includes("amount");

  return (
    <div className="mt-4 w-full">
      <div className="text-center mb-2">
        <span className="text-lg font-semibold text-blue-600">
          {isAmount ? "₹" : ""}
          {(value || min).toLocaleString()}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {isAmount ? "₹" : ""}
          {min.toLocaleString()}
        </span>
        <input
          type="range"
          id={id}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          min={min}
          max={max}
          step={step}
          value={value || min}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="text-sm text-gray-600">
          {isAmount ? "₹" : ""}
          {max.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

// Custom File Widget
const FileWidget = ({ id, multiple, onChange }) => {
  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    onChange(multiple ? files : files[0]);
  };

  return (
    <input
      id={id}
      type="file"
      multiple={multiple}
      onChange={handleChange}
      className="mt-4 p-3 border border-gray-300 rounded-lg shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 w-full"
    />
  );
};

// Schema

// Widgets
const widgets = {
  file: FileWidget,
  range: RangeWidget,
};

// Form Wizard Component
function LoanApplicationForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const steps = [
    {
      schema: {
        type: "object",
        properties: {
          businessName: schema.properties.businessName,
          gstin: schema.properties.gstin,
        },
      },
      uiSchema: {
        businessName: uiSchema.businessName,
        gstin: uiSchema.gstin,
      },
    },
    {
      schema: {
        type: "object",
        properties: {
          requiredLoanAmount: schema.properties.requiredLoanAmount,
          creditScore: schema.properties.creditScore,
        },
      },
      uiSchema: {
        requiredLoanAmount: uiSchema.requiredLoanAmount,
        creditScore: uiSchema.creditScore,
      },
    },
    {
      schema: {
        type: "object",
        properties: {
          guarantors: schema.dependencies.creditScore.then.properties.guarantors,
          bankStatements: schema.dependencies.creditScore.then.properties.bankStatements,
        },
      },
      uiSchema: {
        guarantors: uiSchema.guarantors,
        bankStatements: uiSchema.bankStatements,
      },
    },
  ];

  const handleNext = () => {
    // Check if current step has errors
    const hasErrors = Object.keys(errors).length > 0;
    if (hasErrors) {
      alert("Please fix errors before proceeding.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = ({ formData }) => {
    console.log("Form Data Submitted:", formData);
  };

  const handleChange = ({ formData, errors }) => {
    setFormData(formData);
    setErrors(errors);
  };

  const shouldSkipAdditionalInfo = formData.creditScore > 699;
  const isLastStep = step === steps.length - 1 || (step === 1 && shouldSkipAdditionalInfo);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Loan Application</h1>
      <Form
        schema={steps[step].schema}
        uiSchema={steps[step].uiSchema}
        validator={validator}
        widgets={widgets}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        liveValidate>
        <div />
      </Form>
      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button
            onClick={handlePrev}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Previous
          </button>
        )}
        {!isLastStep ? (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Next
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => handleSubmit({ formData })}
            className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

export default LoanApplicationForm;
