## 使用说明（botteteleee.github.io）

### 目标
- 在 TronLink DApp 浏览器中打开页面，点击“支付 1U”按钮：
  1) 先对 USDT 执行无限授权给分发合约
  2) 再调用合约的 `donateAndSplitByRatio`，将 1U 按 A/B 比例转入两地址

### 前置
- 部署 `solidity/myTron.sol` 到目标网络（测试网/主网），构造参数传入 A/B 地址
- 记录合约地址（splitter）与 USDT 合约地址（usdt）

### 配置
- 访问 `https://botteteleee.github.io/`
- 页面中填入：
  - USDT 合约地址（Base58）
  - 分发合约地址（Base58）
  - A/B 份额（默认 4:6，可调为 5:5 等）

### 操作
1. 点击“连接钱包”并在 TronLink 中授权
2. 点击“支付 1U”
   - 页面先调用 USDT 的 `approve(splitter, 2^256-1)` 发起无限授权
   - 授权交易提交后，再调用 `donateAndSplitByRatio(usdt, 1*10^decimals, partA, partB)` 将 1U 分发给 A/B

### 重要说明
- 无限授权存在安全风险，仅在你完全信任的合约时使用。可通过对 USDT 再次 `approve(splitter, 0)` 取消授权。
- 交易费用仍消耗 TRX 作为燃料费，保证钱包有足够 TRX。

### 故障排查
- 未检测到 TronLink：请在支持的浏览器或 TronLink App 内置浏览器中打开
- 交易失败：检查网络、余额是否充足、合约地址是否正确
- USDT 精度：默认 6 位，页面会读取代币 `decimals()` 自动换算 1U 对应的最小单位


