'use client';

import { useState } from 'react';

export default function AdminForm({
  formFields,
  initialData,
  actionUrl,
  successMessage,
  failMessage,
  buttonText,
}) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    for (const key in payload) {
      payload[key] = Number(payload[key]);
    }

    try {
      const res = await fetch(actionUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include',
      });

      if (!res.ok) throw new Error(failMessage);
      setMessage(successMessage);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {formFields.map(([name, label, type]) => (
          <div key={name} className="flex flex-col">
            <label
              htmlFor={name}
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {label}
            </label>
            <input
              type={type}
              id={name}
              name={name}
              defaultValue={initialData?.[name] ?? ''}
              required
              className="w-full max-w-xs border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        {buttonText}
      </button>

      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
