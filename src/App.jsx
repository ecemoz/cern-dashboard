import { useState } from "react";
import FeatureForm from "./components/FeatureForm";
import PredictionCard from "./components/PredictionCard";
import ThresholdSlider from "./components/TresholdSlider";
import ErrorChart from "./components/ErrorChart";
import { predict } from "./api/predict";

export default function App() {
  const [result, setResult] = useState(null);
  const [threshold, setThreshold] = useState(0.5);
  const [history, setHistory] = useState([]);

  async function handlePredict(values) {
    const r = await predict(values);

    setResult(r);
    setHistory(prev => [...prev, { id: prev.length, error: r.autoencoder_error }]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center gap-6">
      <FeatureForm onSubmit={handlePredict} />
      <PredictionCard result={result} />
      <ThresholdSlider threshold={threshold} setThreshold={setThreshold} />
      <ErrorChart data={history} />
    </div>
  );
}