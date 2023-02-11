import React from "react";
import Card from "./components/card/Card";

const IMAGES = [
  { src: "assets/bulb-off.png", width: 100, height: 200 },
  { src: "assets/bulb-on.png", width: 100, height: 200 },
  { src: "assets/plant.png", width: 200, height: 200 },
];

const SURPRISES = [
  { name: "Afek", color: "green", imageIndex: 1 },
  { name: "Hadriel", color: "blue", imageIndex: 2 },
];

export default function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
      <Card surprises={SURPRISES} images={IMAGES} />
      <Card surprises={SURPRISES} images={IMAGES} />
      <Card surprises={SURPRISES} images={IMAGES} />
      <Card surprises={SURPRISES} images={IMAGES} />
      <Card surprises={SURPRISES} images={IMAGES} />
      <Card surprises={SURPRISES} images={IMAGES} />
    </div>
  );
}
