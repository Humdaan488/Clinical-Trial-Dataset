// src/TableData.js : Custom hook for fetching subjects data from Endpoint

import { useEffect, useState } from "react";
import axios from "axios";

const useTableData = () => {
  // State to store the subjects data
  const [tableSubjects, setTableSubjects] = useState([]);
  // State to track loading status (track whether data is currently being fetched to provide a better user experience)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to consume mocked subjects data from endpoint
    const getSubjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://055d8281-4c59-4576-9474-9b4840b30078.mock.pstmn.io/subjects"
        );
        const transformedData = response.data.data.map((item) => ({
          id: item.id,
          name: item.name,
          age: item.age,
          gender: item.gender,
          diagnosisDate: item.diagnosisDate,
          // Convert 'status' to 'isActive' boolean
          isActive: item.status === "Active",
        }));
        setTableSubjects(Array.isArray(transformedData) ? transformedData : []);
      } catch (error) {
        console.error("Error consuming mocked subjects from endpoint:", error);
      } finally {
        // Set loading to false when the request completes
        setLoading(false);
      }
    };

    getSubjects();
  }, []);

  return { tableSubjects, loading };
};

export default useTableData;
