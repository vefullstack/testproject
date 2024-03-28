import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const AreaChart = ({ width, height, data }) => {
  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const [min, max] = d3.extent(data, (d) => d.y);
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
  }, [data, height]);

  const [xMin, xMax] = d3.extent(data, (d) => d.x);
  const xScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([xMin || 0, xMax || 0])
      .range([0, boundsWidth]);
  }, [data, width]);

  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    // Only take every nth element for custom labels
    const customLabels = data.filter((d, i) => i % Math.ceil(data.length / 5) === 0);

    const xAxisGenerator = d3.axisBottom(xScale).tickValues(customLabels.map(d => d.x));
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator)
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");
    
    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);

    // Adding extra text to X and Y axes
    svgElement
      .append("text")
      .attr("transform", `translate(${boundsWidth / 2},${boundsHeight + MARGIN.bottom - 10})`)
      .style("text-anchor", "middle")
      .text("X Axis Label");

    svgElement
      .append("text")
      .attr("transform", `translate(${-MARGIN.left + 10},${boundsHeight / 2}) rotate(-90)`)
      .style("text-anchor", "middle")
      .text("Y Axis Label");
  }, [xScale, yScale, boundsHeight, data, boundsWidth]);

  const areaBuilder = d3
    .area()
    .x((d) => xScale(d.x))
    .y1((d) => yScale(d.y))
    .y0(yScale(0));
  const areaPath = areaBuilder(data);

  const lineBuilder = d3
    .line()
    .x((d) => xScale(d.x))
    .y((d) => yScale(d.y));
  const linePath = lineBuilder(data);

  if (!linePath || !areaPath) {
    return null;
  }

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          <path
            d={areaPath}
            opacity={1}
            stroke="none"
            fill="#9a6fb0"
            fillOpacity={0.4}
          />
          <path
            d={linePath}
            opacity={1}
            stroke="#9a6fb0"
            fill="none"
            strokeWidth={2}
          />
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};

export default AreaChart;
