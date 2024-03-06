// src/DisplayTable.js : Main component to display Table and handle filtering/sorting logic

import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Loader } from "@mantine/core";
import useTableData from "./TableData";

// List of options for dropdown of Gender Attribute
const genderList = ["Male", "Female"];

const DisplayTable = () => {
  const { tableSubjects, loading } = useTableData();

  const columns = useMemo(
    () => [
      // Setting up 6 columns and their filter mechanism using subjects data consumed from endpoint
      {
        accessorKey: "name",
        header: "Name",
        filterVariant: "text",
      },
      {
        accessorKey: "age",
        header: "Age",
        filterVariant: "range",
        filterFn: "between",
        size: 80,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        filterVariant: "select",
        mantineFilterSelectProps: {
          data: genderList,
        },
      },
      {
        // Accessor function to convert string to date for filtering
        accessorFn: (originalRow) => new Date(originalRow.diagnosisDate),
        id: "diagnosisDate",
        header: "Diagnosis Date",
        filterVariant: "date-range",
        // Converting value back to string for display
        Cell: ({ cell }) => cell.getValue().toLocaleDateString(),
      },
      {
        accessorFn: (originalRow) => (originalRow.isActive ? "true" : "false"),
        id: "isActive",
        header: "Status",
        filterVariant: "checkbox",
        Cell: ({ cell }) =>
          cell.getValue() === "true" ? "Active" : "Inactive",
        size: 220,
      },
      {
        accessorKey: "id",
        header: "Unique ID",
        filterVariant: "text",
      },
    ],
    []
  );

  const tableInstance = useMantineReactTable({
    columns,
    data: tableSubjects,
    initialState: { showColumnFilters: true },
    enableRowSelection: true,
    enableColumnOrdering: true,
    enablePinning: true,
    mantineSelectCheckboxProps: {
      color: "teal",
    },
  });

  // User experience - returns loader component if data is still loading
  if (loading) return <Loader size="xl" color="blue" />;

  return <MantineReactTable table={tableInstance} />;
};

export default DisplayTable;
