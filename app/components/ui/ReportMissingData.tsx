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
import { AlertCircle } from "lucide-react";

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
        <span className="group inline-flex items-center gap-1.5 text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          <span className="underline underline-offset-4 decoration-gray-300 group-hover:decoration-gray-500">
            Not reported
          </span>
          <AlertCircle className="w-4 h-4" />
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
