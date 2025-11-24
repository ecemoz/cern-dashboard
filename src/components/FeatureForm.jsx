import { useState } from "react";

const defaultValues = {
  pt1: 0, eta1: 0, phi1: 0, E1: 0, Q1: 0,
  pt2: 0, eta2: 0, phi2: 0, E2: 0, Q2: 0, M: 0
};

export default function FeatureForm({ onSubmit }) {
  const [values, setValues] = useState(defaultValues);

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Feature Input</h2>

      <div className="grid grid-cols-2 gap-3">
        {Object.keys(values).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-semibold">{key}</label>
            <input
              type="number"
              className="border p-2 rounded-md"
              value={values[key]}
              onChange={(e) =>
                setValues({ ...values, [key]: Number(e.target.value) })
              }
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(values)}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg w-full"
      >
        Predict
      </button>
    </div>
  );
}
