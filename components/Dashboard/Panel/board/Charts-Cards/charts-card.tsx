import { Chart } from "@/types/chart";
import React, { useEffect, useState } from "react";
import NoChartCard from "./no-chart";
import NormalCard from "./normal-card";
import { motion, Variants } from "framer-motion";
import { Pagination } from "@nextui-org/react";

interface PropType {
  refresh: () => void;
  charts: Chart[];
}

function ChartsCards(props: PropType) {
  const { refresh, charts } = props;
  const [segmentChart, setSegmentChart] = useState(0);

  return (
    <div className="flex w-full">
      <motion.div className="container grid md:grid-cols-4 grid-cols-1 gap-6 md:w-full w-96">
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
      <Pagination
        className="flex w-full justify-center align-bottom"
        isCompact
        showControls
        total={Math.ceil(charts.length / 8)}
        initialPage={1}
        onChange={(page) => setSegmentChart(page - 1)}
      />
    </div>
  );
}

export default ChartsCards;
