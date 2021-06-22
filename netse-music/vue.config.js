const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径

}

console.log(__dirname)
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
	      .set('@', resolve('src'))
	      .set('assets', resolve('src/assets'))
	      .set('components', resolve('src/components'))
	      .set('views', resolve('src/views'))
        .set('common', resolve('src/components/common'))
  }
}