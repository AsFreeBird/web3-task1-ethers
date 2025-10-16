# 🎯 学习目标
- 掌握以太坊 JSON-RPC 规范
- 熟练使用 ethers.js 核心功能
- 实现完整 DApp 开发流程
- 理解智能合约交互原理

# 📊 学习路线图
    A[环境搭建] --> B[钱包交互]
    B --> C[合约开发]
    C --> D[事件监听]
    D --> E[DeFi协议集成]
    E --> F[安全审计]
# 功能分阶段对应 A→F
| 阶段 | 对应项目功能 | 学习目标 | 实践示例 |
| ---- | ------------ | -------- | -------- |
| A | 环境搭建 | 项目基础环境搭建 | 初始化 Hardhat + React 项目，连接本地链与 Sepolia |
| B | 钱包交互 | 钱包连接 / 签名 / 交易发送 | 前端连接 MetaMask，读取账户余额，发送 ETH |
| C | 合约开发 | Token 合约 & NFT 合约 | Solidity 基础 / 合约部署 / ABI | 部署 ERC20，前端调用 transfer、balanceOf |
| D | 事件监听 | 交易事件监听 | Solidity Event / ethers.js / WebSocket | 实时显示 Token 转账历史，刷新前端列表 |
| E | DeFi 集成 | Uniswap & Aave | 路由合约 / 池子查询 / 借贷操作 | 实现代币兑换（swap）、查看池子利率、借贷模拟 |
| F | 安全审计 | 权限控制 / 安全防护 / 自动检测 | 重入攻击 / OpenZeppelin / Slither | 合约添加 Ownable & SafeMath，运行自动审计，前端防钓鱼签名 |



# 详细内容学习参考
## A 环境搭建 + JSON-RPC 基础
1. 环境准备 
    - 安装 Node.js、VSCode、Hardhat、MetaMask
    - 初始化 Hardhat 项目；启动本地节点
2. JSON-RPC 基础
    - 理解 RPC 结构（method、params、id）
    - 用 Postman 调用 eth_blockNumber、eth_getBalance
3. 网络连接
    - 了解本地链、测试网（Sepolia/Holesky）
    - 用 Hardhat 连接测试网并获取区块数据
4. Hardhat 工作流
    - 编译、部署、验证流程
    - 编写简单的“HelloWorld”合约并部署
5. ethers.js 初始化
    - Provider、Wallet、Signer
    - 查询账户余额、获取区块号
6. JSON-RPC 实践
    - HTTP vs WebSocket
    - 自定义 RPC 请求发送交易（eth_sendRawTransaction）
7. 总结
    - 梳理开发环境 + RPC 通信流程
    - 输出一份 RPC 调用笔记与命令集合

## B 钱包交互 + C 合约开发
1. 钱包接口标准
    - EIP-1193、Provider 概念
    - 使用 MetaMask 连接钱包
2. ethers.js 合约读写
    - Contract 实例、callStatic、sendTransaction
    - 调用合约函数、打印返回值
3. 钱包签名
    - signMessage / signTypedData
    - 前端实现签名验证功能
4. Solidity 基础语法
    - 状态变量、函数、事件
    - 编写一个计数器合约 Counter
5. Hardhat 部署脚本
    - 编译 + 部署 + ABI 导出
    - 将 Counter 部署到 Sepolia
6. 前端交互
    - React + ethers.js 调用合约
    - 实现一个“点击增加计数”的前端按钮
7. 总结
    - 总结钱包与合约交互流程
    - 整理完整的合约部署与前端集成过程文档

## D 事件监听 + E DeFi 协议集成（入门）
1. Solidity 事件机制
    - event 与 emit 原理
    - 在合约中添加 Transfer 事件
2. ethers.js 事件监听
    - contract.on 与 provider.once
    - 实时打印事件日志
3. wagmi 实时监听
    - useWatchContractEvent
    - 用 React 实现动态更新交易记录
4. DeFi 合约结构
    - Router、Factory、Pair 模式
    - 阅读 Uniswap V2 Router ABI
5. Uniswap 集成
    - 代币兑换与查询
    - 调用 getAmountsOut 计算价格
6. Aave 借贷接口
    - 读取流动池状态
    - 获取 LendingPool 的储备率与利率
7. 总结
    - 链上数据流与多合约调用
    - 整理事件监听与协议调用文档

## E 进阶 + F 安全审计
1. ABI & calldata 原理
    - 函数选择器、参数编码
    - 用 Interface.encodeFunctionData 手动编码

2. 交易生命周期
    - nonce、gas、receipt
    - 追踪交易哈希、查看 Etherscan 上的 input data
3. 常见漏洞机制
    - 重入攻击、溢出、授权错误
    - 阅读漏洞示例代码
4. 安全库与防护
    - OpenZeppelin SafeMath、Ownable
    - 在合约中添加权限验证
5. 审计工具链
    - Slither、Mythril、Foundry test
    - 对合约执行自动检测
6. 前端安全
    - 防钓鱼签名、链切换验证
    - 实现钱包签名前的白名单校验
7. 总结
    - 输出完整 DApp 项目文档
    - 部署一个可交互 Token Dashboard（含事件与安全保护）

# 🎯 最终成果

- ✅ 一套完整可运行的 DApp（包含前端 + 合约 + 钱包交互 + 事件监听）

- ✅ 对以太坊 RPC、ABI、合约交互原理的深刻理解

- ✅ 能独立集成主流 DeFi 协议

- ✅ 具备初步安全审计能力与开发规范意识