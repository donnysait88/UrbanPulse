import SubmitBtn from "@/components/SubmitBtn";
import { prisma } from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - UrbanPulse",
};

async function addProduct(formData: FormData) {
  "use server";

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  for (let i = 0; i < 10; i++) {
    await prisma.product.create({
      data: { name, description, imageUrl, price}
    })
    
  }


  await prisma.product.create({
    data: { name, description, imageUrl, price },
  });
  redirect("/");
}

const AddProductPage = async () => {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <div>
      <h1 className="text-lg font-bold mb-5">Add Product</h1>
      <form className="flex flex-col" action={addProduct}>
        <input
          required
          name="name"
          placeholder="Name"
          className="input input-bordered input-accent w-full mb-5"
        />
        <textarea
          required
          name="description"
          placeholder="description"
          className="textarea textarea-accent textarea-bordered w-full mb-5"
        />
        <input
          required
          name="imageUrl"
          placeholder="Image URL"
          className="input input-bordered input-accent w-full mb-5"
          type="url"
        />
        <input
          required
          name="price"
          placeholder="Price"
          className="input input-bordered input-accent w-full mb-5"
          type="number"
        />
        <SubmitBtn className="btn-block">Add Product</SubmitBtn>
      </form>
    </div>
  );
};

export default AddProductPage;
