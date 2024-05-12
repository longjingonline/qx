if ($response.statusCode != 200) {
    $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'] + ' ' + obj['query'] + ' ' + obj['zip'];
var ip = subtitle

$done({ title, subtitle, ip });
