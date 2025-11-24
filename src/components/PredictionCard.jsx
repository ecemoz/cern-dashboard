export default function PredictionCard({ result }) {
  if (!result) return null;

  const badge = (isAnomaly) =>
    isAnomaly ? (
      <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg">ANOMALY</span>
    ) : (
      <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg">NORMAL</span>
    );

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Prediction Results</h2>

      <div className="space-y-2">
        <p>Isolation Forest: {badge(result.iforest_label === -1)}</p>
        <p>Autoencoder: {badge(result.autoencoder_label === -1)}</p>
        <p>Error: {result.autoencoder_error.toFixed(6)}</p>
        <p className="pt-2 font-semibold">
          Ensemble Strong: {badge(result.ensemble_strong)}
        </p>
      </div>
    </div>
  );
}
