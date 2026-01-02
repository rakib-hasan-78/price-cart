import React from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
  ResponsiveContainer
} from "recharts";
import { useProduct } from "../../Utilities/Hooks/CustomContext/CustomContext";

const Chart = () => {
  const { cart } = useProduct();

  const chartData = (cart || []).map(item => ({
    name: item.product_title,
    quantity: Number(item.quantity || 0),
    price: Number(item.price || 0),
  }));

  return (
    <div className="xxs:w-full lg:w-3/4 h-80 border">
      <ResponsiveContainer>
        <ComposedChart data={chartData}>
          <CartesianGrid />

          <XAxis dataKey="name" />

          {/* LEFT axis for quantity */}
          <YAxis yAxisId="left" />

          {/* RIGHT axis for price */}
          <YAxis yAxisId="right" orientation="right" />

          <Tooltip />
          <Legend />

          {/* Bars → quantity */}
          <Bar dataKey="quantity" yAxisId="left" />

          {/* Line → price */}
          <Line type="monotone" dataKey="price" yAxisId="right" />

          {/* Optional area for quantity */}
          <Area type="monotone" dataKey="quantity" yAxisId="left" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
