

var chart = d3.select('#d3');

var repoData = {};
var repos = ['davidascher/arewe12factoryet'];

for (var i = repos.length - 1; i >= 0; i--) {
	var repoparts = repos[i].split('/');
  var username = repoparts[0];
  var reponame = repoparts[1];


  var user = new Gh3.User(username)
  var repo = new Gh3.Repository(reponame, user);
  var myfile;
  repo.fetch(function (err, res) {
    if(err) { throw "outch ..." }

    repo.fetchBranches(function (err, res) {
      if(err) { throw "outch ..." }

      var master = repo.getBranchByName("master");
      master.fetchContents(function (err, res) {
        console.log("master: ", master);
        myfile = master.getFileByName(".arewethereyet.json");
        console.log("myfile:", myfile);
        myfile.fetchContent(function (err, res) {
          if(err) { throw "outch ..." }
          var raw = myfile.getRawContent();
        console.log("raw = ", raw);
          var data = JSON.parse(raw);
          console.log(data);
        });
      });
    })
  });
}

 //  var arewethereurl = 'https://raw.github.com/' + reponame + '/master/.arewethereyet.json';
 //  console.log('arewethereurl: ', arewethereurl);
	// $.get(arewethereurl, function(data) {
 //    $.each(data, function(key, val) {
 //      console.log(key, val);
 //      items.push('<li id="' + key + '">' + val + '</li>');
 //    });

 //    $('<ul/>', {
 //      'class': 'my-new-list',
 //      html: items.join('')
 //    }).appendTo('body');
 //  });
