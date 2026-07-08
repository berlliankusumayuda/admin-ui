import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";
import CardExpenseComparison from "../components/Fragments/CardExpenseComparison";
import CircularProgress from "@mui/material/CircularProgress";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function Expenses() {
  const [expenses, setExpenses] = useState(null);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      const data = await expensesService();
      setExpenses(data);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        {expenses === null ? (
          <Card
            title="Expenses Comparison"
            desc={
              <div className="flex flex-col justify-center items-center h-full text-primary">
                <CircularProgress color="inherit" size={50} enableTrackSlot />
                Loading Data
              </div>
            }
          />
        ) : (
          <CardExpenseComparison data={expenses} />
        )}
        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default Expenses;
