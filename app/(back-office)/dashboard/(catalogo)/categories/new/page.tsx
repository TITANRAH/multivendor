"use client";

import { categorySchema } from "@/app/Schemas/back-office/categorySchema";
import FormHeader from "@/components/backoffice/FormHeader";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TextInput from "@/components/FormInput/TextInput";
import TextAreaInput from "@/components/FormInput/TextAreaInput";
import { generateSlug } from "@/helpers";
import { UploadButton } from "@/lib/uploadthings";
import ImageInput from "@/components/FormInput/ImageInput";

function NewCategory() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      categoryName: "",
      categoryDescription: "",
      slug: "",
      imageUrl: ""
    },
  });

  // eliminar foto
  //  async function deletPic() {
  //     const fileKey = "8516ef19-5e8b-479a-842c-ddf0d7257ff7-n3ch5g.jpeg";

  //     const result = await fetch("/api/uploadthing", {
  //       method:'DELETE',
  //       body: JSON.stringify({fileKey}),
  //     });

  //     console.log(result);
  //   }

  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    values.slug = generateSlug(values.categoryName);
    values.imageUrl = imageUrl
    console.log(values);
  };

  return (
    <div>
      <FormHeader title="New Category" />
      {/* <Form {...form}> */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-4 bg-slate-50  shadow-2xl border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-slate-800 dark:border-gray-700 mx-auto my-3"
        >
          <div>
            <TextInput
              required={true}
              label={"Category Name"}
              placeholder={"Example: Category Schoes"}
              name={"categoryName"}
            />
            <TextAreaInput
              required={false}
              label={"Category Description"}
              name={"categoryDescription"}
            />

            <ImageInput
              className=""
              label="Category Image"
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              endpoint="categoryImageUploader"
            />
            {/* 
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            /> */}

            {/* <button onClick={() => deletPic()}>delete</button> */}
          </div>

          <Button
            className=" bg-lime-700 ml-2 hover:bg-lime-800 p-2 mt-4 text-white rounded"
            type="submit"
          >
            <div className="flex space-x-3 items-center ">
              <Plus />
              <span>Add Category</span>
            </div>
          </Button>
        </form>
      </Form>

      {/* - id
         - title 
         - slug 
         - description 
         - image */}
    </div>
  );
}

export default NewCategory;
