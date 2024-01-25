import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const NewProduct = () => {
  const [name, SetName] = useState<string>("");
  const [price, SetPrice] = useState<number>();
  const [stock, SetStock] = useState<number>();
  const [photo, SetPhoto] = useState<string>();

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") SetPhoto(reader.result);
      };
    }
  };

  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="product-management">
        <article>
          <form>
            <h2>New Product</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => SetName(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="">Price</label>
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => SetPrice(Number(e.target.value))}
                required
              />
            </div>

            <div>
              <label htmlFor="">Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => SetStock(Number(e.target.value))}
                required
              />
            </div>

            <div>
              <label htmlFor="">Photo</label>
              <input type="file" onChange={changeImageHandler} required />
            </div>

            {photo && <img src={photo} alt="Product Image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
