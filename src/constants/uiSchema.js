const uiSchema = {
  businessName: {
    "ui:classNames": `
        mt-4 
        [&>input]:p-3 
        [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
        [&>input]:shadow-sm 
        [&>input]:hover:border-blue-400 
        [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
        [&>input]:transition-all [&>input]:duration-200
        [&>input]:placeholder-gray-400 [&>input]:placeholder-opacity-75 
        [&>input]:w-full
      `,
    "ui:placeholder": "Enter your business name",
  },
  gstin: {
    "ui:classNames": `
        mt-4 
        [&>input]:p-3 
        [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
        [&>input]:shadow-sm 
        [&>input]:hover:border-blue-400 
        [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
        [&>input]:transition-all [&>input]:duration-200
        [&>input]:placeholder-gray-400 [&>input]:placeholder-opacity-75 
        [&>input]:w-full
        [&>input]:invalid:border-red-500 [&>input]:invalid:text-red-600 
        [&>input]:focus:invalid:border-red-500 [&>input]:focus:invalid:ring-red-500
      `,
    "ui:placeholder": "Enter your GSTIN number",
  },
  requiredLoanAmount: {
    "ui:widget": "range",
    "ui:classNames": `
        mt-4 border rounded-lg border-gray-300 shadow-sm text-gray-600 font-semibold
        [&>input]:w-full p-4
        [&>input]:h-1 [&>input]:bg-gray-200 [&>input]:rounded-lg 
        [&>input]:appearance-none [&>input]:cursor-pointer 
        [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500
      `,
    "ui:options": {
      min: 5000,
      max: 500000,
      step: 1000,
    },
  },
  creditScore: {
    "ui:widget": "range",
    "ui:classNames": `
        mt-4 border rounded-lg border-gray-300 shadow-sm text-gray-600 font-semibold
        [&>input]:w-full p-4
        [&>input]:h-1 [&>input]:bg-gray-200 [&>input]:rounded-lg 
        [&>input]:appearance-none [&>input]:cursor-pointer 
        [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500
      `,
    "ui:options": {
      min: 300,
      max: 900,
      step: 1,
    },
  },
  guarantors: {
    "ui:classNames": `border border-gray-300 rounded-lg shadow-sm p-4 font-semibold`,
    "ui:options": { addable: true, orderable: true, removable: true },
    items: {
      name: {
        "ui:classNames": `
            mt-6 font-semibold
            [&>input]:p-3 
            [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
            [&>input]:shadow-sm 
            [&>input]:hover:border-blue-400 
            [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
            [&>input]:transition-all [&>input]:duration-200
            [&>input]:placeholder-gray-400 [&>input]:placeholder-opacity-75 
            [&>input]:w-full
          `,
        "ui:placeholder": "Enter your guarantors name",
      },
      panNumber: {
        "ui:classNames": `
            mt-4 font-semibold
            [&>input]:p-3 
            [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
            [&>input]:shadow-sm 
            [&>input]:hover:border-blue-400 
            [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
            [&>input]:transition-all [&>input]:duration-200
            [&>input]:placeholder-gray-400 [&>input]:placeholder-opacity-75 
            [&>input]:w-full
          `,
        "ui:placeholder": "Enter your PAN number",
      },
      relationship: {
        "ui:classNames": `
            mt-4 font-semibold border border-gray-300 rounded-lg shadow-sm p-4
            [&>input]:p-3
            [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
            [&>input]:shadow-sm 
            [&>input]:hover:border-blue-400 
            [&>input]:focus:outline [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
            [&>input]:transition-all [&>input]:duration-200
            [&>input]:placeholder-gray-400 [&>input]:placeholder-opacity-75 
            [&>input]:w-full
          `,
        "ui:placeholder": "select",
      },
      relation: {
        "ui:classNames": `
            mt-4 font-semibold
            [&>input]:p-3 
            [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
            [&>input]:shadow-sm 
            [&>input]:hover:border-blue-400 
            [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
            [&>input]:transition-all [&>input]:duration-200
            [&>input]:placeholder-gray-400 [&>input]:placeholder-opacity-75 
            [&>input]:w-full
          `,
      },
    },
  },
  bankStatements: {
    "ui:widget": "file",
    "ui:classNames": `
        mt-4 font-semibold
        [&>input]:p-3 
        [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg 
        [&>input]:shadow-sm 
        [&>input]:hover:border-blue-400 
        [&>input]:focus:outline-none [&>input]:focus:ring-2 [&>input]:focus:ring-blue-500 [&>input]:focus:border-blue-500 
        [&>input]:transition-all [&>input]:duration-200
        [&>input]:w-full
      `,
  },
};
export default uiSchema;
