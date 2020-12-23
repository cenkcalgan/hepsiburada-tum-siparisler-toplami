# Hepsiburada Özel Listede Bulunan Ürünlerin Toplam Fiyatı
**"Hepsiburada > Özel Listelerim"** sayfasında listelenen ürünlerin toplam tutarlarını console'a yazdıran JavaScript kod parçası. 

```javascript
var orderBlockElementsLength = 0;
var orderBlockElements = document.querySelectorAll(".hb-eryVOG.dADFFZ");
var totalPrice = 0;

if (orderBlockElements.length > orderBlockElementsLength) {
    orderBlockElementsLength = orderBlockElements.length;
    orderBlockElements.forEach(blockItem => { 
          var price = parseFloat(blockItem.textContent.replace(" TL","").replace(".","").replace(",","."));
          totalPrice += price;
          var title =  document.querySelectorAll(`#${blockItem.id.replace('Price','Title')}`)[0].textContent
          console.log(`%c ${title} : %c ${price} TL`, 'color: #000;','color: #ff6600; font-weight: bold;');
    });
    console.log("----------------------------------------------");
    console.log(` ${orderBlockElements.length} adet ürünün toplam tutarı %c${totalPrice.toFixed(2)} %cTL.'dir.`, 'color: #439e4a; font-weight: bold;', 'color: black; font-weight: normal;');
}

```
![ozel-listelerim](https://user-images.githubusercontent.com/38789301/102998597-86faca80-4538-11eb-8d62-d70489353a44.png)

![ozel-listelerim-console](https://user-images.githubusercontent.com/38789301/102998600-87936100-4538-11eb-8eac-76cbad7c0ee0.png)
