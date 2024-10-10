import { Chart } from "@/types/chart";
import React from "react";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";
import { motion } from "framer-motion";

interface PropType {
  refresh: () => void;
  charts: Chart[];
}

function ChartsCards(props: PropType) {
  const { refresh, charts } = props;
  return (
    <div className="flex w-full">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6 w-full ">
        {charts.map((chart, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index / 5 }}
          >
            <NormalCard refresh={refresh} index={index} chart={chart} />
          </motion.div>
        ))}
        {charts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <NoChartCard key={"NoCard"} refresh={refresh} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ChartsCards;
