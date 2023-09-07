import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  PieSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import * as React from "react";

const PieChartComponent = ({ salesData }) => {
  return (
    <div>
      <ChartComponent
        title="Sales Analysis"
        width="600"
        primaryXAxis={{ valueType: "Category", title: "Month" }}
        primaryYAxis={{ title: "Sales" }}
        legendSettings={{ visible: true }}
      >
        <Inject services={[PieSeries, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Pie"
            dataSource={salesData}
            xName="month"
            yName="sales"
            name="Sales"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
export default PieChartComponent;
