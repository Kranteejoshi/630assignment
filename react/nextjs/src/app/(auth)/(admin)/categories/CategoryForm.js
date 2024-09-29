"use client";
import React, { useState } from "react";
import {
  Modal,
  Button,
  Card,
  CardBody,
  DatePicker,
  Image,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {} from "@nextui-org/react";
import Link from "next/link";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const FormInput = () => (
  <div>
    <Formik
      initialValues={{
        name: "",
        image: ""
      }}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange }) => (
        <div className="flex justify-center items-center">
          <Card className="flex p-4">
            <CardBody className="flex gap-2">
              <Form className="flex flex-col">
                <Input
                  name="name"
                  className={
                    errors.name
                      ? " border border-red-600 rounded-md"
                      : null
                  }
                  onChange={handleChange}
                  placeholder="Enter Name"
                />
                {errors.name && touched.name ? (
                  <div className="text-red-900 text-sm">{errors.name}</div>
                ) : null}

                <Input
                  name="image"
                  onChange={handleChange}
                  placeholder="Enter Image"
                />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
                
                <Button className="bg-[#3C5C7D] text-white" type="submit">
                  Save
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      )}
    </Formik>
  </div>
);

export default function CategoryForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen}>Add Category</Button>
      <Modal className="h-[50%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
               <FormInput/>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
