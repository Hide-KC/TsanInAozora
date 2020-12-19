/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  
  const regex = new RegExp('https://www\.aozora\.gr\.jp/cards/.*/files/.*\.html');
  const found = msg.url.match(regex);
  console.log(msg.url);

  if (found && msg.command == "summon") {
    var src = document.getElementsByTagName("body")[0].innerHTML;
    var dst = "その時だった！</br>「破ぁーーーーーーーーーーーーーーーーーッ！」</br>青白い光弾が爆ぜる。寺生まれで霊感の強いＴさんだ！</br>「危ない所だったが、間に合ってよかったぜ」</br>Ｔさんはそう言うと、風のように颯爽と去っていった。</br>寺生まれって本当に凄い。私は改めてそう思った。";
    document.getElementsByTagName("body")[0].innerHTML = dst;
    sendResponse("the page title's changed: '" + src + "' -> '" + dst + "'");
  }
});