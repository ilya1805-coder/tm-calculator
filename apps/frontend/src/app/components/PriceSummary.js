export default function PriceSummary({
  applicationPrice,
  registrationPrice,
  totalPrice,
}) {
  return (
    <div className="text-sm space-y-1">
      <div className="flex justify-between">
        <p>Preparation of documents and filing of the trademark application:</p>
        <p className="font-medium">{applicationPrice} UAH</p>
      </div>

      <div className="flex justify-between">
        <p>
          Trademark registration and issuance of the electronic certificate
          (after the decision on registration is made):
        </p>
        <p className="font-medium">{registrationPrice} UAH</p>
      </div>

      <div className="flex justify-between">
        <p className="font-medium">Total (excluding registration cost):</p>
        <p className="font-medium">{applicationPrice} UAH</p>
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="flex justify-between">
        <p className="font-medium">
          Including a 10% discount on services when ordering online:
        </p>
        <p className="font-semibold">{totalPrice} UAH</p>
      </div>
    </div>
  );
}
