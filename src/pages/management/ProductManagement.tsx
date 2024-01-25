import { ChangeEvent, FormEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "data:image/jpeg;base64,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";

const ProductManagement = () => {
  const [name, SetName] = useState<string>("Puma Shoes");
  const [price, SetPrice] = useState<number>(2000);
  const [stock, SetStock] = useState<number>(10);
  const [photo, SetPhoto] = useState<string>(img);

  const [nameUpdate, SetNameUpdate] = useState<string>(name);
  const [priceUpdate, SetPriceUpdate] = useState<number>(price);
  const [stockUpdate, SetStockUpdate] = useState<number>(stock);
  const [photoUpdate, SetPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") SetPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    SetName(nameUpdate);
    SetPrice(priceUpdate);
    SetStock(stockUpdate);
    SetPhoto(photoUpdate);
  };

  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="product-management">
        <section>
          <strong>ID - asadgadf</strong>
          <img src={photo} alt="Product Image" />
          <p>{name}</p>
          {stockUpdate > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">NotAvailable</span>
          )}
          <h3>$ {price}</h3>
        </section>

        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Name"
                value={nameUpdate}
                onChange={(e) => SetNameUpdate(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="">Price</label>
              <input
                type="number"
                placeholder="Price"
                value={priceUpdate}
                onChange={(e) => SetPriceUpdate(Number(e.target.value))}
                required
              />
            </div>

            <div>
              <label htmlFor="">Stock</label>
              <input
                type="number"
                placeholder="Stock"
                value={stockUpdate}
                onChange={(e) => SetStockUpdate(Number(e.target.value))}
                required
              />
            </div>

            <div>
              <label htmlFor="">Photo</label>
              <input type="file" onChange={changeImageHandler} required />
            </div>

            {photoUpdate && <img src={photoUpdate} alt="Product Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
