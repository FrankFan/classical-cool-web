import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    // umi4的坑
    // https://github.com/umijs/umi-next/issues/868
    $('head').append([`<title>classical</title>`]);
    return $;
  });
  api.addHTMLMetas(() => [{ name: 'foo', content: 'bar' }]);
  // api.addHTMLLinks(() => [{ rel: 'foo', content: 'bar' }]);
  // api.addHTMLStyles(() => [`body { color: red; }`]);
  // api.addHTMLHeadScripts(() => [`console.log('hello world from head')`]);
  // api.addHTMLScripts(() => [`console.log('hello world')`]);
  // api.addEntryCodeAhead(() => [`console.log('entry code ahead')`]);
  // api.addEntryCode(() => [`console.log('entry code')`]);
};
