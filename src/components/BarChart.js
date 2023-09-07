import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  BarSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import * as React from "react";

const BarChartComponent = ({ salesData }) => {
  return (
    <div>
      <ChartComponent
        title="Sales Analysis"
        width="600"
        primaryXAxis={{ valueType: "Category", title: "Month" }}
        primaryYAxis={{ title: "Sales" }}
        legendSettings={{ visible: true }}
      >
        <Inject services={[BarSeries, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Bar"
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
export default BarChartComponent;
