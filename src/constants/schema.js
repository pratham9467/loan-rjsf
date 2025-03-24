const schema = {
  type: "object",
  properties: {
    businessName: { type: "string", title: "Business Name" },
    gstin: {
      type: "string",
      title: "GSTIN",
      pattern: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$",
    },
    requiredLoanAmount: {
      type: "number",
      title: "Loan Amount",
      minimum: 5000,
      maximum: 500000,
    },
    creditScore: {
      type: "number",
      title: "Credit Score",
      minimum: 300,
      maximum: 900,
    },
  },
  dependencies: {
    creditScore: {
      properties: { creditScore: { type: "number" } },
      if: { properties: { creditScore: { maximum: 699 } } },
      then: {
        required: ["guarantors", "bankStatements"],
        properties: {
          guarantors: {
            type: "array",
            title: "Guarantors",
            items: {
              type: "object",
              properties: {
                name: { type: "string", title: "Name" },
                panNumber: { type: "string", title: "PAN Number", pattern: "^[A-Z]{5}[0-9]{4}[A-Z]{1}$" },
                relationship: {
                  type: "string",
                  title: "Relationship",
                  enum: ["Father", "Mother", "Brother", "Sister", "Spouse", "Other"],
                },
                relation: { type: "string", title: "Relation (if Other)" },
              },
            },
            minItems: 2,
          },
          bankStatements: {
            type: "array",
            title: "Bank Statements",
            items: { type: "string", format: "data-url" },
            minItems: 1,
          },
        },
      },
    },
  },
};
export default schema;
