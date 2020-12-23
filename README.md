# Hepsiburada Siparişler Toplamı
**"Hepsiburada > Siparişlerim"** sayfasında listelenen siparişlerin aylık ve genel toplam tutarlarını console'a yazdıran JavaScript kod parçası. 

**Not:** 

* Genel toplam, sayfa kaydırıldıkça yüklenecek geçmiş sipariş kayıtlarına göre güncellenecektir.
* Kod parçası, sayfanın HTML düzenine ve CSS sınıf tanımlamalarına göre çalışmaktadır.

```javascript
var orderBlockElementsLength = 0;

function calculateOrderAmount(){
  var orderBlockElements = document.querySelectorAll(".order-block");
  var totalPrice = 0;

  if (orderBlockElements.length > orderBlockElementsLength) {
      orderBlockElementsLength = orderBlockElements.length;
      orderBlockElements.forEach(blockItem => {
        var orderElements = blockItem.querySelectorAll(".e2e-orderRow-price");
        var blockTotalPrice = 0;

          orderElements.forEach(elementItem => {
            blockTotalPrice += parseFloat(elementItem.textContent.replace(" TLKredi Kartı","").replace(".","").replace(",","."));
          });
          totalPrice += blockTotalPrice;
          console.log(`%c${blockItem.querySelector(".month-bar").getAttribute('aria-label')}:`, 'color: #ff6600; font-weight: bold;');
          console.log(` ${orderElements.length} adet siparişin toplam tutarı %c${blockTotalPrice.toFixed(2)} %cTL.'dir.`, 'color: #439e4a; font-weight: bold;', 'color: black; font-weight: normal;');
      });
      console.log("----------------------------------------------");
      console.log(`%c Listelenen Siparişlerin Toplam Tutarı: %c${totalPrice.toFixed(2)} TL.'dir.`, 'font-weight: bold;', 'color: #439e4a; font-weight: bold;');
  }
}

document.addEventListener('scroll', () => {
   calculateOrderAmount();
});

calculateOrderAmount();
```

![siparislerim](https://user-images.githubusercontent.com/20703102/102996063-7136d680-4533-11eb-9147-efdfbc05f30e.png)

![siparislerim-console](https://user-images.githubusercontent.com/20703102/102996170-a6432900-4533-11eb-87e9-3c6a184e0494.png)
