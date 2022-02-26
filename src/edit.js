import axios from "axios";
import $ from "jquery";
import validate from "jquery-validation";

const Edit = {
    async render(id) {
        const { data } = await axios.get('http://localhost:3001/products/' + id)
        console.log(data);
        return/*html*/`
        <div class="container">
        <h1>Sửa sản phẩm</h1>
        <form id="addFrom">
          <div class="mb-3">
            <label for="name" class="form-label">Tên</label>
            <input type="text" value="${data.name}" class="form-control" id="name" aria-describedby="name">
          </div>
          <div class="mb-3">
            <label for="img" class="form-label">Ảnh</label>
            <input type="text" value="${data.img}" class="form-control" id="img" aria-describedby="img">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Giá</label>
            <input type="text" value="${data.price}" class="form-control" id="price" aria-describedby="price">
          </div>
          <div class="mb-3">
            <label for="desc" class="form-label">Mô tả</label>
            <input type="text" value="${data.desc}" class="form-control" id="desc" aria-describedby="desc">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
        `
    },
    afterRender(id) {
        $('#addFrom').validate({
            rules: {
                "name": {
                    require: true
                },
                "price": {
                    require: true
                },
                "desc": {
                    require: true
                },
            },
            submitHandler() {
                axios.put('http://localhost:3001/products/' + id, {
                    id,
                    name: $('#name').val(),
                    img: $('#img').val(),
                    price: $('#price').val(),
                    desc: $('#desc').val()
                })
                document.location.href = "/product";
            }

        })
    }
}
export default Edit;