"use client";

import { ResponsiveTimeRange } from "@nivo/calendar";
import { Card } from "../ui/card";

const MyResponsiveTimeRange = (props: any /* see data tab */) => {
  return (
    <ResponsiveTimeRange
      data={props.data}
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  );
};

export default function Calendar() {
  const data = [
    {
      value: 38,
      day: "2018-06-25",
    },
    {
      value: 229,
      day: "2018-05-05",
    },
    {
      value: 97,
      day: "2018-06-17",
    },
    {
      value: 360,
      day: "2018-07-10",
    },
    {
      value: 119,
      day: "2018-07-09",
    },
    {
      value: 101,
      day: "2018-04-04",
    },
    {
      value: 259,
      day: "2018-06-24",
    },
    {
      value: 136,
      day: "2018-06-20",
    },
    {
      value: 180,
      day: "2018-04-18",
    },
    {
      value: 226,
      day: "2018-04-22",
    },
    {
      value: 283,
      day: "2018-06-13",
    },
    {
      value: 143,
      day: "2018-06-08",
    },
    {
      value: 87,
      day: "2018-05-25",
    },
    {
      value: 254,
      day: "2018-05-19",
    },
    {
      value: 374,
      day: "2018-08-11",
    },
    {
      value: 176,
      day: "2018-05-02",
    },
    {
      value: 116,
      day: "2018-04-03",
    },
    {
      value: 54,
      day: "2018-08-05",
    },
    {
      value: 63,
      day: "2018-04-05",
    },
    {
      value: 290,
      day: "2018-05-29",
    },
    {
      value: 396,
      day: "2018-06-15",
    },
    {
      value: 55,
      day: "2018-07-18",
    },
    {
      value: 121,
      day: "2018-08-07",
    },
    {
      value: 155,
      day: "2018-07-03",
    },
    {
      value: 179,
      day: "2018-05-30",
    },
    {
      value: 218,
      day: "2018-04-07",
    },
    {
      value: 126,
      day: "2018-07-06",
    },
    {
      value: 78,
      day: "2018-04-09",
    },
    {
      value: 2,
      day: "2018-05-06",
    },
    {
      value: 65,
      day: "2018-07-25",
    },
    {
      value: 4,
      day: "2018-05-28",
    },
    {
      value: 31,
      day: "2018-07-28",
    },
    {
      value: 340,
      day: "2018-08-03",
    },
    {
      value: 217,
      day: "2018-06-06",
    },
    {
      value: 55,
      day: "2018-06-12",
    },
    {
      value: 18,
      day: "2018-05-09",
    },
    {
      value: 294,
      day: "2018-05-13",
    },
    {
      value: 348,
      day: "2018-07-30",
    },
    {
      value: 259,
      day: "2018-07-05",
    },
    {
      value: 234,
      day: "2018-08-02",
    },
    {
      value: 120,
      day: "2018-06-19",
    },
    {
      value: 166,
      day: "2018-04-02",
    },
    {
      value: 192,
      day: "2018-07-15",
    },
    {
      value: 194,
      day: "2018-07-16",
    },
    {
      value: 232,
      day: "2018-07-19",
    },
    {
      value: 256,
      day: "2018-05-14",
    },
    {
      value: 260,
      day: "2018-05-24",
    },
    {
      value: 44,
      day: "2018-04-26",
    },
    {
      value: 221,
      day: "2018-04-11",
    },
    {
      value: 188,
      day: "2018-04-21",
    },
    {
      value: 378,
      day: "2018-07-23",
    },
    {
      value: 267,
      day: "2018-07-27",
    },
  ];
  return (
    <Card>
      <MyResponsiveTimeRange data={data} />
    </Card>
  );
}
