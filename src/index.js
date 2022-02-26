import axios from "axios";

const List = {
    async render() {
        const { data } = await axios.get('http://localhost:3001/products');
        console.log(data);
        return/*html*/`
        <div class="container">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Tên</th>
        <th scope="col">Ảnh</th>
        <th scope="col">Giá</th>
        <th scope="col">Mô tả</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    ${data.map((prd, i) => /*html*/`
    <tr>
        <th scope="row">${i + 1}</th>
        <td>${prd.name}</td>
        <td><img src="${prd.img}" alt="" width = "50"></td>
        <td>${prd.price}</td>
        <td>${prd.desc}</td>
        <td>
        <a href="/product/${prd.id}/edit" class= "btn btn-danger">Sủa</a>
        <button data-id = "${prd.id}" class= "btn btn-danger">Xóa</button>
        </td>
      </tr>
    `).join("")}
    </tbody>
  </table>
</div>
        `
    },
    afterRender() {
        const btn = document.querySelectorAll('.btn');
        btn.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function () {
                axios.delete(`http://localhost:3001/products/${id}`);
            })
        })
    }
}
export default List;