

const ProductForm = ({ handleSubmit, formVeri, setFormVeri }) => {
  return (
    <article
      id="add-product"
      className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
    >
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formVeri.name}
            onChange={(e) => setFormVeri({ ...formVeri, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formVeri.price}
            onChange={(e) =>
              setFormVeri({ ...formVeri, price: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            value={formVeri.amount}
            onChange={(e) =>
              setFormVeri({ ...formVeri, amount: e.target.value })
            }
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formVeri.image}
            aria-describedby="basic-addon3"
            onChange={(e) =>
              setFormVeri({ ...formVeri, image: e.target.value })
            }
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
