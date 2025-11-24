export default function ThresholdSlider({ threshold, setThreshold }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">Anomaly Threshold</h2>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={threshold}
        onChange={(e) => setThreshold(Number(e.target.value))}
        className="w-full"
      />

      <p className="mt-2 text-center text-lg font-semibold">
        {threshold.toFixed(2)}
      </p>
    </div>
  );
}
