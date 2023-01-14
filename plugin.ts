import { IApi } from 'umi'

export default (api: IApi) => {
  api.modifyHTML(($) => {
    // umi4的坑
    // https://github.com/umijs/umi-next/issues/868
    $('head').append([`<title>classical</title>`])
    return $
  })
  api.addHTMLMetas(() => [{ name: 'description', content: 'turn classical books into NFT forever' }])
  api.addHTMLMetas(() => [{ name: 'keywords', content: 'classical books, NFT' }])
  api.addHTMLHeadScripts(() => [
    `
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d18458f6d8c5e31eb4bc085e23b008b7";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  `,
  ])
  // api.addHTMLLinks(() => [{ rel: 'foo', content: 'bar' }]);
  // api.addHTMLStyles(() => [`body { color: red; }`]);
  // api.addHTMLScripts(() => [`console.log('hello world')`]);
  // api.addEntryCodeAhead(() => [`console.log('entry code ahead')`]);
  // api.addEntryCode(() => [`console.log('entry code')`]);
}
