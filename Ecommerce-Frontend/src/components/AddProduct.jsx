import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
    releaseDate: "",
    productAvailable: false,
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
        "product",
        new Blob([JSON.stringify(product)], { type: "application/json" })
    );

    axios
        .post("http://localhost:8080/api/product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Product added successfully:", response.data);
          alert("Product added successfully");
          // Opcional: Reiniciar el formulario aquí
        })
        .catch((error) => {
          console.error("Error adding product:", error);
          alert("Error adding product");
        });
  };

  return (
      <div className="container" style={{ backgroundColor: "lightgrey" }}>
        <div className="center-container" style={{ marginTop: "7rem", backgroundColor: "darkblue" }}>
          <form className="row g-3 pt-5" style={{ backgroundColor: "dimgrey" }} onSubmit={submitHandler}>
            <div className="col-md-6">
              <label className="form-label">
                <h6>Nombre</h6>
              </label>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  onChange={handleInputChange}
                  value={product.name}
                  name="name"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">
                <h6>Marca</h6>
              </label>
              <input
                  type="text"
                  name="brand"
                  className="form-control"
                  placeholder="Ingrese la Marca"
                  value={product.brand}
                  onChange={handleInputChange}
                  id="brand"
              />
            </div>
            <div className="col-12">
              <label className="form-label">
                <h6>Descripción</h6>
              </label>
              <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese la descripción del producto"
                  value={product.description}
                  name="description"
                  onChange={handleInputChange}
                  id="description"
              />
            </div>
            <div className="col-5">
              <label className="form-label">
                <h6>Precio</h6>
              </label>
              <input
                  type="number"
                  className="form-control"
                  placeholder="Ej: $1000"
                  onChange={handleInputChange}
                  value={product.price}
                  name="price"
                  id="price"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">
                <h6>Categoría</h6>
              </label>
              <select
                  className="form-select"
                  value={product.category}
                  onChange={handleInputChange}
                  name="category"
                  id="category"
              >
                <option value="">Seleccione categoría</option>
                <option value="Autos">Autos</option>
                <option value="servicios">Servicios</option>
                <option value="taller">Taller</option>
                <option value="neumaticos">Neumáticos</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">
                <h6> Cantidad Stock </h6>
              </label>
              <input
                  type="number"
                  className="form-control"
                  placeholder="Stock Remanente"
                  onChange={handleInputChange}
                  value={product.stockQuantity}
                  name="stockQuantity"
                  id="stockQuantity"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">
                <h6>Fecha de Lanzamiento</h6>
              </label>
              <input
                  type="date"
                  className="form-control"
                  value={product.releaseDate}
                  name="releaseDate"
                  onChange={handleInputChange}
                  id="releaseDate"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">
                <h6>Imagen</h6>
              </label>
              <input
                  className="form-control"
                  type="file"
                  onChange={handleImageChange}
              />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="productAvailable"
                    id="gridCheck"
                    checked={product.productAvailable}
                    onChange={(e) =>
                        setProduct({ ...product, productAvailable: e.target.checked })
                    }
                />
                <label className="form-check-label" htmlFor="gridCheck">Producto Disponible</label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default AddProduct;
