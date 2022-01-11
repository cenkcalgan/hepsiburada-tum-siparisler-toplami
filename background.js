// chrome.runtime.onInstalled.addListener(function () {
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: "www.hepsiburada.com", schemes: ["https"] },
//           }),
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()],
//       },
//     ]);
//   });
// });

/*
 ** Gri ikonlar için aşağıdaki kod bloğu çözüm olarak kullanıldı.
 ** Kaynak: https://stackoverflow.com/questions/64473519/how-to-disable-gray-out-page-action-for-chrome-extension
 */
chrome.declarativeContent.onPageChanged.removeRules(async () => {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: "www.hepsiburada.com", schemes: ["https"] },
        }),
      ],
      actions: [
        new chrome.declarativeContent.SetIcon({
          imageData: {
            16: await loadImageData("images/favicon-16x16.png"),
            32: await loadImageData("images/favicon-32x32.png"),
            48: await loadImageData("images/favicon-48x48.png"),
            64: await loadImageData("images/favicon-64x64.png"),
            128: await loadImageData("images/favicon-128x128.png"),
          },
        }),
        chrome.declarativeContent.ShowAction
          ? new chrome.declarativeContent.ShowAction()
          : new chrome.declarativeContent.ShowPageAction(),
      ],
    },
  ]);
});

async function loadImageData(url) {
  const img = await createImageBitmap(await (await fetch(url)).blob());
  const { width: w, height: h } = img;
  const canvas = new OffscreenCanvas(w, h);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}
