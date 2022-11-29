//依据环境变量决定使用哪一个值
// 根据环境变量决定使用哪一个值
export let API: string

//process要报错，尝试下载npm i --save-dev @types/node
if (process.env.NODE_ENV === "development") {
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}
