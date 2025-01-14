const name = "小米手机"
alert(`你在购买的商品是：${name}`)
const price = 1999
alert(`商品价格是：${price}`)
let number = prompt("请输入购买数量")
if (isNaN(number)) {
    alert("请输入数字")
number = prompt("请输入购买数量")
}
let total = price * number
let address = prompt("请输入收货地址")
document.write(`
<table>
    <tr>
        <th>商品名称</th>
        <th>商品价格</th>
        <th>商品数量</th>
        <th>总价</th>
        <th>收货地址</th>
    </tr>
    <tr>
        <td>${name}</td>
        <td>${price}</td>
        <td>${number}</td>
        <td>${total}</td>
        <td>${address}</td>
    </tr>
</table>
`)