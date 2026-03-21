"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import * as Yup from "yup";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
// import { db } from "@/config/firebase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { db } from "@/config/firbase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

interface ViewProps {
  session?: any
}





export default function postForm({ session }:ViewProps ) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false); // Modal state

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    diseaseName: "",
    cause: "",
    symtoms: "",
    recommendedHospital: "",
    preventiveMeasures: "",
  };

  const validationSchema = Yup.object({
    diseaseName: Yup.string()
      .min(3, "Disease name is too short")
      .max(50, "Maximum 50 characters")
      .required("Disease name is required"),

    cause: Yup.string()
      .min(10, "Please explain the cause clearly")
      .required("Cause is required"),

    symtoms: Yup.string()
      .min(10, "Please list noticeable symptoms")
      .required("Symptoms are required"),

    recommendedHospital: Yup.string()
      .min(3, "Hospital name is too short")
      .required("Recommended hospital is required"),

    preventiveMeasures: Yup.string()
      .min(10, "Please explain preventive measures")
      .required("Preventive measures are required"),
  });

  return (
    <main className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-2xl font-bold text-green-700 text-center mb-2">
          Health Africa Disease Report
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Share information about common diseases and recommended healthcare facilities.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setSubmitting(true);

            try {
              const details = {
                ...values,
                userId: session?.user?.id,
                userName: session?.user?.name,
                userImage: session?.user?.image,  
                timestamp: new Date().toLocaleDateString(),
              };

              // Save to Firestore
              await addDoc(collection(db, "diseaseReports"), details);

              resetForm();
              handleOpen(); // Show success modal
            } catch (error) {
              console.error("Error submitting report >>>>", error);
              alert("An error occurred while submitting your report. Please try again.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          <Form className="space-y-5">
            {/* Disease Name */}
            <div>
              <label className="block font-medium mb-1">Disease Name</label>
              <Field
                type="text"
                name="diseaseName"
                placeholder="e.g. Malaria"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <ErrorMessage name="diseaseName" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Cause */}
            <div>
              <label className="block font-medium mb-1">Cause</label>
              <Field
                as="textarea"
                name="cause"
                placeholder="Describe what causes this disease..."
                className="w-full border rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <ErrorMessage name="cause" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Symptoms */}
            <div>
              <label className="block font-medium mb-1">Symptoms</label>
              <Field
                as="textarea"
                name="symtoms"
                placeholder="List common symptoms..."
                className="w-full border rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <ErrorMessage name="symtoms" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Recommended Hospital */}
            <div>
              <label className="block font-medium mb-1">Recommended Hospital</label>
              <Field
                type="text"
                name="recommendedHospital"
                placeholder="Enter hospital name..."
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <ErrorMessage name="recommendedHospital" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Preventive Measures */}
            <div>
              <label className="block font-medium mb-1">Preventive Measures</label>
              <Field
                as="textarea"
                name="preventiveMeasures"
                placeholder="List preventive measures..."
                className="w-full border rounded-lg p-3 h-24 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <ErrorMessage name="preventiveMeasures" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
                submitting ? "cursor-not-allowed opacity-70" : "cursor-pointer"
              }`}
            >
              {submitting ? <FiLoader className="text-2xl animate-spin" /> : (
                <span className="flex items-center gap-2">
                  Submit Report <FaRegPaperPlane />
                </span>
              )}
            </button>
          </Form>
        </Formik>
      </div>

      {/* Success Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="mx-auto bg-green-200 p-5 w-fit rounded-full">
              <FaRegCircleCheck className="text-green-700 text-5xl" />
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-center">
            Your Disease Report Has Been Successfully Submitted.
          </Typography>
        </Box>
      </Modal>
    </main>
  );
}