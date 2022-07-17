const rankingArea = document.getElementById('rankingArea');
const latestPage = [
  {
    'name': '僕がデータみる時にやっていること',
    'url': '/blogs/2022/how_to_analyze_data/',
    'date': '2022/07/16'
  },
  {
    'name': 'Webプッシュを使ってみる',
    'url': '/blogs/2022/how_to_use_web_push/',
    'date': '2022/07/13'
  },
  {
    'name': 'スタートアップに転職して2年半たったのでちょっと書く',
    'url': '/blogs/2022/my_opinion_startup/',
    'date': '2022/07/10'
  }
];
if (rankingArea && rankingArea !== null && rankingArea !== '')
{
  let tmp = '';
  for (let i = 0; i < latestPage.length; i++)
  {
    tmp = tmp + `<ul><a href="${latestPage[i].url}">${latestPage[i].name} - ${latestPage[i].date}</a></ul>`;
  }
  const contents = `<div><h2>最新の投稿</h2>${tmp}</div>`;
  rankingArea.innerHTML = contents;
}
