import { Chart } from "@/types/chart";
import React, { useEffect, useState } from "react";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";
import { motion, Variants } from "framer-motion";

interface PropType {
  refresh: () => void;
  charts: Chart[];
}

function ChartsCards(props: PropType) {
  const { refresh, charts } = props;

  return (
    <div className="flex w-full">
      <motion.div className="container grid grid-cols-4 gap-6 w-full">
        {charts.map((chart, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index / 8 }}
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
      </motion.div>
    </div>
  );
}

export default ChartsCards;
