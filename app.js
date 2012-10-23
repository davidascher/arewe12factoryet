

var chart = d3.select('#d3');

var repoData = {};
var repos = ['davidascher/arewe12factoryet'];

for (var i = repos.length - 1; i >= 0; i--) {
	var reponame = repos[i];
  var arewethereurl = 'https://raw.github.com/' + reponame + '/master/.arewethereyet.json';
  console.log('arewethereurl: ', arewethereurl);
	$.get(arewethereurl, function(data) {
    $.each(data, function(key, val) {
      console.log(key, val);
      items.push('<li id="' + key + '">' + val + '</li>');
    });

    $('<ul/>', {
      'class': 'my-new-list',
      html: items.join('')
    }).appendTo('body');
  });
};
