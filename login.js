<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./lib/jquery.js"></script>
</head>

<body>
    <button id="btnget">发起不带参数的GEt请求</button>
    <script>
        $(function () {
            $('#btnget').on('click', function () {
                $.get('http://www.liulongbin.top:3006/api/getbooks', function (res) {
                    console.log(res)
                })

            })
        })
    </script>
</body>

</html>