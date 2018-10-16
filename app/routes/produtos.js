module.exports = function (app){
    app.get('/produtos', function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.produtosBanco(connection);

        produtosBanco.lista(function(err,results){
            //res.send(results);
            res.render('produtos/lista', {lista:results});
            console.log("console");
        });

        connection.end();
    
        //res.render('produtos/lista');
    });
}