import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import * as React from "react";

const LineChartComponent = ({ salesData }) => {
  return (
    <div>
      <ChartComponent
        title="Sales Analysis"
        width="600"
        primaryXAxis={{ valueType: "Category", title: "Month" }}
        primaryYAxis={{ title: "Sales" }}
        legendSettings={{ visible: true }}
      >
        <Inject services={[LineSeries, Category, Legend]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            type="Line"
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
export default LineChartComponent;
