"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCompany } from "@/context/CompanyContext";
import { useState } from "react";
import { toast } from "react-toastify";

interface ReportMissingDataProps {
  metric: string;
}

export const ReportMissingData = ({ metric }: ReportMissingDataProps) => {
  const { companyName } = useCompany();
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    toast.success(
      `Thank you! We've received your report about ${metric.toLowerCase()} at ${companyName}.`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
        theme: "light",
      },
    );
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="text-sm text-gray-500 cursor-pointer hover:text-gray-700 hover:underline">
          Not reported
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report Missing Data</DialogTitle>
          <DialogDescription>
            Help us improve our data about {companyName}&apos;s{" "}
            {metric.toLowerCase()}. If you have information about this metric,
            please share it with us.
          </DialogDescription>
        </DialogHeader>
        <button onClick={handleSubmit}>Submit Report</button>
      </DialogContent>
    </Dialog>
  );
};
