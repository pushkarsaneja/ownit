import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getReportData } from "./logic";

function SingleReport() {
  const { reportId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getReportData(reportId)
      .then((res) => {
        console.log(res);
        setData(res.report);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      setData(null);
    };
  }, []);

  if (loading) {
    return <h3>Loading ...</h3>;
  }
  return <div>SingleReport {reportId}</div>;
}

export default SingleReport;

/**
 *
 * profile photo edit
 * searching in transactions and products sorting
 * amount in transfer
 * authority wala page
 */
